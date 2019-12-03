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
    oraz przycisk _Szukaj_ z className `button`
4. Dodaj stan do komponentu LocationInput, w którym trzymana będzie wpisana w input fraza.
5. Dodaj akcję dla elementu inputu: w momencie jego zmiany uaktualniaj stan komponentu 
    (wykorzystaj atrybut `onChange`) oraz przekazuj wartość ze stanu do komponentu (wykorzystaj atrybut `value`)
6. Dodaj akcję dla przycisku: w momencie jego wciśnięcia wywołuj funkcję `onSubmit` z propsów, przekazując nazwę
    miasta wpisanego przez uzytkownika.

## Modyfikacja komponentu App
7. Stwórz metodę w komponencie App która przyjmuje nazwę miasta i zapisuje prognozę pogody w stanie komponentu.
    Jeśli potrzeba zmodyfikuj serwis pobierający dane z usługi, aby przyjmował miasto jako argument.
8. Wykorzystaj stworzoną metodę, do pobierania danych o pogodzie podczas załadowania się komponetu 
    (componentDidMount) oraz gdy uzytkownik wpiszę miasto w wyszukiwarkę i kliknie szukaj.

## Ściąga
* React Formularze: element input oraz button (https://reactjs.org/docs/forms.html)
* React Eventy (https://reactjs.org/docs/handling-events.html)

## Wskazówki
* W JavaScripcie funkcje są pełnoprawnym obiektem, dlatego mogą być przekazywane w propsach
* W razie wątpliwości staraj wzorować się na przykładach z rozdziałów dokumentacji Reacta podanych 
    powyżej w ściądze