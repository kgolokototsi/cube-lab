# Oa's Cube Lab

An interactive seven-step guide to solving a 3x3 Rubik's cube, built for a six-year-old who already solves a 2x2.

Press **Play** and it reads the cube on screen, works out the moves for the step you are on, and turns them one
at a time. The white cross has no algorithm - it is solved by looking - so the app generates those moves too.

## The method

Layer by layer, white on the bottom the whole way, so the cube is never flipped mid-solve.

| Step | | Algorithm |
|---|---|---|
| 1 | White cross | daisy, then drop each petal |
| 2 | White corners | `R U R' U'` |
| 3 | Middle layer | `U R U' R' U' F' U F` / `U' L' U L U F U' F'` |
| 4 | Yellow cross | `F R U R' U' F'` |
| 5 | Yellow edges | `R U R' U R U2 R' U` |
| 6 | Corner spots | `U R U' L' U R' U' L` |
| 7 | Last twists | `R' D' R D` |

Every algorithm is verified in a cube simulator, and the whole method is tested over 500 random scrambles.

## Install it on a phone or tablet

1. Open the page in the browser.
2. Menu, then **Install app** or **Add to home screen**.
3. Open it once from the new icon so it finishes caching.

After that it works with no internet connection.

## Build

One HTML file, no libraries, no build step needed to run it - just open `index.html`.
