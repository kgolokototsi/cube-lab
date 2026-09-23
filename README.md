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

## Install it

There is no app store download and no APK. It is a web app: the browser installs it,
you get an icon, and after the first open it runs with no internet connection.

**https://kgolokototsi.github.io/cube-lab/**

### iPhone and iPad

Use **Safari**. On iOS 16.4 and later other browsers can do this too, but Safari is the
one that always works.

1. Open the link in Safari.
2. Tap the **Share** button - the square with an arrow coming out of it. It is in the bar
   at the bottom on an iPhone, and at the top right on an iPad.
3. Scroll down the share sheet and tap **Add to Home Screen**.
4. The name comes up as *Cube Lab*. Tap **Add**.
5. Open it once from the new icon, still online, so it can finish saving itself.

If you cannot find *Add to Home Screen*, scroll to the bottom of the share sheet and tap
**Edit Actions** to switch it on.

### Huawei - HarmonyOS and EMUI

Use the **Huawei Browser** that came with the tablet. This works on HarmonyOS NEXT as well,
which cannot install Android APK files at all - a web app sidesteps that completely.

1. Open the link in Huawei Browser.
2. Tap the **menu** button - three lines or three dots, usually bottom right.
3. Tap **Add to home screen**. Some versions call it *Add to desktop* or *Save to desktop*,
   and some keep it under **Tools** or **More**. If the browser offers **Install**, use that.
4. Confirm the name and tap **Add**.
5. Open it once from the new icon, still online, so it can finish saving itself.

On a Huawei device that has Google services you can use Chrome instead: menu, then
**Install app** or **Add to Home screen**.

### Check it works offline

Turn on aeroplane mode and open it from the icon. Everything should work: the cube, Play,
all seven steps and the voice.

### Updating

It updates itself the next time it is opened **with a connection**. If it has been offline
for a while it will keep showing the older version until one online open.

The name under the icon is fixed when you install. To change it, remove the icon and add it
to the home screen again.

## Build

One HTML file, no libraries, no build step needed to run it - just open `index.html`.
