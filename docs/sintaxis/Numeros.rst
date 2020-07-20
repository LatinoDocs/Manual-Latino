.. meta::
   :description: Numeros en Latino
   :keywords: manual, documentacion, latino, sintaxis, datos, numeros

========
Números
========
En diversos lenguajes de programación existen varias clasificaciones para los números entre ellas están integer, float, double y complex.

Latino trabaja solo con un tipo de número, los números que se escriben con decimal y los que no.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 3.14     //Número con decimal
   y = 3        //Número sin decimal</code></pre>

.. error:: Las siguientes expresiones científicas no son reconocidas por Latino:
   
   .. raw:: html
   
      <pre><code class="language-latino line-numbers">x = 123e5     //Expresión no reconocida
      y = 123e-5    //Expresión no reconocida</code></pre>

----

Decimales
----------
Todos los números en Latino siempre serán reconocidos como decimales, tengan o no el punto decimal.

Esto lo podemos comprobar utilizando la función **tipo( )** en Latino.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = 3.14
   y = 3
   
   escribir(tipo(x))     //Devolverá Decimal
   escribir(tipo(y))     //Devolverá Decimal</code></pre>

Los números también puede ser expresados como números negativos:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = -3255522
   y = -35.59</code></pre>

.. note:: Los números pasados de 15 dígitos estos son devueltos como expresiones científica en Latino:
   
   .. raw:: html
      
      <pre><code class="language-latino line-numbers">x = 999999999999999
      y = 9999999999999999
      
      escribir(x)     //Devolverá 999999999999999
      escribir(y)     //Devolverá 1e+16</code></pre>

----

Números como cadedas(textos)
-----------------------------
A diferencia de las cadenas los números no requieren ser escritos entre comillas, pero de serlo estas dejaran de ser números y pasaran a ser interpretadas como cadenas(textos).

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = 100       //X es un decimal
   y = "100"     //Y es una cadena</code></pre>

Convertir cadenas a números
++++++++++++++++++++++++++++
Latino puede convertir las cadenas numéricas a números con los operadores aritméticos:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = "100"
   y = "10"
   
   escribir(x + y)     //Devolverá 110
   escribir(x - y)     //Devolverá 90
   escribir(x * y)     //Devolverá 1000
   escribir(x / y)     //Devolverá 10</code></pre>