# Curso de NodeJS en Area51
Instructor: Sergio Hidalgo Cáceres

## **Clase 01**

* 01-basico
Podemos usar lo que ya sabemos de JavaScript

* 02-lectura-archivo
Aprendemos a leer un archivo externo. Éste podría ser un archivo exportado de un sistema legacy, podría ser un excel generado desde un móvil, podría ser un csv enviado a una cola de procesamiento, etc.

* 03-process
Identificamos nuestro proyecto en la lista de procesos de la computadora y aprendemos cómo pasarle argumentos. Esto podríamos usarlo en tareas programadas que se ejecuten una vez o con cierta frecuencia, digamos podríamos usarlo para llamar a otro script de NodeJS y que nos genere un archivo con el nombre que le pasemos como argumento para posteriormente enviarlo por correo.

* 04-eventos
Casi todo en NodeJS usa eventos. En JavaScript podemos generar eventos del mouse y del touch, ambos son generados por la acción de un usuario. También podemos generar eventos no generados por el usuario sino, por ejemplo, por la función setInterval.
En NodeJS los eventos pueden ser generados, por ejemplo, por una petición de una página desde la barra de url del navegador o por la petición asíncrona de una aplicación Restful.

* 05-reloj
Este es un evento que se realiza cada minuto para actualizar la hora. Esta hora podríamos usarla para mantener sincronizado el tiempo en una aplicación en tiempo real a través de un socket, es decir, podríamos tener sincronizado el tiempo en todas las páginas al mismo tiempo.

* 06-modulo
Es el mismo reloj del punto anterior pero encapsulado en un módulo para posteriormente llamarlo desde otros módulos u otros proyectos.

* 07-credenciales
Creamos y usamos un módulo para parametrizar credenciales de acceso a otros sistemas. Aquí podemos colocar las credenciales necesarias para loguearnos con Facebook, Google, Twitter, Instagram, GitHub, etc.

* 08-servidor
Finalmente creamos y levantamos un servidor básico en NodeJS que envía un mensaje en formato de html (también puede ser en formato plano). El servidor espera un evento "request" predeterminado por NodeJS. El evento tiene el mismo funcionamiento que vimos en los temas 4 y 5.

* 09-envio-archivo
Dejamos de enviar textos desde el servidor y enviamos un archivo estático html.

* 10-rutas
Enviamos (servimos) archivos estáticos html diferentes dependiendo de la url. De esta forma empezamos a enviar información diferente a los usuarios aunque aún ésta no es dinámica.

* 11-express
Aprendemos a utilizar el npm para instalar paquetes locales (npm install "paquete") y globales (npm install "paquete" -g). Aprendemos a generar el package.json usando "npm init" y cómo salvar los paquetes instalados dentro de éste (npm install "paquete" --save).
* Aprendemos lo básico de ExpressJS para levantar un servidor y servir páginas web dependiendo de las rutas usando menos códigos. También aprendemos cómo crear un directorio público en ExpressJS.

## **Otros**
* comandos-git
Aprendemos dos comandos de Git para clonar un repositorio a través de https (también se puede con ssh) y para mantener actualizada nuestra copia local del repositorio.

* instalar-paquetes
Aprendemos los comandos necesarios para instalar paquetes y también aprendemos la ventaja de tener y usar el package.json.