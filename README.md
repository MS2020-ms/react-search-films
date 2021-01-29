# Segunda prueba del proceso de selección.

Este repositorio contiene una mini app que se encarga de mostrar las películas/series que se obtienen de la api de [OMDB](http://www.omdbapi.com/).

### Puesta en marcha.

Hazte fork del repositorio para realizar la prueba.
Debes tener [node](https://nodejs.org/es/) y [yarn](https://yarnpkg.com/) instalados.
Entra en el directorio y ejecuta `yarn` para descargar las dependencias.
Después, simplemente ejecutando `yarn start` se arrancará la aplicación.

### Instrucciones.

La idea es que dediques un par de horas más o menos.
Si te quedas bloqueado o tienes cualquier problema no dudes en parar y preguntarnos por mail.
Si no somos capaces de resolver tus dudas por mail, se podría hacer una videoconferencia rapidita para ver el problema.
Ahora mismo todo está implementado en el fichero `App.js`, pero no tiene que quedar así necesariamente. Si lo ves oportuno puedes refactorizar y extraer funcionalidad a diferentes ficheros.
La idea es que veamos como programarías en un proyecto real.
Cuando termines el ejercicio, pásanos el link para ver el código.

### Comportamiento inicial.

Al arrancar la aplicación verás que muestra 10 resultados.
Esto es porque hace una petición inicial a la api con el parámetro de búsqueda `king`.

```
const response = await fetch('http://www.omdbapi.com/?apikey=a461e386&s=king')
```

### Primera tarea.

Queremos buscar en la api de OMDB lo que se escriba en la caja de búsqueda.
Debes hacer que en lugar de pasar el parámetro de búsqueda `king` hardcodeado, ese parámetro sea lo que haya en el input cuando se haga click en el botón `Search`.

### Segunda tarea.

La api devuelve los resultados de 10 en 10. Acepta un parámetro `page` para indicar la página que quieres que devuelva en los resultados. Por ejemplo:

```
const response = await fetch('http://www.omdbapi.com/?apikey=a461e386&s=king&page=5')
```

Queremos que implementes los click en las flechas de la derecha e izquierda de manera que al clickar en la derecha se incremente en 1 el parámetro `page`, y clickando en la izquierda se decremente en 1.
Los resultados se deben actualizar con lo que devuelva la api.

### Precauciones

Si no te resulta muy familiar el hook `useEffect` tienes que leer un poco sobre él y como manejar peticiones asíncronas en su interior, ya que un mal uso puede dar lugar a bucles infinitos.
