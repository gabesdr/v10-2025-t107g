# Verkefni 10, Vefforitun 107G "Free-For-All" verkefni.

## Verkefnalýsing
Fyrir verkefni 10 ég ákvaði að búa til "Random Fact Generator".

Kóðinn er frekar einfalt, hún notar `factGen.js` til að sækja eða búa til staðreyndir úr `Useless Facts API` og verkefnið var búið til með `Vite` ekki `Parcel`.

Samkvæmt lýsningunni í `vef1-2025-v10` var sett upp `SCSS(SASS)`, `Stylelint` og `eslint`.

Hægt er að keyra command `npm run lint:js` og `npm run lint:css` til að kanna stöðuna og virkni á Javascript og CSS.

En auðvitað það þarf að sækja öll viðeigandi skrám með `npm install`.

Verkefnið er skrifuð á ensku.

## Grunnur

- v10.2025.T107G (Main)
    - stylelint.config.mjs `css configs`
    - readme.md 
    - package.json `node packager, nota npm install til að sækja node-modules`
    - package-lock.json
    - index.html `aðal html`
    - eslint.config.js `jss lint configs`
    - .gitignore
    - src `source-code`
        - api
            - factGen.js `api fetch`
        - main.js `aðal jss`
        - styles.scss `aðal css kóðinn`
    - public `skrá sem inniheldur open-source myndir/logos frá Iconify`
        - octicon--logo-github-16.svg
        - octicon--mark-github-16.svg
    - fonts `skrá sem inniheldur fonts`
        - Bricolage Grotesque

## Athugasemdir

Error catch virkar en það gerist svo sjaldan að maður lendist í einhverju veseni.

> Útgáfa 1.1 "Mobile-view lagfært"

## Útgáfusaga
| Útgáfa | Lýsing                     |
| ------ | -------------------------- |
| 1.0  | Fyrsta útgáfa verkefnisins á Github |
| 1.1  | Mobile-view lagfært |








