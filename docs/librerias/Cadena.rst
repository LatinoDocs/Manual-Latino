.. _cadenalibLink:

.. meta::
   :description: Librería de cadenas en Latino
   :keywords: manual, documentacion, latino, librerias, lib, cadena

==============
Lib "cadena"
==============
La librería **cadena** nos permite trabajar y manipular las :ref:`cadenas (string) <cadenaLink>` en Latino.

**Lista de comando**

+-------------------------+------------+--------------------------------------------------------------------------+
| Comando                 | Parámetros | Descripción                                                              |
+=========================+============+==========================================================================+
| bytes\( \)              | 1          | Devuelve el valor ASCII de cada carácter en una lista                    |
+-------------------------+------------+--------------------------------------------------------------------------+
| char\( \)               | 1          | Combierte el valor o lista ASCII a un carácter o una lista de caracteres |
+-------------------------+------------+--------------------------------------------------------------------------+
| comparar\( \)           | 2          | Compara dos cadenas de textos y devuelve un valor númerico               |
+-------------------------+------------+--------------------------------------------------------------------------+
| concatenar\( \)         | 2          | Combina dos cadenas de textos en una sola cadena                         |
+-------------------------+------------+--------------------------------------------------------------------------+
| contiene\( \)           | 2          | Devuelve un valor buleano si encuentra la palabra o cadena especificada  |
+-------------------------+------------+--------------------------------------------------------------------------+
| eliminar\( \)           | 2          | Elimina la primera considencia en una cadena                             |
+-------------------------+------------+--------------------------------------------------------------------------+
| encontrar\( \)          | 2          | Regresa la posición de la primera considencia encuentra                  |
+-------------------------+            |                                                                          |
| indice\( \)             |            |                                                                          |
+-------------------------+------------+--------------------------------------------------------------------------+
| es_alfa\( \)            | 1          | Comprueba si la cadena solo contiene texto y/o números                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| es_igual\( \)           | 2          | Regresa verdadero si las dos cadenas son iguales                         |
+-------------------------+------------+--------------------------------------------------------------------------+
| es_numerico\( \)        | 1          | Comprueba si la cadena solo contiene números                             |
| es_numero\( \)          |            |                                                                          |
+-------------------------+------------+--------------------------------------------------------------------------+
| esta_vacia\( \)         | 1          | Regresa verdadero si la cadena está vacia                                |
+-------------------------+------------+--------------------------------------------------------------------------+
| formato\( \)            | 1          | Asigna un formato a un carácter                                          |
+-------------------------+------------+--------------------------------------------------------------------------+
| inicia_con\( \)         | 2          | Comprueba si la cadena inicia con un texto o cadena especificado         |
+-------------------------+------------+--------------------------------------------------------------------------+
| insertar\( \)           | 3          | Agrega una cadena en la posición indicada                                |
+-------------------------+------------+--------------------------------------------------------------------------+
| invertir\( \)           | 1          | Invierte el contenido de la cadena                                       |
+-------------------------+------------+--------------------------------------------------------------------------+
| longitud\( \)           | 1          | Regresa el tamaño de la cadena                                           |
+-------------------------+------------+--------------------------------------------------------------------------+
| match\( \)              | 2          | Utiliza RegEx y regresa una lista de las coincidencias                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| mayusculas\( \)         | 1          | Combierte toda la cadena en mayúsculas                                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| minusculas\( \)         | 1          | Combierte toda la cadena en minúsculas                                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| recortar\( \)           | 1          | Elimina los espacios al inicio y al final de la cadena                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| regex\( \)              | 2          | Regresa un valor buelano si encuentra la coincidencia                    |
+-------------------------+------------+--------------------------------------------------------------------------+
| rellenar_derecha\( \)   | 3          | Agrega n caracteres al final de la cadena especificada                   |
+-------------------------+------------+--------------------------------------------------------------------------+
| rellenar_izquierda\( \) | 3          | Agrega n caracteres al inicio de la cadena especificada                  |
+-------------------------+------------+--------------------------------------------------------------------------+
| separar\( \)            | 2          | Separa la cadena en una lista en base a un separador                     |
+-------------------------+------------+--------------------------------------------------------------------------+
| subcadena\( \)          | 3          | Devuelve una sub-cadena en base a la posición y su longitud              |
+-------------------------+------------+--------------------------------------------------------------------------+
| termina_con\( \)        | 2          | Devuelve un valor buleano si hay una coincidencia                        |
+-------------------------+------------+--------------------------------------------------------------------------+
| ultimo_indice\( \)      | 2          | Devuelve la posición final de un caracter o palabra especificada         |
+-------------------------+------------+--------------------------------------------------------------------------+

