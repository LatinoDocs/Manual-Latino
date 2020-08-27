.. meta::
   :description: Librería de archivos en Latino
   :keywords: manual, documentacion, latino, librerias, lib, archivo

===============
Lib "archivo"
===============
La librería **archivo** contiene las funciones principales para el manejo de archivos en Latino.

Cada uno de estos comandos puede recibir el **nombre** como también la **ruta** del archivo.

El nombre de archivo o ruta del archivo deben ser escritas entre **comillas**.


**Lista de comando**

+----------------+------------+---------------------------------------------------------+
| Comando        | Parámetros | Descripción                                             |
+================+============+=========================================================+
| crear\( \)     | 1          | Crea un archivo con el nombre especificado              |
+----------------+------------+---------------------------------------------------------+
| ejecutar\( \)  | 1          | Ejecuta el archivo especificado                         |
+----------------+------------+---------------------------------------------------------+
| eliminar\( \)  | 1          | Elimina el archivo especificado                         |
+----------------+------------+---------------------------------------------------------+
| leer\( \)      | 1          | Lee el contenido de un archivo y lo convierte en cadena |
+----------------+------------+---------------------------------------------------------+
| lineas\( \)    | 1          | Almacena en una lista cada línea del archivo            |
+----------------+------------+---------------------------------------------------------+

.. ----

.. archivo.copiar\( \)
.. --------------------
.. Copia en el archivo especificado la cadena(texto) que deseamos añadir.

.. Los textos en el segundo argumento en el también podemos usar los :ref:`caracteres especiales <cCaracterEspLink>`.

.. El primer argumento adminte rutas mas no el segundo argumento de este comando.

.. archivo.copiar("c:\user\archivo1.lat", "archivo2.lat")
.. //El comando no coincide con su funcion.
..    //Este comando pega al final del archivo la segunda cadena del comando.


.. .. raw:: html

..    <pre><code class="language-latino line-numbers"></code></pre>

.. el comando "poner" es el comando "copiar"

.. +----------------+------------+---------------------------------------------------------+
.. | poner\( \)     | 2          | Sobrescribe el archivo con el texto especificado        |

----

archivo.crear\( \)
-------------------
Este comando nos permite **crear un archivo** con un nombre especificado en cualquier ruta de nuestro sistema.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este comando creará un archivo
   con el nombre de "prueba"
   en la ruta "C:\Users\"
   */

   archivo.crear("C:\Users\prueba.lat")</code></pre>

.. note:: Si al especificar la ruta del archivo a crear escribimos un nombre de alguna carpeta que no existe, este no hará nada, ya que este comando solo puede crear archivos y no carpetas.

----

archivo.ejecutar\( \)
----------------------
Este comando nos permite la **ejecución** de un archivo que contenga código de Latino.

.. raw:: html

   <pre><code class="language-latino line-numbers">archivo.ejecutar("c:\user\prueba.lat")</code></pre>

----

archivo.eliminar\( \)
----------------------
Este comando nos ayuda a **eliminar** un archivo especificado.

.. raw:: html

   <pre><code class="language-latino line-numbers">archivo.eliminar("c:\user\prueba.lat")</code></pre>

----

archivo.leer\( \)
------------------
Para este comando se requiere **almacenar en una variable** el contenido del archivo que deseamos leer.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = archivo.leer("C:\Users\prueba.lat")
   escribir(x)</code></pre>

----

archivo.lineas\( \)
---------------------
Este comando almacena en una **lista** cada línea de código de un archivo especificado.

Para este comando es requerido asignarlo a una variable para almacenar el contenido del archivo.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = archivo.lineas("C:\Users\prueba.lat")
   escribir(x)</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **archivo** funciones como **archivo.copiar( )**, **archivo.poner( )** y **archivo.renombrar( )** no funcionan apropiadamente. Espere a futuros lanzamientos de Latino para ver sus novedades.