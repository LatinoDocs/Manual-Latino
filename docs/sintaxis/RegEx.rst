.. _regexLink:

.. meta::
   :description: Expresiones regulares en Latino
   :keywords: manual, documentacion, latino, sintaxis, regex, regular expresion, expresiones regulares

======
RegEx
======
Una `expresión regular`_ (*regular expression* ó *RegEx*, por su nombre en Ingles) es una secuencia de caracteres que forman un patrón de búsqueda.

Una RegEx puede ser utilizada para comprobar si una cadena(string) contiene un patrón de carácter específico.

Para hacer uso de las expresiones regulares se pueden utilizar los siguientes comandos:

* **~=** de este operador relacional también se hace mención en :ref:`este artículo <opregexLink>`.
* **cadena.regex\( \)** el cual devuelve un valor buleano.
* **cadena.match\( \)** el cual devuelve una lista de todas las coincidencias.

----

Operador ~=
-------------
**Ejemplo de sintaxis**

.. code-block:: bash
   
   ~= (expresión)

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   El operador ~= utiliza las expresiones regulares
   en cadenas para hacer patrones de búsqueda.

   La condicional SI, devolverá:
   "x inicia con hola"
   */

   x = "hola mundo"
   
   si x ~= "^hola"
     escribir("x inicia con hola")
   sino
     escribir("x NO inicia con hola")
   fin</code></pre>

----

cadena.regex\( \)
-------------------
**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.regex(texto, expresión)

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   En este ejemplo la expresión
   buscará la letra U en la cadena.

   Devolverá:
   falso
   */

   txt = "Las manzanas son verdes"
   x = cadena.regex(txt, "u")
   escribir(x)</code></pre>

----

cadena.match\( \)
-------------------
**Ejemplo de sintaxis**

.. code-block:: bash
   
   cadena.match(texto, expresión)

**Ejemplo 1**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo la variable TXT contendrá el texto principal
   la variable X contendrá el resultado de cadena.match
   y su resultado se escribirá en pantalla.

   Devolverá una lista de cada coincidencia encontrada:
   [["a"], ["a"], ["a"]]
   */

   txt = "El agua es vida"
   x = cadena.match(txt, "a")
   escribir(x)</code></pre>

**Ejemplo 2**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá una lista de cada coincidencia encontrada:
   [["El agua es vida"]]
   */

   txt = "El agua es vida"
   x = cadena.match(txt, "^El.*vida$")
   escribir(x)</code></pre>

**Ejemplo 3**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este comando también se puede
   utilizar en expresiones lógicas.

   Devolverá:
   "Eureka! la expresión ha sido encontrada"
   */

   txt = "El agua es vida"
   x = cadena.match(txt, "^El.*vida$")
   
   si x
     escribir ("Eureka! la expresión ha sido encontrada")
   sino
     escribir ("No se ha encontrado la expresión")
   fin</code></pre>

----

Metacaracteres
---------------
Los metacaracteres son caracteres con un significado especial.

+----------+-------------------------------------------+-------------+
| Carácter | Descripción                               | Ejemplo     |
+==========+===========================================+=============+
| \[ \]    | Conjunto de caracteres                    | '[a-m]'     |
+----------+-------------------------------------------+-------------+
| \\       | Señaliza una secuencia especial           | '\\d'       |
+----------+-------------------------------------------+-------------+
| \.       | Cualquier carácter(excepto nuevas líneas) | 'Bien..dos' |
+----------+-------------------------------------------+-------------+
| ^        | Comienza con...                           | '^hola'     |
+----------+-------------------------------------------+-------------+
| $        | Termina con...                            | 'mundo$'    |
+----------+-------------------------------------------+-------------+
| \*       | Cero o más caracteres                     | 'Bienve*'   |
+----------+-------------------------------------------+-------------+
| \+       | Uno o más caracteres                      | 'Hol+'      |
+----------+-------------------------------------------+-------------+
| \{ \}    | Número especifico de caracteres           | 'Bien{7}'   |
+----------+-------------------------------------------+-------------+
| \|       | Cualquiera de las opciones                | 'x\|y'      |
+----------+-------------------------------------------+-------------+
| \( \)    | Grupo                                                   |
+----------+-------------------------------------------+-------------+