----

cadena.bytes\( \)
-------------------
Este comando nos permite **convertir** nuestra **cadena de texto** a `valor ASCII`_ y la devuelve en una lista.

El comando **cadena.char\( \)** es su contraparte, ya que convierte los valores ASCII a textos.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo"
   escribir(cadena.bytes(x))     //Devolverá [72,111,108,97,32,109,117,110,100,111]</code></pre>

----

cadena.char\( \)
-----------------
Este comando nos permite **convertir** un número o **lista de** `valores ASCII`_ a una cadena de texto.

El comando **cadena.bytes\( \)** es su contraparte, ya que convierte los textos a valores ASCII.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = [72,111,108,97,32,109,117,110,100,111]
   escribir(cadena.char(x))     //Devolverá Hola mundo</code></pre>

----

cadena.comparar\( \)
----------------------
Este comando **comparar** dos cadenas de textos **carácter por carácter** hasta encontrar la primera diferencia.

Este comando es similar al comando **strcmp()** en C.

El comando **cadena.comparar\( \)** devuelve los siguientes valores:
  
  * -1, si la primera cadena es **menor** que la segunda.
  * 0, si ambas cadenas son **iguales**.
  * 1, si la primera cadena es **mayor** que la segunda.

.. note:: **menor**, **igual** o **mayor** hacen referencia al orden o posición de las letra en el alfabeto.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(cadena.comparar("a","b"))               //Devolverá -1
   escribir(cadena.comparar("a","a"))               //Devolverá 0
   escribir(cadena.comparar("b","a"))               //Devolverá 1
   escribir(cadena.comparar("abeja","avestruz")     //Devolverá -1</code></pre>

----

cadena.concatenar\( \)
------------------------
Este comando nos permite **unir** dos cadenas de textos en una sola.

El comando **cadena.concatenar\( \)** es una alternativa al comando **doble punto (..)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola"
   y = " mundo"
   z = cadena.concatenar(x,y)
   escribir(z)     //Devolverá Hola mundo</code></pre>

----

cadena.contiene\( \)
---------------------
Este comando nos permite **verificar** si existe una **coincidencia** del texto o cadena a buscar en otra y devolverá un valor buleano.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "LenguajeLatino"
   y = "Latino"
   escribir(cadena.contiene(x, y))     //Devolverá verdadero</code></pre>

.. ----

.. cadena.ejecutar\( \)
.. -------------------------------------------
.. Este comando nos permite **ejecutar** una cadeta de texto de tenga código de Latino.

.. .. raw:: html

..    <pre><code class="language-latino line-numbers">x = "escribir(\"Hola mundo\")"
..    escribir(cadena.ejecutar(x))     //Devolverá Hola mundo</code></pre>

.. | ejecutar\( \)           | 1          | Ejecuta una cadena que tenga código de latino                            |
.. +-------------------------+------------+--------------------------------------------------------------------------+

----

cadena.eliminar\( \)
---------------------
Este comando solo **elimina la primera coincidencia** encontrada en una cadena de texto.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo, holahola otra vez"
   escribir(cadena.eliminar(x, "hola"))     //Devolverá Hola mundo, hola otra vez</code></pre>

----

cadena.encontrar\( \)
----------------------
Este comando **busca** la posición de la primera coincidencia de caracteres o textos.

Este comando también dispone de un alias **cadena.indice\( \)**.

El comando **cadena.encontrar\( \)** cuenta cada carácter de una cadena de texto hasta encontrar la primera coincidencia.

El comando comienza a contar desde el número **cero (0)** como primer número en adelante.

Si el texto o cadena no fue encontrado, entonces devolverá **-1**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo latino, como estan?"
   escribir(cadena.encontrar(x, "como"))     //Devolverá 19</code></pre>

----

cadena.es_alfa\( \)
--------------------
Este comando **comprueba** si la cadena solo contiene valores **alfanuméricos** y NO símbolos.

El comando **cadena.es_alfa\( \)** devolverá un valor buleano:

  * **verdadero** si la cadena es letras y/o números.
  * **falso** si la cadena contiene o es un símbolo.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(cadena.es_alfa("1"))          //Devolverá verdadero
   escribir(cadena.es_alfa("a"))          //Devolverá verdadero
   escribir(cadena.es_alfa("&"))          //Devolverá falso
   escribir(cadena.es_alfa("#"))          //Devolverá falso
   escribir(cadena.es_alfa("Hola"))       //Devolverá verdadero
   escribir(cadena.es_alfa("Hola++"))     //Devolverá falso</code></pre>

----

cadena.es_igual\( \)
---------------------
Este comando **comprueba** si ambas cadenas **coinciden entre sí** y regresa un valor buleano.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(cadena.es_igual("hola", "HOLA"))     //Devolverá falso
   escribir(cadena.es_igual("hola", "hola"))     //Devolverá verdadero</code></pre>

----

cadena.es_numero\( \)
----------------------
Este comando **comprueba** si la cadena **solo contiene números** y devolverá un valor buleano.

Este comando también dispone de un alias **cadena.es_numerico\( \)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(cadena.es_numerico("123456"))     //Devolverá verdadero
   escribir(cadena.es_numerico("1234f"))      //Devolverá falso
   escribir(cadena.es_numerico("hola24"))     //Devolverá falso
   escribir(cadena.es_numerico("123$%"))      //Devolverá falso</code></pre>

----

cadena.esta_vacia\( \)
-----------------------
Este comando **verificar** que la cadena está vacía.

El comando **cadena.esta_vacia\( \)** devolverá un valor buleano:

  * **verdadero** si la cadena esta vacía.
  * **falso** si la cadena NO esta vacía.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(cadena.esta_vacia(""))      //Devolverá verdadero
   escribir(cadena.esta_vacia("a"))     //Devolverá falso</code></pre>

----

cadena.formato\( \)
--------------------
Este comando permite **dar formato** a un carácter o valor ASCII.

Este comando es similar pero más limitado al comando **printf\( \)** en C o al comando **imprimirf\( \)** en Latino.

El comando **cadena.formato\( \)** opera con los siguientes formatos:

  * **\%c**, convierte a un carácter el valor ASCII.
  * **\%i**, convierte a un número enteros.
  * **\%f**, convierte a un número decimal.
  * **\%d**, convierte a un número.
  * **\%s**, convierte a carácter o ha una cadena de texto.
  * **\%%**, Devuelve el simbolo de **porcentage (\%)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "hola"
   escribir(cadena.formato("%c",x))                //Devolverá h
   escribir(cadena.formato("%i",x))                //Devolverá 104
   escribir(cadena.formato("%f",x))                //Devolverá 104.000000
   escribir(cadena.formato("%d",x))                //Devolverá 104
   escribir(cadena.formato("%s",x))                //Devolverá hola
   escribir(cadena.formato("%%",x))                //Devolverá %
   escribir(cadena.formato("%c",75))               //Devolverá K
   escribir(cadena.formato("%c%c%c",75,76,77))     //Devolverá KLM</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **cadena**, la función **cadena.formato\(\)** no funciona en MS-Windows. Espere a futuros lanzamientos de Latino para ver sus novedades.

----

cadena.inicia_con\( \)
-----------------------
A diferencia del comando **cadena.termina_con\( \)**, este comando **comprueba** si la cadena de texto **inicia con** un carácter especificado, y este devolverá un valor buleano.

Este comando distingue entre **mayúsculas** y **minúsculas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo"
   escribir(cadena.inicia_con(x, "H"))     //Devolverá verdadero
   escribir(cadena.inicia_con(x, "h"))     //Devolverá falso</code></pre>

----

cadena.insertar\( \)
---------------------
Este comando nos permite **añadir** una cadena a otra cadena de texto en cualquier posición especificada.

La posición se maneja contando cada carácter de la cadena original. Este conteo inicia desde el número **cero (0)** como primer número en adelante.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.insertar(cadena_original, cadena_a_agregar, la_posición)

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo, como estan?"
   y = " Latino"
   escribir(cadena.insertar(x, y, 10))     //Devolverá Hola mundo Latino, como estan?</code></pre>

----

cadena.invertir\( \)
---------------------
Este comando nos permite **invertir** el orden de la cadena.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo, como estan?"
   escribir(cadena.invertir(x))     //Devolverá ?natse omoc ,odnum aloH</code></pre>

----

cadena.longitud\( \)
---------------------
Este comando retorna la **longitud** de la cadena en dígitos.

El comando comienza a contar desde el número **uno (1)** como primer número en adelante.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo, como estan?"
   escribir(cadena.longitud(x))     //Devolverá 23</code></pre>

----

cadena.match\( \)
------------------
Este comando hace uso de las **Expresiones Regulares** o **RegEx** para hacer una **búsqueda avanzada** y retorna una lista con cada una de las coincidencias.

Para aprender más sobre este comando y las expresiones regulares, mire el artículo de RegEx, :ref:`aquí <regexLink>`.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo, Latino"
   escribir(cadena.match(x, "o"))     //Devolverá [["o"], ["o"], ["o"]]</code></pre>

----

cadena.mayusculas\( \)
-----------------------
Este comando nos permite **transformar** toda nuestra cadena a letras **mayúsculas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "hola mundo"
   escribir(cadena.mayusculas(x))     //Devolverá HOLA MUNDO</code></pre>

----

cadena.minusculas\( \)
-----------------------
Este comando nos permite **transformar** toda nuestra cadena a letras **minúsculas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "HOLA MUNDO"
   escribir(cadena.minusculas(x))     //Devolverá hola mundo</code></pre>

----

cadena.recortar\( \)
---------------------
Este comando **elimina** cualquier **carácter de espacio** al inicio y al final de la cadena, ya sea espacio en blanco o tabulación.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "     Hola mundo"
   escribir(cadena.recortar(x))     //Devolverá Hola mundo</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **cadena**, la función cadena.recortar() no funciona correctamente en MS-Windows. Espere a futuros lanzamientos de Latino para ver sus novedades.

.. ----

.. cadena.reemplazar\( \)
.. -----------------------
.. Cambiar una palabra por otra en una cadena (cadena_original, texto_a_reemplazar, texto_nuevo, posición)

.. .. raw:: html

..    <pre><code class="language-latino line-numbers"></code></pre>

.. | reemplazar\( \)         | 4          | Cambiar una palabra por otra en una cadena                               |
.. +-------------------------+------------+--------------------------------------------------------------------------+


----

cadena.regex\( \)
------------------
Este comando hace use de las **Expresiones Regulares** o **RegEx** para hacer una **búsqueda avanzada** y retorna verdadero si encuentra la coincidencia y falso si no la encontró.

Para aprender más sobre este comando y las expresiones regulares, mire el artículo de RegEx, :ref:`aquí <regexLink>`.

.. raw:: html

   <pre><code class="language-latino line-numbers">//Busca si la cadena termina con "Latino"
   
   x = "Hola mundo, Latino"
   escribir(cadena.regex(x, "Latino$"))     //Devolverá verdadero</code></pre>

----

cadena.rellenar_derecha\( \)
-----------------------------
Este comando nos permite **añadir al final** de la cadena especificada un texto o cadena.

El comando **cadena.rellenar_derecha\( \)** nos permite indicar la cantidad de veces que deseamos se repita el nuevo texto a añadir.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.rellenar_derecha(cadena_original, cadena_a_agregar, long_cadena_original + cantidad_de_repeticiones(Valor númerico))

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   El no.19 es la longitud de la cadena_original
   más la cantidad de repeticiones que deseamos,
   en este caso indicamos que sean dos veces
   */
   
   x = "Hola mundo, Latino"
   y = " que tal?"
   escribir(cadena.rellenar_derecha(x,y,19))     //Devolverá Hola mundo, Latino que tal? que tal?</code></pre>

----

cadena.rellenar_izquierda\( \)
-------------------------------
Este comando nos permite **añadir al inicio** de la cadena especificada un texto o cadena.

El comando **cadena.rellenar_izquierda\( \)** nos permite indicar la cantidad de veces que deseamos se repita el nuevo texto a añadir.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.rellenar_izquierda(cadena_original, cadena_a_agregar, long_cadena_original + cantidad_de_repeticiones(Valor númerico))

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   El no.14 es la longitud de la cadena_original
   más la cantidad de repeticiones que deseamos,
   en este caso indicamos que sean dos veces
   */
   
   x = "mundo, Latino"
   y = "hola "
   escribir(cadena.rellenar_izquierda(x,y,14))     //Devolverá hola hola mundo, Latino</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **cadena**, la función **cadena.rellenar_izquierda()** no funciona correctamente en MS-Windows. Espere a futuros lanzamientos de Latino para ver sus novedades.

----

cadena.separar\( \)
--------------------
Este comando nos permite **segmentar** una cadena de texto al especificar un separador y el resultado lo devuelve en una lista.

El separador debe ser especificado **dentro de comillas**.

Si no se le asigna un separador, por defecto buscara los espacios en blanco.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.separar(cadena_original, separador)

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola-mundo-Latino-que tal-estan-todos?"
   escribir(cadena.separar(x,"-"))     //Devolverá ["Hola","mundo","Latino","que tal","estan","todos?"]</code></pre>

----

cadena.subcadena\( \)
----------------------
Este comando **copia** de una cadena el texto deseado el cual se define indicando **en donde inicia** y la **longitud** que deseamos que tenga el texto a copiar.

La **posición_inicial** comienza a contar desde el número **cero (0)** en adelante.

La **longitud** comienza a contar desde el número **uno (1)** en adelante.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.subcadena(cadena_original, posición_inicial(número), longitud(número))

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo Latino que tal estan todos?"
   escribir(cadena.subcadena(x,5,12))     //Devolverá mundo Latino</code></pre>

----

cadena.termina_con\( \)
------------------------
A diferencia del comando **cadena.inicia_con**, este comando nos permite **buscar** en una cadena de texto si esta **termina con** un carácter especificado y devuelve un valor buelano.

Este comando distingue entre **mayúsculas** y **minúsculas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo"
   escribir(cadena.termina_con(x, "O"))     //Devolverá falso
   escribir(cadena.termina_con(x, "o"))     //Devolverá verdadero</code></pre>

----

cadena.ultimo_indice\( \)
--------------------------
Este comando devuelve la **última posición encontrada** del carácter especificado.

Este comando comienza a contar desde el número **cero (0)** en adelante.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Hola mundo"
   escribir(cadena.ultimo_indice(x, "u"))     //Devolverá 6</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **cadena**, las funciones **cadena.ejecutar\( \)**, **cadena.reemplazar\( \)** no funcionan correctamente. Espere a futuros lanzamientos de Latino para ver sus novedades.

.. Enlaces

.. _valor ASCII: https://es.wikipedia.org/wiki/ASCII
.. _valores ASCII: https://es.wikipedia.org/wiki/ASCII