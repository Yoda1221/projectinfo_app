# Projectinfo Application
## With multistep form and React Query

## Infofrmations
- a fejlesztéshez nem lesz szükség backendre
- a feladat megoldása során React használata kötelező <!-- Typescript -->
- a feladat megoldása során a meghatározott követelményeket be kell tartani
- ahol nincs megkötés ott a megoldás teljes mértékben a fantáziára, kreativitásra van bízva

## Tasks
> A céges projekteket megjelenítő oldal kialakítása

- [ ] Kártyás megjelenítés, amin látszik a projekt neve, leirása, és a kezdőbetűiből generált kép (Erre a célra használd valamelyik online image placeholder szolgáltatást)
- [ ] A listázás async módon történjen, ami a backend hívást szimulálja (Ténylegesen nincs backend hívás, a lényeg, az aszinkronitás)
- [ ] Legyen egy "Új projekt” gomb a felületen, amelyre kattintva a "Projekt hozzáadása felület"-re jutunk

> Projekt hozzáadása felület kialakítása

- [ ] A felületnek wizard alapú megjelenítése legyen.
- [ ] A wizard három oldalból álljon
    - Első oldal: Itt legyen lehetőségünk megadni a projekt nevét és leirását. A név egy kötelező mező, ami max 255 karaktert tartalmazhat. A leírás nem kötelező, viszont amennyiben van benne tartalom, úgy minium 50 karakter és maximum 500 karakter hosszú lehet
    - Második oldal: Itt legyen lehetőségünk megadni az adott projekten dolgozó kollégák neveit és a projektben betöltött pozícióikat
    - Harmadik oldal: Itt legyen lehetőségünk felsorolni a projekthez kapcsolódó linkeket. Link alatt érthetünk egy drive-os dokumentációt vagy akár a különböző rendszerek elérését
    - [ ] Legyen valamilyen fajta progress megjelenítés, hogy éppen hol tartunk a létrehozásban

> Új projekt hozzáadása után a listázó felület automatikusan frissüljön

-- * --

## Extra tasks
- Egy céges projekt részletes információinak a megjelenítése.
- A listázó oldalon tudjunk szűrni a céges projektekre keresési kifejezés alapján

## Requirements
- React és Typescript használata

### Run the application
- npm i (to download the node-modules)
- install json server (npm i json-server -g)
- run the folloving code on terminal (json-server -w data/projects.json -p 3500)
- open a new terminal and
- run: npm start
