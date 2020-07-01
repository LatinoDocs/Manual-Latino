.. meta::
   :description: Asignación en Latino
   :keywords: manual, documentacion, latino, sintaxis, asignacion

============
Asignación
============

+----------+---------+------------+
| Operador | Ejemplo | Igual a    |
+==========+=========+============+
| =        | x = y   | x = y      |
+----------+---------+------------+
| +=       | x += y  | x = x + y  |
+----------+---------+------------+
| \-=      | x -= y  | x = x - y  |
+----------+---------+------------+
| \*=      | x \*= y | x = x \* y |
+----------+---------+------------+
| \/=      | x \/= y | x = x \/ y |
+----------+---------+------------+
| \%=      | x \%= y | x = x \% y |
+----------+---------+------------+

----

Operador =
-----------
El asignador operacional **=** asigna un valor a la variable **x**

.. code-block:: latino
   :linenos:

   x = 100

Operador +=
------------
El asignador operacional **+=** suma los valores de las variables **x** más **y** y los asigna a la variable **x**

.. code-block:: latino
   :linenos:

   x = 10
   y = 5
   x += y
   escribir(x)  //El resultado será 15

Operador -=
------------
El asignador operacional **-=** resta los valores de las variables **x** menos **y** y los asigna a la variable **x**

.. code-block:: latino
   :linenos:

   x = 10
   y = 5
   x -= y
   escribir(x)  //El resultado será 5

Operador \*=
-------------
El asignador operacional ***=** multiplica los valores de las variables **x** por **y** y los asigna a la variable **x**

.. code-block:: latino
   :linenos:

   x = 10
   y = 5
   x *= y
   escribir(x)  //El resultado será 50

Operador /=
------------
El asignador operacional **/=** divide los valores de las variables **x** entre **y** y los asigna a la variable **x**

.. code-block:: latino
   :linenos:

   x = 10
   y = 5
   x /= y
   escribir(x)  //El resultado será 2

Operador %=
------------
El asignador operacional **%=** nos devuelve el remitente (modulo) de la divide los valores de las variables **x** entre **y** y los asigna a la variable **x**

.. code-block:: latino
   :linenos:

   x = 10
   y = 5
   x %= y
   escribir(x)  //El resultado será 0