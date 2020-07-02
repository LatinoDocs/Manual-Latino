.. meta::
   :description: Condición SI en Latino
   :keywords: manual, documentacion, latino, sintaxis, si, if

==================
Condición Si (If)
==================
Evalua una condición y si el resultado es verdadero ejecuta las instrucciones a continuación. Los paréntesis son opcionales en la condición.

.. raw:: html

   <pre><code class="language-latino line-numbers">si (condicion)
     #codigo
   fin

   edad = 18
   si edad >= 18
     escribir("Eres mayor de edad, ya puedes votar.")
   fin
   #salida: Eres mayor de edad, ya puedes votar.</code></pre>

En caso de que el resultado de la condición sea falso se deberá de ejecutar el código después de la palabra reservada sino.

.. raw:: html

   <pre><code class="language-latino line-numbers">si condicion
     #codigo
   sino
     #codigo
   fin

   edad = 5
   si edad >= 18
     escribir("Eres mayor de edad, ya puedes votar.")
   sino
     escribir("Eres un niño, tienes que ir a la escuela.")
   fin
   #salida: Eres un niño, tienes que ir a la escuela.</code></pre>

Es posible el anidamiento de las sentencias si-sino de la siguiente manera:

.. raw:: html

   <pre><code class="language-latino line-numbers">si condicion
     #codigo
   sino
     si condicion
       #codigo
     sino
       #codigo
     fin
   fin</code></pre>

Existe una forma más elegante de escribir el código anterior con la palabra reservada osi. En python es elif expresion:.

.. raw:: html

   <pre><code class="language-latino line-numbers">si condicion1
     #codigo
   osi condicion2
     #codigo
   osi condicion3
     #codigo
   sino
     #codigo
   fin</code></pre>