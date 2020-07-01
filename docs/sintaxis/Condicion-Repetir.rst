.. meta::
   :description: Condición repetir en Latino
   :keywords: manual, documentacion, latino, sintaxis, repetir

==================
Condición Repetir
==================
Hace que una instrucción o bloque de instrucciones se repitan mientra la condición sea falso, las instrucciones de código se ejecutan al menos una vez. Los paréntesis son opcionales en la condición.

.. code-block:: latino
   :linenos:

   repetir
     #codigo
   hasta condicion

   i=0
   repetir
     escribir(i)
     i++ #incremento
   hasta i == 10
   #salida: 0 1 2 3 4 5 6 7 8 9

Se puede salir de los bucles (desde, mientras y repetir) con la palabra reservada romper.

.. code-block:: latino
   :linenos:

   desde(i=0; i < 10; i++)
     si (i == 5)
       romper    #se sale del ciclo desde
     fin
     imprimir(i)
   fin
   #salida: 0 1 2 3 4   #se imprime solo hasta el 4