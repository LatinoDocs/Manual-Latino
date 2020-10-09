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
| anexar\( \ )   | 2          |                                                         |
+----------------+------------+---------------------------------------------------------+
| borrar\( \)    | 1          | Elimina el archivo especificado                         |
+----------------+            |                                                         |
| eliminar\( \)  |            |                                                         |
+----------------+------------+---------------------------------------------------------+
| crear\( \)     | 1          | Crea un archivo con el nombre especificado              |
+----------------+------------+---------------------------------------------------------+
| duplicar\( \)  | 2          |                                                         |
+----------------+------------+---------------------------------------------------------+
| ejecutar\( \)  | 1          | Ejecuta el archivo especificado                         |
+----------------+------------+---------------------------------------------------------+
| escribir\( \)  | 2          | Escribe y/o Sobrescribe en el archivo                   |
+----------------+------------+---------------------------------------------------------+
| leer\( \)      | 1          | Lee el contenido de un archivo y lo convierte en cadena |
+----------------+------------+---------------------------------------------------------+
| lineas\( \)    | 1          | Almacena en una lista cada línea del archivo            |
+----------------+------------+---------------------------------------------------------+
| renombrar\( \) | 2          | Renombra un archivo por un nuevo nombre asignado        |
+----------------+------------+---------------------------------------------------------+

.. ----

.. archivo.duplicar\( \)
.. --------------------
.. Copia en el archivo especificado la cadena(texto) que deseamos añadir.

.. Los textos en el segundo argumento en el también podemos usar los :ref:`caracteres especiales <cCaracterEspLink>`.

.. El primer argumento adminte rutas mas no el segundo argumento de este comando.

.. archivo.duplicar("c:\user\archivo1.lat", "archivo2.lat")
.. //El comando no coincide con su funcion.
..    //Este comando pega al final del archivo la segunda cadena del comando.


.. .. raw:: html

..    <pre><code class="language-latino line-numbers"></code></pre>

.. el comando "poner" es el comando "duplicar"

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

archivo.escribir\( \)
-----------------------
Este comando nos permite **escribir** y **sobrescribe** un archivo especificado.

.. important:: Si deseamos añadir más información al archivo usar el comando **archivo.anexar\( \)**
    
    Si se usa este comando en un archivo **NO vacío** este será completamente sobrescribe con la nueva información.

.. raw:: html

   <pre><code class="language-latino line-numbers">archivo.escribir("c:\user\prueba.lat", "Hola mundo")</code></pre>

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

----

archivo.renombrar\( \)
------------------------
Este comando nos permite **renombrar** el nombre de un archivo.

Este comando también adminte rutas.

**Ejecuta de sintaxis**

.. code-block:: bash
    
    archivo.renombrar(Nombre_viejo, Nombre_nuevo)

.. raw:: html

   <pre><code class="language-latino line-numbers">archivo.renombrar("hola.lat", "queTal.lat")     //Renombrará el archivo por queTal.lat</code></pre>