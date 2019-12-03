# Zadanie 8. Wypisywanie danych z API

Celem zadania jest podpięcie API Open Weather do aplikacji i pobieranie prognozy pogody z zewnętrznej usługi.


1. Skopiuj katalog `pliki/zad8/services/` do folderu `src` swojej aplikacji. W środku jest moduł `open-weather.js`
    zwracający statyczne dane pogodowe.

## A. Stan w komponencie
2. Dane synchroniczne: W komponencie `App.jsx` zaimportuj funkcję `fetchWeatherSync` z modułu `open-weather.js` 
    i wyświetlaj zwracane dane pogodowe w widoku aplikacji zamiast dotychczasowych. Do osiągnięcia tego 
    nie potrzebujesz modyfikować innych plików niz `App.jsx`. Upewnij się, ze dane wyświetlane są prawidłowo.
3. Zamień komponent App z funkcyjnego na klasowy, ponieważ będzie on przechowywał stan - prognozę pogody
4. Dodaj stan w komponencie App, w którym będą przechowywane dane pogodowe
5. Dane asynchroniczne: W komponencie `App.jsx` zaimportuj funkcję `fetchWeather` z modułu `open-weather.js` i wyświetlaj zwracane dane pogodowe 
    w widoku aplikacji zamiast dotychczasowych z `fetchWeatherSync`. Wykorzystaj do tego mechanizm async/await oraz metodę `componentDidMount`.
    Upewnij się, ze dane wyświetlane są prawidłowo.

## B. Pobieranie danych z API:
6. Wpisz swój klucz API z openweathermap.org w zmienną API_KEY
7. Usuń środek funkcji `fetchWeather` i napisz implementację która będzie zwracała dane z Open Weather w formacie JSON
    a. Wykorzystaj fetch API do pobrania danych
    b. URL do którego ma być wysłane ządanie jest w zmiennej API_URL
    c. skonweruj pobrane dane na obiekty javascriptowe wykorzystując metodę `.json()`
    d. wykorzystaj istniejącą funkcję `mapOpenWeatherToDomainModel` do przemapowania obiektu na format przyjmowany w komponencie App
    e. Upewnij się, że w widoku pojawiają się odpowiednie dane 

# Bonus
1. Dodaj informację o pobieraniu danych w widoku, jeśli dane nie zostały jeszcz pobrane z serwera
2. Dodaj informację o błędzie, jeśli pobieranie danych się nie powiodło

# ściąga
- async/await https://javascript.info/async-await
- fetch https://javascript.info/fetch
- React Zarządzanie Stanem + zamienianie komponentu z funkcyjnego na klasowy
    \+ akcje na załadowanie się komponentu (https://reactjs.org/docs/state-and-lifecycle.html)
