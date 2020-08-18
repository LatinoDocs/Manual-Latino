.. meta::
   :description: Condición repetir en Latino
   :keywords: manual, documentacion, latino, sintaxis, repetir

=============================
Condición Repetir (Do While)
=============================
La **condicional repetir** es una variante de la **condicional mientras**.

Esta condicional ejecuta su bloque de código al menos una vez antes de verificar si su condición es cumplida (es verdadera).

Mientras su condición sea verdadera, este bucle se volverá a repetir.

----

Sintaxis de la condicional "repetir"
-------------------------------------

**Ejemplo de sintaxis**

.. code-block:: bash
   
   repetir
     #Bloque de código
   hasta (condición)

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Hasta que la operación deje de ser cumplida
   este código escribira en pantalla
   los siguientes números:
   0 1 2 3 4 5 6 7 8 9
   */

   i=0

   repetir
     escribir(i)
     i++            //incrementamos el valor de i
   hasta i == 10</code></pre>

.. note:: En este ejemplo, si no se incrementa el valor de la variable **i** este bucle se repetiría infinitamente sin parar, produciendo un error en la memoria.
