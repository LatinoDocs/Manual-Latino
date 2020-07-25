.. _variablesLink:

.. meta::
   :description: Variables en Latino
   :keywords: manual, documentacion, latino, sintaxis, variables

==========
Variables
==========
Una variable es un espacio en la memoria, en el cual el programador asigna un valor determinado.

Las variables son representadas por un nombre que es asignado por el programador cuando se escribe el código fuente. Cada variable tiene un único nombre el cual no puede ser cambiado una vez esta variable tenga un valor asignado. Dos o más variables pueden tener el mismo valor o contenido, pero no el mismo nombre.

En este ejemplo **X**, **Y** y **Z** serán las variables:

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 3
   y = 5
   z = x + y</code></pre>

En este ejemplo, se puede observar la siguiente explicación:
  * X es una variable, y esta almacena el valor de 3
  * Y es otra variable, y esta almacena el valor de 5
  * Z es otra variable, y esta almacena el valor de 8

----

Declaración (creación) de variables
------------------------------------
Las variables de Latino deben ser identificadas por un **nombre único**.

Estos nombres pueden ser cortos (como X o Y) o pueden ser nombres mas descriptivos (como edad, nombre, valorTotal, etc.)

La regla general en Latino para crear nombres de variables son las siguientes:

Las variables SI pueden:
+++++++++++++++++++++++++
  * Empezar con un guión bajo **_** o letras **a-z** o **A-Z**.
  * Contener caracteres en mayúsculas y minúsculas. (Latino es sensible a las mayúsculas y minúsculas, por lo que los identificadores con nombres similares pero con letras mayúsculas o minúsculas en ellas serán interpretadas como diferentes variables en Latino).

.. raw:: html

   <pre><code class="language-latino line-numbers">mensaje = "Hola Mundo"
   Mensaje = "¡Hasta la vista baby!"</code></pre>

Las variables NO pueden:
+++++++++++++++++++++++++
  * No son validas las letras acentuadas u otros caracteres como la **ñ**.
  * Empezar por un número.
  * Empezar por un símbolo o alguna :ref:`palabra reservada <glosarioLink>` de Latino.

----

Declaraciones de múltiples variables
-------------------------------------
En Latino es posible asignar más de una variable en una sola línea de código.
En Latino una declaración múltiple sólo será valida de la siguiente manera:

.. raw:: html

   <pre><code class="language-latino line-numbers">a, b, c = 1, 2, 3    #la variable a=1, b=2, y c=3
   a, b, c = 1, 2       #la variable a=1, b=2, y c = nulo (vacío)
   a, b = 1, 2, 3       #la variable a=1, b=2 se descarta el valor 3 ya que no fue asignado a una variable</code></pre>

----

Tipos de variables
-------------------
Las variables en Latino pueden contener casi cualquier tipo de datos como cadenas, diccionarios, data, valores numéricos como el número 100 y valores alfanuméricos como un nombre de persona "José Martinez".

En programación, los valores alfanuméricos (o textos) se los llaman **Strings** (por su nombre en inglés).

Los strings se escriben dentro de comillas simples o dobles. Sin embargo, los números se pueden escribir sin estas comillas.

.. raw:: html

   <pre><code class="language-latino line-numbers">pi = 3.14
   persona = "Melvin Guerrero"
   respuesta = "Hola!, buenos días!"</code></pre>

----

Variables numéricas
--------------------
En este ejemplo **precio1**, **precio2**, y **total**, serán variables:

.. raw:: html

   <pre><code class="language-latino line-numbers">precio1 = 5
   precio2 = 6
   total = precio1 + precio2
   escribir("El precio total es: " .. total)</code></pre>

Las variables de Latino son contenedores para almacenar variedades de datos:
  * En programación, también se usan las variables para guardar valores algebraicos (como es el caso de la variable precio1 y precio2).
  * En programación, también se usan las variables para guardar expresiones (como es el caso de total = precio1 + precio2).

----

Concatenar variables
---------------------
En Latino, el símbolo **+** no es usado para concatenar datos, como **sí** es el caso de otros lenguajes de programación.

Este símbolo **+** solo es usado para sumar valores numéricos.

Para concatenar datos en Latino se utilizan los puntos dobles **..**

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 2 + 3                  //Aquí se están sumando los valores numéricos
   y = 2 .. 3                 //Aquí se están concatenado los valores numéricos
   escribir(x .. " " .. y)    //Aquí se están agregando las dos variables y se le añadió un espacio en blanco para separarlas</code></pre>

Si se desea concatenar valores alfanuméricos con valores u operaciones numéricas, se recomienda que se declaren en variables separadas y se concatenen en una nueva variable para ser escritas:

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "Melvin"
   y = 2 + 3
   z = x..", "..y
   escribir(z)    //El resultado será Melvin, 5</code></pre>

----

Constantes
-----------
A este tipo de variables se les llaman **Constantes** porque una vez el programa arranque, su valor no podrá ser reasignado por otro valor, como sí es el caso de las variables anteriores.

Cuando se declara una variable constante, se le debe asignar un valor al momento de declararla, ya que no pueden estar vacias ni se les puede cambiar ni asignar un valor después de que el programa arranque.

Las variables constantes se deben declarar escribiendo todo su nombre en mayúsculas.

.. raw:: html

   <pre><code class="language-latino line-numbers">PI = 3.14
   VALOR_EXTRA = 9.8</code></pre>