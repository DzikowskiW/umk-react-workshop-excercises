# Zadanie 9. TODO

Celem zadania jest dodanie inputa z wyszukiwaniem miasta

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
5. Dodaj akcję dla inputu: w momencie jego zmiany uaktualniaj stan komponentu (wykorzystaj atrybut `onChange`)
6. Dodaj akcję dla przycisku: w momencie jego wciśnięcia wywołuj funkcję onSubmit z propsów, przekazując nazwę
    miasta wpisanego przez uzytkownika.

## Modyfikacja komponentu App TODO
7. Zamień komponent App z funkcyjnego na klasowy, poniewaz będzie on przechowywał stan - prognozę pogody
8. Dodaj stan w komponencie App, w którym będą przechowywane dane pogodowe
9. Upewnij się, ze pogoda jest wywoływana po załadowaniu się komponentu dla dowolnego domyślnego miasta 
    (zaimplementuj metodę `componentDidMount` w klasie `App`)
10. Stwórz metodę w komponencie App która przyjmuje nazwę miasta i zapisuje prognozę pogody w stanie 