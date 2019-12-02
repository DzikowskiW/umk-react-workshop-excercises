# Zadanie 9.

Stwórz wyszukiwarkę miast, dla których wyszukiwana będzie prognoza pogody.

1. Skopiuj pliki z katalogu `pliki/zad9` do katalogu `src` aplikacji.
2. W Komponencie `App` dodaj komponent `LocationInput` przed komponentem `Weather`:
```js
<LocationInput 
    onSubmit={newLocation => console.log}
/>
```

## Modyfikacja komponentu LocalInput
3. W LocationInput dodaj w odpowiednim miejscu input miasta z className `input` i 
    oraz przycisk szukaj z className `button`
4. Dodaj stan do komponentu LocationInput, w którym trzymana będzie wpisana w input fraza
5. Dodaj akcję dla elementu inputu: w momencie jego zmiany uaktualniaj stan komponentu 
    (wykorzystaj atrybut `onChange`)
6. Dodaj akcję dla przycisku: w momencie jego wciśnięcia wywołuj funkcję onSubmit z propsów, przekazując nazwę
    miasta wpisanego przez uzytkownika.

## Modyfikacja komponentu App
7. Zamień komponent App z funkcyjnego na klasowy, poniewaz będzie on przechowywał stan - prognozę pogody
8. Dodaj stan w komponencie App, w którym będą przechowywane dane pogodowe
9. Stwórz metodę w komponencie App która przyjmuje nazwę miasta i zapisuje prognozę pogody w stanie komponentu.
    Jeśli potrzeba zmodyfikuj serwis pobierający dane z usługi, aby przyjmował miasto jako argument.
10. Wykorzystaj stworzoną metodę, do pobierania danych o pogodzie podczas załadowania się komponetu 
    (componentDidMount) oraz gdy uzytkownik wpiszę miasto w wyszukiwarkę i kliknie szukaj.

## Ściąga
* React Formularze: element input oraz button (https://reactjs.org/docs/forms.html)
* React Eventy (https://reactjs.org/docs/handling-events.html)
* React Zarządzanie Stanem + zamienianie komponentu z funkcyjnego na klasowy
    \+ akcje na załadowanie się komponentu (https://reactjs.org/docs/state-and-lifecycle.html)

## Wskazówki
* W JavaScripcie funkcje są pełnoprawnym obiektem, dlatego mogą być przekazywane w propsach
* W razie wątpliwości staraj wzorować się na przykładach z rozdziałów dokumentacji Reacta podanych 
    powyzej w ściądze