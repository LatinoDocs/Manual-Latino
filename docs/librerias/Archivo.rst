.. meta::
   :description: Librería de archivos en Latino
   :keywords: manual, documentacion, latino, librerias, lib, archivo

===============
Lib "archivo"
===============
La librería **archivo** contiene las funciones principales para el manejo de archivos.


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
| leer\( \)      | 1          | Lee el contenido de un archivo y lo combierte en cadena |
+----------------+------------+---------------------------------------------------------+
| lineas\( \)    | 1          | Almacena en una lista cada linea del archivo            |
+----------------+------------+---------------------------------------------------------+
| poner\( \)     | 2          | Sobrescribe el archivo con el texto especificado        |
+----------------+------------+---------------------------------------------------------+
| renombrar\( \) | 2          | Cambia el nombre del archivo especificado               |
+----------------+------------+---------------------------------------------------------+

.. ----

.. archivo.copiar\( \)
.. --------------------
.. tambien adminte rutas

.. archivo.copiar("c:\user\archivo1.lat", "archivo2.lat")
.. //El comando no coincide con su funcion.
..    //Este comando pega al final del archivo la segunda cadena del comando.


.. .. raw:: html

..    <pre><code class="language-latino line-numbers"></code></pre>

----

archivo.crear\( \)
-------------------
Este comando nos permite **crear un archivo** con un nombre especificado en cualquier ruta de nuestro sistema.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este comando creará un archivo
   con el nombre de "archivo1"
   en la ruta "C:\Users\"
   */

   archivo.crear("C:\Users\archivo1.lat")</code></pre>

----

archivo.ejecutar\( \)
----------------------
Ejecuta un archivo con código de latino.

* Este comando también adminte rutas

.. raw:: html

   <pre><code class="language-latino line-numbers">archivo.ejecutar("c:\user\archivo1.lat")</code></pre>

----

archivo.eliminar\( \)
----------------------


----

archivo.leer\( \)
------------------
Almancena en una variable el contenido de un archivo.

Este comando también admite rutas

.. raw:: html

   <pre><code class="language-latino line-numbers">x = archivo.leer("C:\Users\prueva.lat")
   escribir(x)</code></pre>
