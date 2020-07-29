.. meta::
   :description: Funcion acadena en Latino
   :keywords: manual, documentacion, latino, funcion, base, interna, acadena

============
acadena( )
============
La función **acadena\( \)** convierte los números a cadenas(textos).

Esta función puede ser utilizada en cualquier tipo de números, decimales, variables, o expresiones.

.. code-block:: bash

   acadena(x) //Devolverá como texto el valor numérico de la variable X
   acadena(123) //Devolverá como texto el valor numérico 123
   acadena(100 + 23) //Devolverá como texto el resultado de la expresión

**Ejemplo de función**

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 123
   y = acadena(x)

   escribir(x)           //Devolverá 123
   escribir(y)           //Devolverá 123
   
   /*Aunque visualmente parezca que no ha cambiado nada
   si usamos la función tipo() veremos la diferencia*/
   
   escribir(tipo(x))     //Devolverá decimal
   escribir(tipo(y))     //Devolverá cadena</code></pre>

Convertir buleanos a cadenas(textos)
-------------------------------------
La función **acadena\( \)** se puede usar para convertir valores buleanos(lógicos) en cadenas(textos).

.. raw:: html

   <pre><code class="language-latino line-numbers">acadena(verdadero)     //Devolverá "verdadero"
   acadena(falso)         //Devolverá "falso"</code></pre>