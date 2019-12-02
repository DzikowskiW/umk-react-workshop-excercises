# Zadanie 8. Wypisywanie danych z API

Celem zadania jest podpięcie API Open Weather do aplikacji i pobieranie prognozy pogody z internetu.


1. Skopiuj katalog `services/` do folderu `src` swojej aplikacji. W środku jest moduł `open-weather.js` 
    zwracający statyczne dane.

## A. Wyświetlanie danych asynchronicznych
2. Dane synchroniczne: W komponencie `App.jsx` zaimportuj funkcję `getWeatherSync` z modułu `open-weather.js` 
    i wyświetlaj zwracane dane pogodowe w widoku aplikacji zamiast dotychczasowych. Do osiągnięcia tego 
    nie potrzebujesz modyfikować innych plików niz `App.jsx`. Upewnij się, ze dane wyświetlane są prawidłowo.
3. W komponencie `App.jsx` zaimportuj funkcję `getWeather` z modułu `open-weather.js` i wyświetlaj zwracane dane pogodowe 
    w widoku aplikacji zamiast dotychczasowych. Wykorzystaj do tego mechanizm async/await. Upewnij się, ze dane wyświetlane 
    są prawidłowo.

## B. Pobieranie danych z API:
4. Wpisz swój klucz API z openweathermap.org w zmienną API_KEY
5. Usuń środek funkcji `getWeather` i napisz implementację która będzie zwracała dane z Open Weather w formacie JSON
    a. Wykorzystaj fetch API do pobrania danych
    b. URL do którego ma być wysłane ządanie jest w zmiennej API_URL
6. Upewnij się, ze w widoku pojawiają się odpowiednie dane

# Bonus
1. Dodaj informację o pobieraniu danych w widoku, jeśli dane nie zostały jeszcz pobrane z serwera
2. Dodaj informację o błędzie, jeśli pobieranie danych się nie powiodło

# ściąga
- async/await https://javascript.info/async-await
- fetch https://javascript.info/fetch
- Promise https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

# Wskazówki
- Po pobraniu danych z sewera pamiętaj, zeby zamienić je na obiekty javascriptowe wykorzystując `request.json()`
