# BOOK PRESENTATION DECISIONS

## Ontologia Liczby i Geometrii

**Canonical title:** `Ontologia Liczby i Geometrii`

**Structure:** `TRYLOGIA`

**Presentation decision from owner — 2026-09-10:**

> Przy ONTOLOGI nie dajemy opisu. Dajemy GALERIĘ W ŚRODKU.

### Implementation rule

The book presentation for `Ontologia Liczby i Geometrii` must **not** display a conventional promotional/summary description as the central content.

Instead, the interior of the book presentation is an **immersive gallery**. The gallery is the content experience for this title.

The existing owner-supplied podcast remains registered separately:

`Liczby_rzeźbią_fizyczną_strukturę_wszechświata(1).m4a`

Working podcast title:

`Liczby rzeźbią fizyczną strukturę wszechświata`

### Source-of-truth rule

Do not invent a description for this title merely because the other books have descriptions. `MISSING` description is intentional here because the owner explicitly chose the gallery as the presentation mechanism.

### Migration requirement

When implementing the React Books page:

- `Ontologia Liczby i Geometrii` must be rendered as a **gallery-led book experience**;
- the gallery belongs **inside the book presentation**, not as a generic external gallery section;
- do not replace the gallery with placeholder prose;
- do not generate a fictional book description;
- preserve the fact that this is a **trylogia**;
- use only owner-supplied/repository-verified gallery assets.
