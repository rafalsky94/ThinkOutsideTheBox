# ThinkOutsideTheBox

Wersja z CMS

Można edytować sekcje "opinie" z poziomu CMS.

# Live z CMS

https://rafalsky94.github.io/ThinkOutsideTheBox/

Można korzystać z CMS, jednakże działa tylko autentykacja e-mail i odczyt danych. Dodawania, usuwanie i edycja danych działa w wersji lokalnej.

# Instrukcja

1. W folderze głównym uruchom terminal
2. Wpisz $ npm install a następnie $ json-server --watch db.json (koniecznie port 3000)
3. Uruchom index.html w folderze głównym, sekcja "opinie" pobiera dane z API db.json (w app.js i cms-apps.js należy zmienić ścieżkę z "https://think-outside-the-box-f4d2a.firebaseio.com/" na "http://localhost:3000" - korzystając ze zmiennej "url")
4. Na pasku nawigacyjnym jest link do CMS (poprawny login to pantadeusz@gmail.com  hasło: haslo123) - walidacja oparta o firebase.
5. Teraz możesz edytować, dodawać i usuwać opinie na stronie głównej


# Wykorzystałem:

1. Gimp do cięcia
2. HTML
3. CSS (Gulp-Sass do RWD)
4. JS (jQuery) do obsługi navbaru i swipera
5. Bootstrap (Hamburger)
6. Swiper (slider)
7. Firebase

# Co dalej

W niedalekiej przyszłości chcę dodać w CMS zmianę zdjęć opartą o firebase w sekcji "opinie".

