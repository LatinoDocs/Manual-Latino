.. _desdeLink:

.. meta::
   :description: Condición desde en Latino
   :keywords: manual, documentacion, latino, sintaxis, desde, for

===========================
Condición Rango (For Loop)
===========================
El **condicional rango** hace repetir un mismo código una y otra vez mientras su expresión se cumpla.

Es un método de bucle similar al que utiliza Python y a partir de la **versión 1.4.0**. En esta versión solo se utilizan valores númericos, no esta habilitado el uso de variables.

Crea una secuencia númerica que va desde **inicio** hasta **fin**. La secuencia **salto** genera el tipo de incremento/decremento del bucle.

Si el **salto** no se especifica el código avanzará de 1 en 1.

----

Sintaxis del condicional "rango"
---------------------------------

**Ejemplo de sintaxis**

.. code-block:: bash
   
   para elemento en rango (inicio, fin, salto)
     #Bloque de código
   fin

+-----------------+--------------------------------------------------------------------+
| Declaraciones   | Descripción                                                        |
+=================+====================================================================+
| **Inicio**      | Es el primer valor desde donde comienza a contar el bucle          |
+-----------------+--------------------------------------------------------------------+
| **Fin**         | En el último valor en el que dejará de contar                      |
+-----------------+--------------------------------------------------------------------+
| **Salto**       | Es la secuencia del salto del código                               |
+-----------------+--------------------------------------------------------------------+

**Ejemplo del código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   El siguiente código mostrará los valores
   del 0 al 9
   */

   para i en rango(10)
     poner(i)
   fin
   #salida: 0 1 2 3 4 5 6 7 8 9</code></pre>

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   Cuando se escriben dos valores el lenguaje
   interpreta los parámetros de inicio y fin.
   Este ejemplo escribirán en pantalla los valores:
   1 2 3 4 5 6 7 8 9 10
   */

   para i en rango(1, 10)
     poner(i)
   fin
   #salida: 1 2 3 4 5 6 7 8 9 10</code></pre>

----

Cuando se escriben tres valores, el tercero determina el tipo de secuencia de incremento o decremento.

**Ejemplo del código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En el siguiente ejemplo el programa comienza
   a contar desde el 1 hasta el 10 con incremento de 2.
   Se escribirán en pantalla los valores:
   1 3 5 7 9
   */

   para i en rango(1, 10, 2)
     poner(i)
   fin
   #salida: 1 3 5 7 9</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En el siguiente ejemplo el programa comienza
   a contar desde el 10 hasta el 0 con decremento de 2.
   Se escribirán en pantalla los valores:
   10 8 6 4 2
   */

   para i en rango(10, 0, -2)
     poner(i)
   fin
   #salida: 10 8 6 4 2</code></pre>

----

Anidar condicional "rango"
---------------------------
Cuando un condicional **rango** contiene otro dentro de él, se lo llama **condicional anidado**.

Cuando el condicional **rango** (el **para principal**) se ejecuta y llega a un condicional anidado (el **para secundario** o **itinerado**), el principal no continúa hasta que el secundario termine **todos sus ciclos**.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Esta operación imprime las tablas del 1 al 10
   con sus resultados
   */

   para i en rango(1, 11)
     para j en rango(1, 11)
       poner(i .. ' x ' .. j .. ' = ' .. i * j)
     fin
   fin
   #salida: Son las tablas de multiplicar del 1 al 10</code></pre>