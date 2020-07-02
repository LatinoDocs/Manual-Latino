.. meta::
   :description: Operadores en Latino
   :keywords: manual, documentacion, latino, sintaxis, operadores

============
Operadores
============
En Latino como en otros lenguajes de programación, tiene varios operadores para realizar tareas que incluyen operaciones aritméticas, condicionales y lógicos.

La precedencia de operadores en este lenguaje de programación es la misma que otros lenguajes como C, Lua y Python.

Latino tiene una amplia gama de operadores para realizar diversas operaciones. Para una mejor comprensión de los operadores, estos operadores se pueden clasificar como:

  * Operadores aritméticos
  * Operadores de incremento y decremento
  * Operadores de asignación
  * Operadores relacionales
  * Operadores lógicos
  * Operadores condicionales
  * Otros operadores

.. note:: En Latino estos operadores sólo se pueden usar con variables con **valores numéricos**, no alfanuméricos.

----

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

.. container:: nota
   
   | Puedes aprender más sobre estos operadores aritméticos en el capítulo de :ref:`Aritmética <aritmeticaLink>`

----

Operadores de incremento y decremento
--------------------------------------
En latino se encuentran dos operadores que incrementan y decrementan el valor numérico de un operando (constante o variable) por 1(uno).

+----------+-------------------------------------------------+
| Operador | Descripción                                     |
+==========+=================================================+
| ++       | Incrementa el valor en 1 (valido sólo en post). |
+----------+-------------------------------------------------+
| --       | Decrementa el valor en 1 (valido sólo en post). |
+----------+-------------------------------------------------+

.. container:: nota
   
   | Puedes aprender más sobre estos operadores en el capítulo de :ref:`Aritmética <aritmeticaIncre>`

----

Operadores de asignación
-------------------------
Los operadores de asignación se usan para asignar un valor a una variable.
El operador de asignación más común es **=** (signo de igual).

+----------+---------+------------+
| Operador | Ejemplo | Igual a    |
+==========+=========+============+
| \=       | x = y   | x = y      |
+----------+---------+------------+
| \+=      | x += y  | x = x + y  |
+----------+---------+------------+
| \-=      | x -= y  | x = x - y  |
+----------+---------+------------+
| \*=      | x \*= y | x = x \* y |
+----------+---------+------------+
| \/=      | x /= y  | x = x / y  |
+----------+---------+------------+
| \%=      | x \%= y | x = x \% y |
+----------+---------+------------+

El operador de asignación **+=** agrega un valor a una variable.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 10        //Asignamos un valor a la variable X
   x += 5        //Al valor que ya dispone la variable X, le sumamos un valor de 5
   escribir(x)   //El resultado será 15</code></pre>

.. container:: nota
   
   | Puedes aprender más sobre estos operadores de asignación en el capítulo de :ref:`Asignación <asignacionLink>`

----

Operadores relacionales
------------------------
En programación, un operador relacional verifica la relación entre dos operandos. Si la relación es verdadera, devuelve el valor verdadero; si la relación es falsa, devuelve el valor falso.

Los operadores relacionales se utilizan en la toma de decisiones y en los bucles (por su nombre en inglés).

+----------+-------------------+
| Operador | Descripción       |
+==========+===================+
| ==       | Igual que         |
+----------+-------------------+
| \!=      | No igual que      |
+----------+-------------------+
| \>       | Mayor que         |
+----------+-------------------+
| \<       | Menor que         |
+----------+-------------------+
| \>=      | Mayor o igual que |
+----------+-------------------+
| \<=      | Menor o igual que |
+----------+-------------------+
| \~=      | Regex             |
+----------+-------------------+

.. container:: nota
   
   | Puedes aprender más sobre estos operadores relacionales en el capítulo de :ref:`Relacionales <relacionalesLink>`

----

Operadores lógicos
-------------------
Los operadores lógicos se usan para determinar la lógica entre variables o valores y estos devuelven **Verdadero** o **Falso**, dependiendo si la expresión es verdadera o falsa.

Los operadores lógicos se utilizan comúnmente en la toma de decisiones en programación.

+----------+----------------------------------------------------------------+
| Operador | Descripción                                                    |
+==========+================================================================+
| \&\&     | **y lógico.**                                                  |
|          | Sólo será verdadero si todos los operadores son verdaderos.    |
+----------+----------------------------------------------------------------+
| \|\|     | **ó lógico.**                                                  |
|          | Será verdadero si sólo uno de los dos operadores es verdadero. |
+----------+----------------------------------------------------------------+
| \!       | **no lógico.**                                                 |
|          | Sólo será verdadero si los operadores son falsos.              |
+----------+----------------------------------------------------------------+

.. container:: nota
   
   | Puedes aprender más sobre estos operadores lógicos en el capítulo de :ref:`Lógicos <logicosLink>`

----

Operadores condicionales
-------------------------
Un operador condicional es un operador ternario, es decir, funciona en 3 operandos.

**Sintaxis del operador condicional:**

.. code-block:: bash
   
   (Expresión condicional) ? expresión1 : expresión2

El operador condicional funciona de la siguiente manera:
  * La primera *expresión condicional* se evalúa primero. Esta expresión se evalúa si es verdadera o si es falsa.
  * Si la expresión condicional es verdadera, se evalúa la *expresión1*.
  * Si la expresión condicional es falsa, se evalúa la *expresió2*.

.. raw:: html

   <pre><code class="language-latino line-numbers">numero = -5                                                #creamos una variable con un valor de -5
   mensaje = (numero < 0) ? " es negativo" : " es positivo"   #creamos una nueva variable y a esta le asignamos el operador condicional.
   escribir ("El número " .. numero .. mensaje)               #El mesaje seria: El número -5 es negativo.</code></pre>

----

Otros operadores
-----------------
Entre estos operadores podemos encontrar el operador de **concatenación** y el operador de **acceso a miembros**.

Operador de concatenación
++++++++++++++++++++++++++
El operador de concatenación está representado por doble punto **..**
Este operador se utiliza para concatenar(juntar) expresiones no relacionadas entre sí:

.. raw:: html

   <pre><code class="language-latino line-numbers">nombre = "Melvin"                              //Creamos una variable llamada nombre, con un valor alfanumérico Melvin
   apellido = "Guerrero"                          //Creamos otra variable llamada apellido, con un valor alfanumérico Guerrero
   escribir ("Hola! " .. nombre .." "..apellido)  #En el comando escribir() asignamos un texto de bienvenida y concatenamos nuestras variables dejando un espacio entre ellas.</code></pre>

Operador de acceso a miembro
+++++++++++++++++++++++++++++
El operador de acceso a miembro está representado por un solo punto **.**