# Zadanie 7. Props
1. W pliku `App.js` dodaj poniższą zmienną w ciele funkcji:

```js
 const weatherData = {
    city: 'Warszawa',
    temperature: 4.0,
    humidity: 60,
    windSpeed: 12,
    cloudiness: 88,
    iconId: '04d',
};
```

2. Zmodyfikuj kod poprzedniego zadania i spraw aby pogoda była pokazywana na bazie powyższych danych,
 przekazując dane z komponentu App za pomocą propsów.

## Ściąga
Propsy w React (https://reactjs.org/docs/components-and-props.html)

## Wskazówki
Możesz użyć _spread syntax_ do rozbicia obiektu na propsy (https://gist.github.com/sebmarkbage/07bbe37bc42b6d4aef81)
