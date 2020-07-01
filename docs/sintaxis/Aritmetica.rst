.. meta::
   :description: Aritmética en Latino
   :keywords: manual, documentacion, latino, sintaxis, aritmetica

============
Aritmética
============

Operadores aritméticos
-----------------------
Los operadores aritméticos realizan operaciones matemáticas básicas tales como suma, resta, multiplicación y división en valores numéricos (constantes y variables).

+----------+--------------------------------+
| Operador | Descripción                    |
+==========+================================+
| \+       | Suma                           |
+----------+--------------------------------+
| \-       | Resta                          |
+----------+--------------------------------+
| \*       | Multiplicación                 |
+----------+--------------------------------+
| \/       | División                       |
+----------+--------------------------------+
| \%       | Modulo (reminente de división) |
+----------+--------------------------------+
| \^       | Potencia                       |
+----------+--------------------------------+

----

**Ejemplos:**

Una típica operación aritmética serían con dos números.

Con dos números literales:

.. code-block:: latino
   :linenos:

   x = 100 + 50

o también con variables:

.. code-block:: latino
   :linenos:

   x = a + b

o también con expresiones:

.. code-block:: latino
   :linenos:

   x = (100 + 50) * a

----

Suma
+++++
El operador de **suma** (+):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x + y
   escribir(z)    //El resultado sería 7

Resta
++++++
El operador de **Resta** (-):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x - y
   escribir(z)    //El resultado sería 3

Multiplicación
+++++++++++++++
El operador de **multiplicación** (*):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x * y
   escribir(z)    //El resultado sería 10

División
+++++++++
El operador de **división** (/):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x / y
   escribir(z)    //El resultado sería 2.5

Modulo (Remitente)
+++++++++++++++++++
El operador de **remitente** (%):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x % y
   escribir(z)    //El resultado sería 1

Potencia
+++++++++
El operador de **reminente** (^):

.. code-block:: latino
   :linenos:

   x = 5
   y = 2
   z = x ^ y
   escribir(z)    //El resultado sería 25

----

Operadores de incremento y decremento
--------------------------------------

Incrementación
++++++++++++++
El operador de incremento, se representa por **suma doble** (++).

.. code-block:: latino
   :linenos:

   x = 5         //Declaramos una variable con un valor de 5
   x++           //Se incrementa el valor de la variable X por 1
   escribir(x)   //Es resultado sería 6

Decrementación
+++++++++++++++
El operador de incremento, se representa por **resta doble** (--).

.. code-block:: latino
   :linenos:

   x = 5         //Declaramos una variable con un valor de 5
   x--           //Se decrece el valor de la variable X por 1
   escribir(x)   //Es resultado sería 4

----

Precedencia en los Operadores
------------------------------
En aritmética, todos los operadores (aritméticos, lógicos y relacionales) tienen unas **reglas de precedencia** que se aplican cuando varios operadores actúan juntos, y Latino hace uso de estas reglas.

Los operadores aritméticos, por ejemplo, la multiplicación y la división se ejecutan antes que la suma o la resta.

Para alterar estas reglas de precedencia, se pueden usar **(paréntesis)**.

.. code-block:: latino
   :linenos:

   x = 100 + 50 * 3
   y = (100 + 50) * 3
   escribir ("Valor de X: " .. x .. ", Valor de Y: ".. y)