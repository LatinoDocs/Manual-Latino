.. meta::
   :description: Función báse alogico() en Latino
   :keywords: manual, documentacion, latino, funciones, funcion base, alogico

============
alogico( )
============
La función **alogico\( \)** convierte los números y textos a un valor lógico (**verdadero** o **falso**).

Cualquier número diferente a **0**, ya sea un número positivo, negativo o decimal, dará **verdadero**.

De igual manera cualquier texto aun si este es un espacio en blanco devolverá **verdadero**.

La función **alogico\( \)** devolverá un valor **falso** solo si el número es **0**, si no hay nada en las comillas, o si asignamos un valor **nulo**.

**Ejemplo de función**

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(alogico(1))             //Devolverá "verdadero"
   escribir(alogico(-1))            //Devolverá "verdadero"
   escribir(alogico(3.14))          //Devolverá "verdadero"
   escribir(alogico("Hola"))        //Devolverá "verdadero"
   escribir(alogico(" "))           //Devolverá "verdadero" (al tener un espacio en blanco, es verdadero)
   escribir(alogico("0"))           //Devolverá "falso"
   escribir(alogico(nulo))          //Devolverá "falso"
   escribir(alogico(""))            //Devolverá "falso"</code></pre>