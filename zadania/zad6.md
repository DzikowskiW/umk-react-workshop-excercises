# Zadanie 6. JSX - Custom elements + stylowanie
0. Wejdź do projektu z poprzedniego zadania. 

1. Na podstawie HTML z pliku `pliki/zad6/start.html` stwórz kod aplikacji w JSX, 
który zawiera następujące drzewo komponentów: 
* App
    * Weather
        * WeatherIcon
        * WeatherDetails
Komponenty mogą być statyczne, więc zmienna `weatherData` może zostać usunięta z komponentu App.

2. Zainstaluj paczkę `bulma` w Twoim projekcie (`npm install --save bulma`), a następnie 
    zaimportuj w pliku `App.js` plik `bulma/css/bulma.min.css`

3. Stwórz plik `App.css` wstawiając do niego kod CSS z pliku `pliki/zad6/start.html` 
    i zaimportuj go w pliku `App.js`. Jeśli taki plik już istnieje usuń jego dotychczasową zawartość.

## ściąga
- import, export (https://javascript.info/modules-intro)

## Wskazówka
- zamień atrybuty `class` na `className` dla tagów HTML w JSX (https://reactjs.org/docs/faq-styling.html) 
- upewnij się, że przeklejony kod HTML działa zanim zaczniesz dzielić go na mniejsze komponenty
- Każdy z komponentów powinien być zdefniownay w osobnym pliku
- Każdy z komponentów to funkcja zwracająca kod JSX
- pamiętaj, żeby w plikach w których występuje JSX importować Reacta `import React from 'react';`

