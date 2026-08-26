# System Theme Preference and Field Transition Audit

On first visit, the theme provider now reads `prefers-color-scheme` and uses the visitor’s operating-system preference as the Light Field or Dark Field default. It listens for system changes only until a visitor explicitly changes the field mode. The first manual toggle stores the choice under a portfolio-specific local-storage key, preventing later OS changes from overriding that choice.

The theme transition is gated by `prefers-reduced-motion: no-preference`. Eligible visitors receive a short fade of route surfaces, borders, color, image treatment, and the toggle itself; reduced-motion visitors receive an immediate change.

Production verification on `/portfolios/kinetic` confirmed a manual switch from Dark Field to Light Field and the persisted Light Field state after a fresh navigation. The theme contract also covers system-preference detection, explicit-selection behavior, and reduced-motion transition gating.
