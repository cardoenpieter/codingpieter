We maken een To Do app die een todo kan toevoegen, aanpassen of verwijderen.
Uw app moet ook in staat zijn om alle todos weer te geven met hun bijhorende status ("in_progress" of "done").
Er is geen authenticatie aanwezig op de api en alles wordt opgeslagen in memory, dit wil dus zeggen als je de api herstart of als die crasht ben je je todo's kwijt.
Als je API niet crasht en je refresh'd uw webpagina zou je nog steeds je todos moeten kunnen zien.

De routes die worden aangeleverd zijn:

- GET /todo
- POST /todo/create
  Body: - name: String (required) - state: Enum -> "in_progress" or "done"
- POST /todo/update
  Body: - id: String (required) - state: Enum -> "in_progress" or "done" (required)

- DELETE /todo/{id}

Bij opstart moet je eerst en vooral "npm install" runnen in de backend folder, dit om uw packages te installeren.
Vervolgens kan je de api opstarten in de folder backend door de volgende command in uw terminal te runnen: "npm run start"

In de folder backend moeten jullie niks aanpassen, dit is voor jullie opgezet om de oefening te kunnen maken. Jullie mogen de todo app maken in de folder frontend.

Veel succes!
