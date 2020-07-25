.. _aritmeticaLink:

.. meta::
   :description: Aritmética en Latino
   :keywords: manual, documentacion, latino, sintaxis, aritmetica

============
Aritmética
============

Operadores aritméticos
-----------------------
Los operadores aritméticos realizan operaciones matemáticas básicas tales como suma, resta, multiplicación y división en valores numéricos (constantes y variables).

+----------+--------------------------------+
| Operador | Descripción                    |
+==========+================================+
| \+       | Suma                           |
+----------+--------------------------------+
| \-       | Resta                          |
+----------+--------------------------------+
| \*       | Multiplicación                 |
+----------+--------------------------------+
| \/       | División                       |
+----------+--------------------------------+
| \%       | Modulo (reminente de división) |
+----------+--------------------------------+
| \^       | Potencia (Exponencial)         |
+----------+--------------------------------+

----

**Ejemplos:**

Una típica operación aritmética serían con dos números.

Con dos números literales:

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 100 + 50</code></pre>

o también con variables:

.. raw:: html

   <pre><code class="language-latino line-numbers">x = a + b</code></pre>

o también con expresiones:

.. raw:: html

   <pre><code class="language-latino line-numbers">x = (100 + 50) * a</code></pre>

----

Suma
+++++
El operador de **suma** (\+):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x + y
   escribir(z)    //El resultado sería 7</code></pre>

Resta
++++++
El operador de **Resta** (\-):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x - y
   escribir(z)    //El resultado sería 3</code></pre>

Multiplicación
+++++++++++++++
El operador de **multiplicación** (\*):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x * y
   escribir(z)    //El resultado sería 10</code></pre>

División
+++++++++
El operador de **división** (/):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x / y
   escribir(z)    //El resultado sería 2.5</code></pre>

Modulo (Remitente)
+++++++++++++++++++
El operador de **remitente** (\%):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x % y
   escribir(z)    //El resultado sería 1</code></pre>

Potencia
+++++++++
El operador de **función exponencial** (\^):

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 2
   z = x ^ y
   escribir(z)    //El resultado sería 25</code></pre>

.. note:: Para la **potencia**, podemos conseguir el mismo resultado utilizando la librería de matemáticas **mate.pot(5,2)**
   
   .. raw:: html
   
      <pre><code class="language-latino line-numbers">x = 5
      y = 2
      escribir(mate.pot(x,y))    //El resultado sería 25</code></pre>

----

.. _aritmeticaIncre:

Operadores de incremento y decremento
--------------------------------------

Incrementación
++++++++++++++
El operador de incremento, se representa por **suma doble** (++).

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5         //Declaramos una variable con un valor de 5
   x++           //Se incrementa el valor de la variable X por 1
   escribir(x)   //Es resultado sería 6</code></pre>

Decrementación
+++++++++++++++
El operador de decremento, se representa por **resta doble** (\-\-).

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5         //Declaramos una variable con un valor de 5
   x--           //Se decrece el valor de la variable X por 1
   escribir(x)   //Es resultado sería 4</code></pre>

----

Precedencia en los Operadores
------------------------------
En aritmética, todos los operadores (aritméticos, lógicos y relacionales) tienen unas **reglas de precedencia** que se aplican cuando varios operadores actúan juntos, y Latino hace uso de estas reglas.

Los operadores aritméticos, por ejemplo, la multiplicación y la división se ejecutan antes que la suma o la resta.

Para alterar estas reglas de precedencia, se pueden usar **(paréntesis)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 100 + 50 * 3       //Devolverá 250
   y = (100 + 50) * 3     //Devolverá 450
   escribir ("Valor de X: " .. x .. ", Valor de Y: ".. y)</code></pre>