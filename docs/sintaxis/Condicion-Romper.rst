.. _romperLink:

.. meta::
   :description: Condición ROMPER en Latino
   :keywords: manual, documentacion, latino, sintaxis, romper, break

=========================
Condición Romper (Break)
=========================
La **condición o sentencia Romper (Break)** detiene las repeticiones (rompe) de los bucles :ref:`si <siLink>`, :ref:`mientras <mientrasLink>`, :ref:`rango <rangoLink>` y :ref:`desde <desdeLink>`.

Es decir, la sentencia **romper** termina de forma abrupta un bucle.

Esta condicional evalúa una condición y si el resultado es verdadero ejecuta las instrucciones descritas en ella.

Latino tiene las siguientes declaraciones condicionales:

+------------+---------------------------------------------------------------------------------------+
| Comandos   | Descripción                                                                           |
+============+=======================================================================================+
| **romper** | Detiene la operación de un bucle y, el programa, continua con la siguiente operación. |
+------------+---------------------------------------------------------------------------------------+

----

Condicional "romper" (Break)
------------------------------
Inicio de cualquier condicional que genere un bucle (**si**, **mientras**, **rango** y **desde**). Dentro de esa declaración, en el bloque de código, se ingresa el comando **romper**.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   elegir (condición lógica)
     caso 1:
     caso 2:
       #Bloque de código
       romper
     caso 3:
       #Bloque de código
       romper
     defecto:
       #Bloque de código
   fin

.. code-block:: bash

   desde (condición lógica)
     #Bloque de código
     romper
   fin

.. nota:: La **condición lógica** se puede escribir entre paréntesis o sin ellos.

**Ejemplo de código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Cuando la condición se cumple
   se detendrá la ejecución del código
   y devolverá los valores obtenidos
   hasta antes de su finalización.
   */
   desde (i=0; i<10; i++)
	   escribir(i)
	     si (i == 5)
		     romper
	   fin
   fin
   #salida: 0 1 2 3 4 5</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">i=0
   mientras (i < 10)
     escribir(i)
     si (i == 5)
	     romper
     fin
     i++
   fin
   #salida: 0 1 2 3 4 5</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">i=0
   repetir
     escribir(i)
     si (i == 5)
	     romper
     fin
     i++
   hasta (i == 10)
   #salida: 0 1 2 3 4 5</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">para i en rango(0, 10)
     escribir(i)
     si (i == 5)
	     romper
     fin
   fin
   #salida: 0 1 2 3 4 5</code></pre>
