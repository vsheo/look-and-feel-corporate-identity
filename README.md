# Corporate Identity

Ontwerp en maak voor een opdrachtgever een website op basis van een bestaande huisstijl.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/INSTRUCTIONS.md)


# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Mediahuis
Een website met de radio radiostations van mediahuis.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

### mobiele versie

Op de landings pagina van de mobiel versie ziet de gebruiker eerst alle radio zenders.
als er op een geklikt wordt dan komt de programma tevoorschijn.

wat kan de gebruiker allemaal doen?
- Horizontaal door de weken lijst scrollen
- Door het programma scrollen
- een tijdlijn om te zien wat er afgedraaid wordt
- Als de gebruiker naar een andere radio zender wilt gaan, dan kan de gebruiker op een knop drukken aan de rechter kant van het scherm. Dit slide een navigatie menu in beeld, waar de gebruiker alle radio zenders kan zien.

![mobile_1](https://github.com/user-attachments/assets/c9462f6e-3f8e-456b-bb28-0de301265723)
![mobile_2](https://github.com/user-attachments/assets/603b2622-01f1-4a05-9808-ab945ced021a)
![mobile_3](https://github.com/user-attachments/assets/d5fbcb46-bfa7-4fb1-b73d-e56e1e236ecb)


### desktop versie
Op de desktop pagina ziet de gebruiker gelijk alle radio zenders, de eerste is gelijk open.
dit geeft indirect aan dat er op de andere geklikt kan worden.
op een open programma container kan de gebruiker horizontaal scrollen om door de programma heen en weer te gaan <br /> <br />
![desktop_1](https://github.com/user-attachments/assets/810df085-abb5-4566-99c4-94eaf4e550e0)
![desktop_2](https://github.com/user-attachments/assets/2a94f6b2-6de9-4f16-b080-f6d9accb29dd)
![desktop_3](https://github.com/user-attachments/assets/9b7e838b-8efc-4b8e-9508-48c2a20eddb0)

### Eind resultaat
hier is een video hoe de mobiele pagina werkt
video

hier is een video hoe de desktop pagina werkt
video


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

### HTML
in deze sprint heb ik mijn code DRY(don't repeat Yourself) geschreven.
ik heb ik mijn main 5 elementen:
- weken lijst
- tijdlijn
- programma container
- menu voor navigatie op mobiel
- een player (zien wat er afgespeeld wordt/ play pause button) <br /> <br />


als de pagina in geladen wordt is alleen de summary, uit de programma container, te zien.
de weken lijst, tijdlijn, nav en player is op display none.

als er op een summary geklikt wordt dan komen deze elementen in beeld, door javaScript die display none weg haalt van deze elementen.
hier door wordt voor elke radio zender dezelfde weken lijst, tijdlijn, nav en player gebruikt

de website elementen die standaard niet te zien zijn: <br /> <br />
![mobile_none](https://github.com/user-attachments/assets/d5b7085c-5222-4e25-80b9-439f91b1264e)


### CSS


### javaScript



## Bronnen
section snap voor de desktop site.
Dit brengt de programma naar boven als het geklikt wordt. <br />
https://codepen.io/shooft/pen/WNVZYeZ

de scroll bar stylen <br />
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar2


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

