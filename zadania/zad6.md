# Zadanie 6. JSX - Custom elements + stylowanie
0. Wejdź do projektu stworzonego dzięki create-react-app z poprzedniego zadania
1. Na podstawie HTML z pliku `pliki/zad6/start.html` stwórz kod aplikacji w JSX, 
który zawiera następujące drzewo komponentów: 
* App
    * Weather
        * WeatherLocation
        * WeatherIcon
        * WeatherDetails
ś
2. Zainstaluj paczkę `bulma` w Twoim projekcie (`npm install --save bulma`), a następnie 
zaimportuj w pliku `App.jsx` plik `bulma/css/bulma.min.css`

3. Stwórz plik CSS wstawiając do niego kod CSS z pliku `pliki/zad6/start.html` i zaimportuj go w pliku `App.jsx`

## ściąga
- import, export (https://javascript.info/modules-intro)

## Wskazówka
- Kazdy z komponentów powinien być zdefniownay w osobnym pliku
- Kazdy z komponentów to funkcja zwracająca kod JSX
- zamień atrybuty `class` na `className` dla tagów HTML w JSX (https://reactjs.org/docs/faq-styling.html) 

