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

## Offen, kann nur Joschka erledigen

### 1. Author-Handle

`ray lint` bricht ab:

```
Invalid author "joschkarick"
404 https://www.raycast.com/api/v1/users/joschkarick
```

Der Wert in `package.json` unter `author` muss ein existierender Raycast-Handle
sein. Zu finden in Raycast unter `Cmd+,` im Reiter **Account**, oder auf
raycast.com nach dem Login in der Profil-URL.

Prüfen lässt sich ein Kandidat so:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.raycast.com/api/v1/users/DEIN_HANDLE
```

`200` heißt: existiert. `404` heißt: falscher Handle.

Danach in `package.json` eintragen und `npm run lint` muss sauber durchlaufen.

### 2. Store-Screenshots

Der Store verlangt Screenshots unter `metadata/`. Die lassen sich nur aus der
laufenden Extension heraus erzeugen, dafür braucht es die Raycast-Oberfläche.

Vorgehen: `npm run dev` starten, den jeweiligen Command öffnen, im Action-Panel
(`Cmd+K`) die Aktion **Create Screenshot** auswählen. Raycast legt die Datei
selbst im richtigen Format unter `metadata/` ab.

Sinnvolle Motive, je einen pro Command:

1. `Search Recipes` mit Suchergebnissen
2. `Add to Shopping List` mit sichtbaren Label-Tags neben den Foods
3. `Shopping Lists` mit den nach Label gruppierten Sektionen
4. `Meal Plan` mit einer gefüllten Woche
5. Der Tagesauswahl-Screen aus `Cmd+M`

Achtung: Auf den Screenshots ist der Inhalt deiner Instanz zu sehen. Das Repo
ist öffentlich, und Store-Screenshots sind es ohnehin. Vor dem Hochladen kurz
prüfen, dass nichts Privates drauf ist.

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
