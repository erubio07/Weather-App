Lo primero que puedo hacer es quitar el componente Cards que se encuentra en el archivo App.js
Crear el componente Nav (ya lo tengo creado), se le importa SearchBar.
Cards tiene que tener un estado que al cambiarse haga un nuevo renderizado.
Este estado tiene que guardar la cuidades en un array.
A medida que escribimos en el cuadro de busqueda, guardamos en un estado "input".
Con cada click en el boton buscar se ejecuta una función que haga la petición a la API pidiendole lo que se ingreso en el imput.
Cuando venga la respuesta esa info se guarda en el estado de Cards, pero es importante que no sobreecriba la info del estado sino que el estado se actualice trayendo todo lo que ya tenia y agregue la nueva ciudad.

< ------------------------------------------------ >
App.js ----> No tiene más a SearchBar, ni Card, ni data. Solo va a tener Nav y Cards. Nota importante lo que no tiene no hay que importarlo.
Nav --> Debe renderizar a SearchBar. App manda a Nav la función onSearch y Nav se la pasa a SearchBar.
<SearchBar onSearch={OnSearch}></onSearch>
Por lo tanto la función OnSearch se debe generar en App.js
Esta función la paso desde App a Nav mediante un onSearch ==> Nav onSearch={onSearch}
La función debe hacer la peticion a la API mediante axios
En serachBar creo el estado [searchInputs, setSearchInput]=useState('')
y una función que modifique dicho estado changeHandler = (e) => setSearchInputs (e.target.value), toma lo que se escribe y lo guarda en el estado.
Es bueno ejecutar la función onSearch con un console log antes de hacer la peticion para ver que todo fuincione bien
Para hacer la peticion tengo que guardar el apiKey en una variable.
axios
.get(`url`)
.then((response) => {
    setCities((oldCities) => [...oldCities, response.data])
}) response es la respuesta completa pero solo necesitamos la data.
Creo el estado [cities, setCities] = usestate([]) no olvidar de importar useState from React
App, le pasa a Cards cities = {cities} y Cards recibe las Cities de App.

Función para cerrar la Card, se debe crear en el App.
Esta funciones esta en App porque App es el componente PADRE de todos los componentes.
onClose = (id) => {setCities oldCities => oldCities.filter((city) => city.id !== id)}
Paso onClose a Cards y Cards se lo da a Card, es importante que la funcion cuando esta en card reciba un id