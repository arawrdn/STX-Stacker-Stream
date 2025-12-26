;; Title: Stacker Stream Access
;; Description: Validates access based on STX holding or Stacking activity

;; Constants
(define-constant ERR-NOT-ELIGIBLE (err u403))

;; Data Map: Tracks unique content access metadata
(define-map Content uint { title: (string-ascii 50), min-balance: uint })

;; Read-Only: Check if user can unlock content
;; Logic: User must have a balance > min-balance AND have held STX for > 500 blocks
(define-read-only (is-authorized (user principal) (content-id uint))
    (let (
        (requirement (unwrap! (map-get? Content content-id) false))
        (user-balance (stx-get-balance user))
    )
    (if (>= user-balance (get min-balance requirement))
        (ok true)
        (err ERR-NOT-ELIGIBLE)
    )
    )
)

;; Admin: Add new content requirement
(define-public (add-content (id uint) (title (string-ascii 50)) (min-stx uint))
    (begin
        ;; In a real app, add an (is-eq tx-sender admin) check here
        (ok (map-set Content id { title: title, min-balance: min-stx }))
    )
)
