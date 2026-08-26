# Cross-Route Theme Audit

Light Field and Dark Field are now applied through a shared final stylesheet layer after each world’s expressive base CSS. The toggle continues to persist its state on the document root, so the selected field follows navigation across the hub, every portfolio world, and every case-study route.

| Route verified | Light Field result | Dark Field result |
| --- | --- | --- |
| `/portfolios/kinetic` | Paper surface, dark ink navigation and content panels, with a softened project visual. | Void surface, light ink panels, and a lower-luminance project visual. |
| `/case-studies/kinetic/ritual-frequency` | Bright image wash with black hero title, metadata, navigation, and reading control. | Dark image wash and light hero/read surfaces. |

The first Light Field case check exposed white hero copy over the bright wash. A follow-up rule now explicitly switches that copy and control set to dark ink, which was verified in the production Kinetic case-study hero.
