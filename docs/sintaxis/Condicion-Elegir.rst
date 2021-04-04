.. meta::
   :description: Condición elegir en Latino
   :keywords: manual, documentacion, latino, sintaxis, elegir, switch

==========================
Condición Elegir (Switch)
==========================
La **condicional elegir** es una alternativa a la :ref:`condicional si <siLink>` que vimos en el capítulo anterior.

Esta condicional es usada para realizar diferentes acciones basándose en diferentes condiciones lógicas. En otras palabras, esta condicional evalúa una opción en múltiples casos posibles y selecciona uno de varios bloques de códigos para ser ejecutados.

La condicional elegir contiene las siguientes declaraciones:

+-------------+--------------------------------------------------------------------------------------------------------------+
| Comandos    | Descripción                                                                                                  |
+=============+==============================================================================================================+
| **elegir**  | Inicio de la declaración. Esta evalúa la expresión condicional.                                              |
+-------------+--------------------------------------------------------------------------------------------------------------+
| **caso**    | El resultado de la expresión es evaluada y si concuerda con cualquier caso este es ejecutado.                |
+-------------+--------------------------------------------------------------------------------------------------------------+
| **defecto** | En caso de no producirse ninguna concordancia en ninguno de los casos, este bloque de código será ejecutado. |
+-------------+--------------------------------------------------------------------------------------------------------------+
| **otro**    | Es exactamente lo mismo que el comando **defecto** solo con otro nombre.                                     |
+-------------+--------------------------------------------------------------------------------------------------------------+
| **fin**     | Marca el fin de la declaración.                                                                              |
+-------------+--------------------------------------------------------------------------------------------------------------+
| **romper**  | Detiene la ejecución del código.                                                                             |
+-------------+--------------------------------------------------------------------------------------------------------------+

----

Sintaxis de la condicional "elegir"
------------------------------------

**Ejemplo de sintaxis**

.. code-block:: bash
   
   elegir(expresión)
     caso 1:
       #Bloque de código
       romper
     caso 2:
       #Bloque de código
       romper
     defecto:
       #Bloque de código
   fin

**Ejemplo de código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Dependiendo de cual condición se cumpla
   esta ejecutara el código en su caso correspondiente.

   En este ejemplo el programa escribirá en pantalla
   ¡Bien echo!.
   */
   calificacion = 'B'

   elegir(calificacion)
     caso 'A':
       escribir("¡Excelente!.")
     caso 'B':
       escribir("¡Bien echo!.")
     caso 'C':
       escribir("¡Bien echo!.")
     caso 'D':
       escribir("Necesitas mejorar.")
     caso 'F':
       escribir("Has reprobado.")
     otro:
       escribir("Calificación invalida.")
   fin</code></pre>

----

Casos Múltiples
----------------

En Latino el comando **Elegir** puede soportar casos múltiples igual que otros lenguajes de programación tales como C/C++, C#, Java, entre otros.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   elegir(expresión)
   caso 1:
   caso 2:
   caso 3:
     #Bloque de código
     romper
   caso 4:
   caso 5:
     #Bloque de código
     romper
   defecto:
     #Bloque de código
   fin

**Ejemplo de código**

.. raw:: html

  <pre><code class="language-latino line-numbers">/*
  Dependiendo de cual condición se cumpla
  esta ejecutara el código en su caso correspondiente.

  En este ejemplo el programa escribirá en pantalla
  ¡Excelente!.
  */
  calificacion = 'B'

  elegir(calificacion)
    caso 'A':
    caso 'B':
    caso 'C':
      escribir("¡Excelente!.")
    caso 'D':
      escribir("Necesitas mejorar.")
    caso 'F':
      escribir("Has reprobado.")
    otro:
      escribir("Calificación invalida.")
  fin</code></pre>