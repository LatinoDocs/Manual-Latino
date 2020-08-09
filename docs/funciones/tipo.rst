.. meta::
   :description: Función báse tipo() en Latino
   :keywords: manual, documentacion, latino, funciones, funcion base, tipo

============
tipo( )
============
La función **tipo\( \)** devuelve el tipo de valor almacenado en una variable o memoria.

Los valores que esta función nos puede devolver lo podemos encontrar en :ref:`tipos de datos <tiposDeDatosLink>`.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 123
   escribir(tipo(x))     //Devolverá decimal

   x = "Hola Mundo"
   escribir(tipo(x))     //Devolverá cadena

   x = ["Hola", "mundo"]
   escribir(tipo(x))     //Devolverá lista

   x = {"Mensaje":"Hola", "Continuacion":"mundo"}
   escribir(tipo(x))     //Devolverá diccionario
   
   x = verdadero
   escribir(tipo(x))     //Devolverá logico
   
   x = nulo
   escribir(tipo(x))     //Devolverá nulo</code></pre>