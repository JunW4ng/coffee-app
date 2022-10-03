# Coffee-App
Este es un proyecto personal enfocado a desarrollar una aplicación de cajero y pedido de ordenes para una cafeteria.

## Descripción del proyecto
### Db
En el archivo data.sql estara todo lo necesario para poblar la base de datos.

### Public
Aca se encuentra la landing page, que vendria correspondiendo al login de la aplicación, también esta el archivo CSS con los estilos de cada vista que se podrán ver en la app.

### Routes
En esta carpeta encontraremos la API de la aplicación, en el cual se la app podrá obtener la información de todos los empleados y productos, crear y eliminar los datos de un empleado.

También se encuentra un archivo que renderiza la landing page junto a una landing page con alerta, esta última se activa cuando se ingresa un usuario no registrado.

### Source
Dentro de esta carpeta está la lógica de la autentificación. Esta distingue el inicio de sesión entre un empleado y un administrador.

### Views
Aca estarán todas las vistas y componentes correspondiente a la app.

### Archivo db.js
En este archivo se hacen todos los llamados a la base de datos.

## Archivo server.js
Archivo donde se inicializará todo el proyecto.