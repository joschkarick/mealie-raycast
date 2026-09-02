# Store-Checkliste

Stand 2026-09-01. Was für eine Publikation im Raycast Store fehlt und was schon steht.

## Erledigt

- [x] `package.json` mit Name, Titel, Beschreibung, Icon, Kategorie, Lizenz
- [x] Fünf Commands mit Titel und Beschreibung
- [x] Drei Preferences, Token als Typ `password` (Keychain)
- [x] Extension-Icon 512x512 RGBA
- [x] `README.md` mit Setup-Anleitung
- [x] `CHANGELOG.md` im Raycast-Format mit `{PR_MERGE_DATE}`
- [x] `LICENSE` (MIT)
- [x] ESLint und Prettier sauber (`npm run fix-lint`)
- [x] `ray build` läuft durch
- [x] 57 Unit-Tests grün

## Erledigt am 2026-09-02

- [x] **Author-Handle.** `joschka_rick`, gegen
      `https://www.raycast.com/api/v1/users/joschka_rick` geprueft: HTTP 200.
- [x] **Store-Screenshots.** Fuenf Stueck unter `metadata/mealie-1.png` bis
      `mealie-5.png`, alle 2000x1250, einheitlicher Hintergrund. Sichtgeprueft:
      keine Instanz-URL, kein Token, keine Namen oder Mailadressen.
- [x] **`platforms`-Feld.** Laut Manifest-Doku ein Pflichtfeld, es fehlte.
      Eingetragen als `["macOS"]`.

      Die Extension nutzt **keine** plattformspezifischen APIs: kein
      AppleScript, kein `child_process`, keine macOS-Pfade. Technisch liefe sie
      auch unter Windows. Die Einschraenkung ist bewusst gesetzt, weil
      ausschliesslich auf macOS getestet wurde und `["macOS", "Windows"]` die
      unbelegte Behauptung waere, Windows funktioniere. Erweitern ist ein
      Einzeiler in der `package.json`, sobald jemand es dort geprueft hat.

- [x] `npm run lint` laeuft vollstaendig gruen durch (alle fuenf Checks).

## Publikation

Erst wenn beides erledigt ist:

```bash
npm run lint     # muss sauber sein
npm run build
npm run publish
```

`npm run publish` legt einen Pull Request im Repository `raycast/extensions` an.
Das ist eine öffentliche Einreichung unter deinem Namen, deshalb habe ich sie
bewusst nicht ausgeführt.

## Punkte für den Store-Review

- Die Command-Subtitles lauten alle `Mealie`. Der Lint akzeptiert das, manche
  Reviewer bemängeln aber eine Wiederholung des Extension-Namens. Falls im
  Review angemerkt: Subtitles ersatzlos streichen.
- Die Extension setzt eine selbst gehostete Mealie-Instanz voraus. Reviewer
  haben keine. Im PR-Text erwähnen, sonst kommt die Rückfrage.
