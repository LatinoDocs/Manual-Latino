.. meta::
   :description: Condición elegir en Latino
   :keywords: manual, documentacion, latino, sintaxis, elegir, switch

==========================
Condición Elegir (Switch)
==========================
Evalúa una opción de múltiples posibles casos. La opción puede ser una expresión, en caso de que ninguna opción se cumpla en algún caso se ejecuta el código después de la palabra reservada otro o defecto. Los valores de los casos solo pueden ser numéricos o cadenas.

.. code-block:: latino
   :linenos:

   elegir (opcion)
     caso valor1:
       #codigo
     caso valor2:
       #codigo
     caso valor3:
       #codigo
     defecto:
       #codigo
   fin

   calificacion = 'B'
   elegir(calificacion)
     caso 'A':
       escribir("Excelente!.")
     caso 'B':
       escribir("Bien echo!.")
     caso 'C':
       escribir("Bien echo!.")
     caso 'D':
       escribir("Todavia pasas.")
     caso 'F':
       escribir("Estas reprobado.")
     otro:
       escribir("Calificación invalida.")
   fin
   #salida: Bien echo!

Notese que se tiene que repetir el caso para B y C por el momento no se permiten casos múltiples como una sola opción.