.. meta::
   :description: Condición mientras en Latino
   :keywords: manual, documentacion, latino, sintaxis, mientras, while

================================
Condición Mientras (While Loop)
================================
La **condicional mientras** ejecuta un bloque de código repetidas veces mientras su **condición** se siga cumpliendo (sea verdadera).

Esta condicional primero verifica que su condición se cumpla antes de ejecutar el código.

----

Sintaxis de la condicional "mientras"
--------------------------------------

**Ejemplo de sintaxis**

.. code-block:: bash
   
   mientras (condición)
     #Bloque de código
   fin

**Ejemplo de código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Mientras la operación sea verdadera
   este código escribirá en pantalla
   los siguientes números:
   0 1 2 3 4 5 6 7 8 9
   */

   i=0
   
   mientras i < 10
     escribir(i)
     i++            //incrementamos el valor de i
   fin</code></pre>

.. note:: En este ejemplo, si no se incrementa el valor de la variable **i** este bucle se repetiría infinitamente sin parar, produciendo un error en la memoria.

----

Diferencias entre "mientras" y "desde"
---------------------------------------
Como habrá notado, el **comando mientras** y el **comando desde** son muy parecidos entre sí, con la diferencia que el comando **mientras** no requiere de una **declaración** o **sentencia** como en el comando **desde**.

**Ejemplo #1: "desde"**

En este ejemplo se utiliza el comando **desde** para adquirir las marcas de carros en una variable.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este ejemplo escribir en pantalla:
   BMW
   Volvo
   Ford
   Nissan
   */
   
   carros = ["BMW", "Volvo", "Ford", "Nissan"]
   texto = ""

   desde (i=0; i < lista.longitud(carros); i++)
     texto = texto..carros[i].."\n"     # \n significa nueva línea
   fin
   
   escribir(texto)</code></pre>

**Ejemplo #2: "mientras"**

Este ejemplo es similar al anterior con la diferencia que se utilizara el **comando mientras**.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este ejemplo escribir en pantalla:
   BMW
   Volvo
   Ford
   Nissan
   */

   carros = ["BMW", "Volvo", "Ford", "Nissan"]
   i = 0
   texto = ""

   mientras(i < lista.longitud(carros))
     texto = texto..carros[i].."\n"     # \n significa nueva línea
   i++
   fin

   escribir(texto)</code></pre>