## Iniciando el proyecto

Lo que busco en este ejercicio es practicar algo de rutas dinamicas en Nextjs en su version 13, para ello se utilizo la api de pokemon https://pokeapi.co/ y se creo un proyecto con Nextjs y Typescript.

La idea aparte de las rutas dinamicas es sacar provecho de uno de los beneficios de Nextjs que es el pre-rendering, en este caso se utilizo el Static Generation, ya que la data de los pokemons no cambia con frecuencia.

Opcion # 1 con npm

````bash

```bash
# Primero instalar las dependencias
npm install
# Segundo correr el proyecto generando el build
# NOTA: Si desea ejecutar el proyecto en modo de producción, primero debe comentar en next.config.js la línea 7
# Si no se comenta igual funcionará  pero aparecerá un pequeño error en la consola
npm run build
# Correr el proyecto
npm run start
# abrir en el navegador localhost:3000
http://localhost:3000/
````

Option # 2 with docker

```bash
# NOTA: En Docker primero debes descomentar la línea 7 en next.config.js
# Primero crea la imagen del proyecto.
docker build -t reto-blue .
# Segundo ejecuta el contenedor
docker run --name=container-reto1 -p 3000:3000 reto-blue
# abrir en el navegador localhost:3000
http://localhost:3000/

```

En la url como es un ejercicio de rutas dinamicas se pueden navegar entre los 151 pokemons

http://localhost:3000/pokemon/14

http://localhost:3000/pokemon/56

http://localhost:3000/pokemon/78

si se ingresa otro dato, se muestra la pagina 404
