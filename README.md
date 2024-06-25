# SpaceX API Test

A través de una serie de ejercicios prácticos, he explorado diversas consultas y funcionalidades disponibles en la API, adquiriendo una comprensión más profunda de cómo interactuar con ella.

## Herramientas Utilizadas

- **[Thunder Client](https://www.thunderclient.com/):** Una extensión de VS Code para realizar y gestionar solicitudes HTTP.

## Ejercicios Prácticos

### Ejercicio 1: Obtener Todos los Nombres de los Cohetes

**Objetivo:** Realizar una consulta simple para obtener una lista de los nombres de todos los cohetes.

**Consulta:**
```json
POST https://api.spacexdata.com/v4/rockets/query
{
  "query": {},
  "options": {
    "select": "name"
  }
}
```
![image](https://github.com/Juannnrv/spaceX/assets/160557063/d05b8b40-e5eb-4b30-9a4c-9c037d9ca45b)

### Ejercicio 2: Obtener los Primeros 3 Cohetes Ordenados por Nombre

***Objetivo:*** Realizar una consulta con paginación y ordenación para obtener solo los primeros tres cohetes, ordenados alfabéticamente por nombre.
**Consulta:**
```json
POST https://api.spacexdata.com/v4/rockets/query
{
  "query": {},
  "options": {
    "select": "name",
    "sort": {
      "name": "asc"
    },
    "limit": 3
  }
}
```
![image](https://github.com/Juannnrv/spaceX/assets/160557063/a83f4d31-c882-40ee-9d91-7b22f646cb25)


## Conclusión
A través de estos ejercicios, he aprendido a utilizar la API de SpaceX para realizar diversas consultas y paginaciones, obteniendo información específica y ordenada sobre los cohetes. Thunder Client ha sido una herramienta esencial para enviar y probar las solicitudes HTTP de manera eficiente. Estos ejercicios me han permitido desarrollar una comprensión sólida de las capacidades y el uso de la API de SpaceX.


