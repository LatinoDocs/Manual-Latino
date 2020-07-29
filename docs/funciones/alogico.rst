.. meta::
   :description: Funcion base(interna) alogico en Latino
   :keywords: manual, documentacion, latino, funciones, funciones internas, alogico

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
   escribir(anumero(-1))            //Devolverá "verdadero"
   escribir(anumero(3.14))          //Devolverá "verdadero"
   escribir(anumero("Hola"))        //Devolverá "verdadero"
   escribir(anumero(" "))           //Devolverá "verdadero" (al tener un espacio en blanco, es verdadero)
   escribir(anumero("0"))           //Devolverá "falso"
   escribir(anumero(nulo))          //Devolverá "falso"
   escribir(anumero(""))            //Devolverá "falso"</code></pre>