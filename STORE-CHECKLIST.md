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

## UI/UX-Guidelines, geprueft am 2026-09-02

Quelle: https://developers.raycast.com/basics/prepare-an-extension-for-store,
Abschnitt "UI/UX Guidelines". Punkt fuer Punkt gegen den Code geprueft.

| Regel | Stand |
|---|---|
| Preferences statt eigenem Config-Command | erfuellt |
| Actions in Title Case | korrigiert, die Mahlzeitentypen im Untermenue waren kleingeschrieben |
| Ellipse bei Actions mit Untermenue | korrigiert, beide Untermenues hatten keine |
| Untermenue wiederholt nicht den Eltern-Titel | erfuellt |
| Icons konsistent innerhalb einer Action-Liste | erfuellt |
| Navigation-API statt eigenem Stack | erfuellt |
| Kein `navigationTitle` im Root-Command | korrigiert, `Meal Plan` setzte ihn und aktualisierte ihn beim Blaettern |
| Kein flackernder Empty State | korrigiert, sechs Listen rendern die EmptyView jetzt erst nach dem Laden |
| Platzhalter in Suchleiste und Textfeldern | korrigiert, vier Felder hatten keinen |
| Keine externe Analytik | erfuellt, es gibt keine |
| US-English, keine eigene Lokalisierung | erfuellt |
| Neueste API-Version | aktualisiert auf 2.1.3 |

Offen zur Entscheidung: Die Code-Kommentare sind auf Deutsch. Die Guidelines
sagen dazu nichts, sie regeln nur die Oberflaeche. Fuer ein oeffentliches
Repository mit internationalen Reviewern waeren englische Kommentare
naheliegender. Kein Blocker, aber eine bewusste Entscheidung wert.

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
