.. _desdeLink:

.. meta::
   :description: Condición desde en Latino
   :keywords: manual, documentacion, latino, sintaxis, desde, for

===========================
Condición Desde (For Loop)
===========================
La **condicional desde** hace repetir un mismo código una y otra vez hasta que su expresión sea cumplida (sea verdadera).

Regularmente, la condicional **desde** se utiliza para navegar entre los elementos de una **lista** o **diccionario**, pero también para ejecutar códigos que seán repetitivos.

----

Sintaxis de la condicional "desde"
------------------------------------

**Ejemplo de sintaxis**

.. code-block:: bash
   
   desde (declaración; expresión; sentencia)
     #Bloque de código
   fin

+-----------------+--------------------------------------------------------------------+
| Declaraciones   | Descripción                                                        |
+=================+====================================================================+
| **Declaración** | Esta se ejecuta (una sola vez) antes de la ejecución del código    |
+-----------------+--------------------------------------------------------------------+
| **Expresión**   | Define las condiciones para que el bloque de código sea ejecutado  |
+-----------------+--------------------------------------------------------------------+
| **Sentencia**   | Esta se ejecuta (cada vez) después de ejecutar el bloque de código |
+-----------------+--------------------------------------------------------------------+

**Ejemplo del código**

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En el siguiente código
   mientras la variable i sea menor o igual que 10
   la condicional desde seguirá ejecutándose.
   
   El programa escribirá en pantalla:
   0 1 2 3 4 5 6 7 8 9 10
   */

   desde (i = 0; i <= 10; i++)
     escribir(i)
   fin</code></pre>

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   En este otro ejemplo
   el programa escribirá en pantalla:
   10 9 8 7 6 5 4 3 2 1 0
   */

   desde (i = 10; i >= 0; i--)
     escribir(i)
   fin
   #salida: 10 9 8 7 6 5 4 3 2 1 0</code></pre>

----

Se puede especificar un salto diferente cambiando la expresión de incremento.

.. raw:: html

   <pre><code class="language-latino line-numbers">desde(i = 0; i < 50; i = i+10)
     imprimir(i)
   fin
   #salida: 0 10 20 30 40</code></pre>

----

Uso de librerías
-----------------
Las **expresiones** de la condicional **desde** pueden implementar el uso de :ref:`librerías <libreriasLink>`, así:

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Esta operación compárala la cantidad
   de elementos en la lista frutas y
   los escribirá en pantalla, así:

   > manzana
   > uva
   > cereza
   */

   frutas = ["manzana", "uva", "cereza"]

   desde(i=0; i < lista.longitud(frutas); i++)
     imprimir(frutas[i])
   fin</code></pre>

----

Anidar condicional "desde"
---------------------------
Cuando una condicional **desde** contiene otro condicional **desde** dentro de ella, se le llama **condicional anidada**.

Cuando la condicional "desde" (**madre**) se ejecuta y llega a una condicional anidada (**hija**), la condicional madre no continúa hasta que la condicional hija termine **todos sus ciclos** (hasta que sea verdadera). Todo este ciclo se repetirá hasta que la condicional madre sea verdadera.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Esta operación compara la cantidad
   de elementos en la lista frutas y adjetivos
   los escribirá en pantalla, así:

   > manzana verde
   > manzana grande
   > manzana sabrosa
   > uva verde
   > uva grande
   > uva sabrosa
   > cereza verde
   > cereza grande
   > cereza sabrosa
   */
   
   frutas    = ["manzana", "uva", "cereza"]
   adjetivos = ["verde", "grande", "sabrosa"]

   desde(i=0; i < lista.longitud(frutas); i++)
     desde (e=0; e < lista.longitud(adjetivos); e++)
       escribir (frutas[i].." "..adjetivos[e])
     fin
   fin</code></pre>