----

Conjuntos
----------
Los conjuntos son caracteres dentro de **corchetes [ ]** los cuales tiene un significado especial.

+------------+--------------------------------------------------------------------------------------------------------------------+
| Conjunto   | Descripción                                                                                                        |
+============+====================================================================================================================+
| [arn]      | Devuelve los conjuntos donde estén presentes cualquiera de los caracteres especificados (**a**, **r** ó **n**)     |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [a-n]      | Devuelve los conjuntos de cualquier letra minúscula que estén alfabeticamente entre **a** y **n**                  |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [^arn]     | Devuelve cualquier conjunto de caracteres EXCEPTO **a**, **r** y **n**                                             |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [0123]     | Devuelve los conjuntos donde estén presentes cualquiera de los digitos especificados (**0**, **1**, **2** ó **3**) |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [0-9]      | Devuelve cualquier conjuntos de digitos entre **0** y **9**                                                        |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [0-5][0-9] | Devuelve los conjuntos de cualquiera de los dos digitos entre **00** y **59**                                      |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [a-zA-Z]   | Devuelve cualquier conjunto de caracteres desde la **a** hasta la **z** sean minúsculas o mayusculas               |
+------------+--------------------------------------------------------------------------------------------------------------------+
| [\+]       | Los conjuntos **\+**, **\***, **.**, **\|**, **\( \)**, **$**, **\{ \}** no tienen un significado especial.        |
|            | [\+] significa que devolverá una coincidencia para cualquier carácter **\+** en la cadena.                         |
+------------+--------------------------------------------------------------------------------------------------------------------+

----

secuencias especiales
----------------------
Una secuencia especial inicia con una **barra invertida \\** seguido de uno carácter de la siguiente lista, los cuales tienen un significado especial.

+----------+---------------------------------------------------------------------------------------------------------------------+
| Carácter | Descripción                                                                                                         |
+==========+=====================================================================================================================+
| \\A      | Devuelve un conjunto si el carácter especificado está al inicio del texto                                           |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\b      | Devuelve un conjunto cuando un carácter especificado está al inicio o al final de una palabra                       |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\B      | Devuelve un conjunto cuando los caracteres especificados están presentes pero NO al inicio o al final de la palabra |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\d      | Devuelve un conjunto cuando la cadena(string) contiene números                                                      |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\D      | Devuelve un conjunto cuando la cadena(string) NO contiene números                                                   |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\s      | Devuelve un conjunto cuando la cadena(string) contiene almenos un espacio en blanco                                 |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\S      | Devuelve un conjunto cuando la cadena(string) NO contiene espacios blanco                                           |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\w      | Devuelve un conjunto cuando la cadena(string) cualquier carácter( a_Z, 0-9 ó _ )                                    |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\W      | Devuelve un conjunto cuando la cadena(string) NO contiene ningún carácter                                           |
+----------+---------------------------------------------------------------------------------------------------------------------+
| \\Z      | Devuelve un conjunto si el carácter especificado está al final de la cadena(string)                                 |
+----------+---------------------------------------------------------------------------------------------------------------------+

----

Patrones de expresiones regulares
----------------------------------
.. _ej1:

Carácter \[ \]
+++++++++++++++
Los brackets son utilizados para buscar caracteres en un rango asignado.

+-----------+--------------------------------------------------------+
| Expresión | Descripción                                            |
+===========+========================================================+
| [abc]     | Busca cualquier carácter asignado en los brackets      |
+-----------+--------------------------------------------------------+
| [0-9]     | Busca cualquier número asignado en los brackets        |
+-----------+--------------------------------------------------------+
| (x|y)     | Busca cualquiera de las alternativas separados por '|' |
+-----------+--------------------------------------------------------+

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Busca entre todas las letras minúsculas
   en orden alfabético desde la "a" hasta la "m"
   */

   txt = "El agua es vida"
   x = cadena.match(txt, "[a-m]")
   escribir (x)</code></pre>

----

.. Enlaces

.. _expresión regular: https://es.wikipedia.org/wiki/Expresión_regular