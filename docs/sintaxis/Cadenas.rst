.. meta::
   :description: Breve descripción de la página
   :keywords: etiquetas, que, describan, el, contenido

==================
Cadenas (Strings)
==================
Las **cadenas** (*strings* por su nombre en Ingles) son utilizadas para almacenar y manipular textos.

Estas **cadenas** están rodeadas por **comillas simples ( \\' )** o **comillas dobles ( \' )**.

.. code-block:: bash
   
   escribir("hola")
   escribir('hola')

Se pueden usar comillas dentro de una cadena, siempre y cuando estas no coincidan con las comillas que las rodean.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir("El se llama 'Melvin'")     //Devolverá: El se llama 'Melvin'
   escribir('El se llama "Melvin"')     //Devolverá: El se llama "Melvin"</code></pre>

----

Caracteres especiales
----------------------
Las cadenas al estar escritas entre comillas, se pudiera producir un error con la siguiente sintaxis:

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir("Hola mundo, "Latino!" ¿Cómo estan?")</code></pre>

En el ejemplo anterior, La oración estaría cortada hasta 'Hola mundo,' y Latino pensaría que el nombre **Latino!** es una variable, produciendo así un error de sintaxis.

La solución a este problema sería usar una **barra invertida ( \\ )**.

La **barra invertida ( \\ )** convierte los caracteres especiales en textos:

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola mundo, "Latino" ¿Cómo estan?
   */
   
   escribir("Hola mundo, \"Latino!\" ¿Cómo estan?")</code></pre>

Además de usar la barra invertida para escribir textos, también es usada para indicar funciones.

A continuación se presentan los caracteres disponibles para usar en Latino.

Tabla de caracteres:
+++++++++++++++++++++
+----------+-------------------------------------------------+
| Carácter | Descripción                                     |
+==========+=================================================+
| \\ \'    | Comillas dobles                                 |
+----------+-------------------------------------------------+
| \\ \\'   | Comillas simples                                |
+----------+-------------------------------------------------+
| \\n      | Nueva línea                                     |
+----------+-------------------------------------------------+
| \\r      | Retorno de carro (Carriage return)              |
+----------+-------------------------------------------------+
| \\b      | Remover (Backspace)                             |
+----------+-------------------------------------------------+
| \\t      | Tabulación horizontal                           |
+----------+-------------------------------------------------+
| \\a      | Alerta (Beep)                                   |
+----------+-------------------------------------------------+
| \\0      | Carácter nulo                                   |
+----------+-------------------------------------------------+
| \\nnn    | Carácter con valor octal nnn                    |
+----------+-------------------------------------------------+

.. note:: Los caracteres especiales descritos en la tabla superior fueron originalmente diseñados para el control de `máquina de escribir`_, teletipo_, y `máquina de fax`_.

Comillas dobles
****************
Carácter a usar: **\\'**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola "mundo"
   */
   
   escribir("Hola \"mundo\"")</code></pre>

Comillas simples
*****************
Carácter a usar: **\\ \'**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola \'mundo\'
   */
   
   escribir('Hola \'mundo\'')</code></pre>

.. error:: Actualmente el resultado de las comillas simples es un error el cual se está trabajando para ser corregido. Para evitar este error usar las comillas dobles para envolver la cadena.

Nueva línea
************
Carácter a usar: **\\n**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola
   mundo
   */

   escribir("Hola\nmundo")</code></pre>

Retorno de carro
*****************
Carácter a usar: **\\r**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   A diferencia de \n, \r no crea una nueva línea
   si no que devuelve el cursor al punto de partida
   y sigue escribiendo. Esto proveca que una sobre escritura.

   Devolverá:
   Latinoundo,
   */

   escribir("Hola mundo,\rLatino")</code></pre>

.. note:: Para saber la diferencia entre **\\n** y **\\r** ver enlace aquí_

Remover
********
Carácter a usar: **\\b**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este comando elimina el carácter preview a este.

   Devolverá:
   HolMundo
   */

   escribir("Hola\bmundo")</code></pre>

Tabulación horizontal
**********************
Carácter a usar: **\\t**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola    mundo
   */

   escribir("Hola\tmundo")</code></pre>

Alerta
*******
Carácter a usar: **\\a**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Hará sonar el Beep del la PC y Devolverá:
   Hola mundo
   */

   escribir("Hola mundo\a")</code></pre>

Carácter nulo
**************
Carácter a usar: **\\0**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Elimina todo el texto posterío al comando
   hasta el cierre de las comillas y Devolverá:
   Hola mundo,2020
   */

   anio = "2020"
   escribir("Hola mundo,\0 Latino! y feliz "..anio)</code></pre>

.. note:: De igual manera **\\0** al ser un valor nulo, también puede ser usado en condicionales lógicas:
   
   **Ejemplo 1**
   
   .. raw:: html

      <pre><code class="language-latino line-numbers">/*
      Devolverá:
      El valor no es nulo
      */

      x = 5
      
      si x != "\0"
        escribir ("El valor no es nulo") 
      fin</code></pre>
   
   **Ejemplo 2**

   .. raw:: html

      <pre><code class="language-latino line-numbers">/*
      Devolverá:
      No es nulo
      */

      x = 5

      si x == "\0"
        escribir ("Es un valor nulo")
      sino
        escribir ("No es nulo")
      fin</code></pre>

Carácter con valor octal
*************************
Carácter a usar: **\\nnn**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   Hola mundo
   */

   texto = "\110\157\154\141\040\155\165\156\144\157"
   escribir(texto)</code></pre>

----

Textos de multiples líneas
---------------------------
Previamente vimos que las cadenas pueden ser textos líneales, pero también pueden ser textos de multiples líneas.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir("Ejemplo de texto múltiples lineas:
   ---------------------------------------
   En este ejemplo podemos observar
   que Latino es perfectamente capaz de
   procesar textos de múltiples líneas
   siempre y cuando una de las dos comillas
   se encuentre al inicio del párrafo y otra al final")</code></pre>

----

Textos como listas
--------------------
Como en muchos otros lenguajes de programación, los textos son listas (arrays).

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Devolverá:
   la letra "o"
   */

   x = "Hola"
   escribir(x[1])</code></pre>

.. Enlaces:

.. _máquina de escribir: https://es.wikipedia.org/wiki/Máquina_de_escribir
.. _teletipo: https://es.wikipedia.org/wiki/Teletipo
.. _máquina de fax: https://es.wikipedia.org/wiki/Fax
.. _aquí: https://es.stackoverflow.com/a/172368/183823