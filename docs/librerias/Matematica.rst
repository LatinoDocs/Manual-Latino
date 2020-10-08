.. _matelibLink:

.. meta::
   :description: Librería de matematicas en Latino
   :keywords: manual, documentacion, latino, librerias, lib, mate, matematica

============
Lib "mate"
============
La librería **mate** contiene las funciones de **matemáticas** en Latino.

**Lista de comando**

+----------------+------------+-------------------------------------------------------------------------------+
| Comando        | Parámetros | Descripción                                                                   |
+================+============+===============================================================================+
| abs\( \)       | 1          | Devuelve el valor absoluto                                                    |
+----------------+------------+-------------------------------------------------------------------------------+
| acos\( \)      | 1          | Devuelve el arcocoseno en radianes                                            |
+----------------+------------+-------------------------------------------------------------------------------+
| acosh\( \)     | 1          | Devuelve el coseno hiperbólico inverso de un número                           |
+----------------+------------+-------------------------------------------------------------------------------+
| aleatorio\( \) | 0, 1 ó 2   | Devuelve un número aleatorio                                                  |
+----------------+            |                                                                               |
| alt\( \)       |            |                                                                               |
+----------------+------------+-------------------------------------------------------------------------------+
| asen\( \)      | 1          | Devuelve el arcoseno en radianes                                              |
+----------------+------------+-------------------------------------------------------------------------------+
| asenh\( \)     | 1          | Devuelve el arcoseno hiperbólico inverso de un número                         |
+----------------+------------+-------------------------------------------------------------------------------+
| atan\( \)      | 1          | Devuelve el arcotangente como un valor numérico entrew -PI/2 y PI/2 radianes  |
+----------------+------------+-------------------------------------------------------------------------------+
| atanh\( \)     | 1          | Devuelve el arcotangente hiperbólico inverso de un número                     |
+----------------+------------+-------------------------------------------------------------------------------+
| atan2\( \)     | 2          | Devuelve el arcotangente del cociente de sus argumentos                       |
+----------------+------------+-------------------------------------------------------------------------------+
| base\( \)      | 2          | Devuelve la base de la operación                                              |
+----------------+------------+-------------------------------------------------------------------------------+
| cos\( \)       | 1          | Devuelve el coseno                                                            |
+----------------+------------+-------------------------------------------------------------------------------+
| cosh\( \)      | 1          | Devuelve el coseno hiperbólico                                                |
+----------------+------------+-------------------------------------------------------------------------------+
| e\( \)         | 0          | Devuelve el valor del número de Eular (Eular's number)                        |
+----------------+------------+-------------------------------------------------------------------------------+
| exp\( \)       | 1          | Devuelve el valor de :math:`E^x`, donde E es un `número de Euler`_            |
+----------------+------------+-------------------------------------------------------------------------------+
| frexp\( \)     | 2          | Devuelve el número descompuesto y a una potencia integral de dos.             |
+----------------+------------+-------------------------------------------------------------------------------+
| ldexp\( \)     | 2          | Devuelve el número multiplicado por 2 elevado a una potencia                  |
+----------------+------------+-------------------------------------------------------------------------------+
| log\( \)       | 1          | Devuelve el logaritmo natural                                                 |
+----------------+------------+-------------------------------------------------------------------------------+
| log10\( \)     | 1          | Devuelve el logaritmo natural en base diez                                    |
+----------------+------------+-------------------------------------------------------------------------------+
| parte\( \)     | 2          | Devuelve la parte de la operación                                             |
+----------------+------------+-------------------------------------------------------------------------------+
| pi\( \)        | 0          | Devuelve el valor de PI                                                       |
+----------------+------------+-------------------------------------------------------------------------------+
| piso\( \)      | 1          | Devuelve el número redondeado hacia abajo al número entero más cercano        |
+----------------+------------+-------------------------------------------------------------------------------+
| porc\( \)      | 2          | Devuelve el porcentaje de la operación                                        |
+----------------+            |                                                                               |
| porciento\( \) |            |                                                                               |
+----------------+            |                                                                               |
| porcentaje\( \)|            |                                                                               |
+----------------+------------+-------------------------------------------------------------------------------+
| pot\( \)       | 2          | Devuelve el valor de un número elevado a la potencia                          |
+----------------+------------+-------------------------------------------------------------------------------+
| max\( \)       | 1,2,3...   | Devuelve el más alto valor de una lista                                       |
+----------------+------------+-------------------------------------------------------------------------------+
| min\( \)       | 1,2,3...   | Devuelve el más bajo valor de una lista                                       |
+----------------+------------+-------------------------------------------------------------------------------+
| raiz\( \)      | 1          | Devuelve la raíz cuadrada                                                     |
+----------------+------------+-------------------------------------------------------------------------------+
| raizc\( \)     | 1          | Devuelve la raíz cúbica de un número                                          |
+----------------+------------+-------------------------------------------------------------------------------+
| redondear\( \) | 1          | Devuelve el número redondeado                                                 |
+----------------+            |                                                                               |
| rnd\( \)       |            |                                                                               |
+----------------+------------+-------------------------------------------------------------------------------+
| sen\( \)       | 1          | Devuelve el seno                                                              |
+----------------+------------+-------------------------------------------------------------------------------+
| senh\( \)      | 1          | Devuelve el seno hiperbólico                                                  |
+----------------+------------+-------------------------------------------------------------------------------+
| tan\( \)       | 1          | Devuelve la tangente de un ángulo                                             |
+----------------+------------+-------------------------------------------------------------------------------+
| tanh\( \)      | 1          | Devuelve la tangente hiperbólico de un número                                 |
+----------------+------------+-------------------------------------------------------------------------------+
| tau\( \)       | 0          | Devuelve el valor de TAU                                                      |
+----------------+------------+-------------------------------------------------------------------------------+
| techo\( \)     | 1          | Devuelve el número redondeado hacia arriba al número entero más cercano       |
+----------------+------------+-------------------------------------------------------------------------------+
| trunc\( \)     | 1          | Devuelve las partes enteras truncadas de diferentes números                   |
+----------------+------------+-------------------------------------------------------------------------------+

----

mate.abs\( \)
---------------
El comando **mate.abs\( \)** devuelve el valor **absoluto (positivo)** del número especificado.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.abs(-7.25))     //Devolverá 7.25</code></pre>

----

mate.acos\( \)
---------------
Este comando devuelve el **arcocoseno** de un número como un valor entre el **cero (0) y PI radianes**.

Si el número asignado está **fuera** del rango de -1 a 1, el comando devolverá **NaN**.

El valor de **-1** devolverá el valor de PI, y el valor de **1** devolverá el valor de cero (0).

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.acos(0.5))     //Devolverá 1.04719...</code></pre>

----

mate.acosh\( \)
---------------
Este comando devuelve el **coseno hiperbólico inverso** de un número.

Este comando admite números igual o mayor que 1 **(x >= 1)**.

Si el número asignado está **fuera** es menor que 1, el comando devolverá **NaN**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.acosh(7))        //Devolverá 2.633915793849634
   escribir(mate.acosh(56))       //Devolverá 4.71841914237288
   escribir(mate.acosh(2.45))     //Devolverá 1.544713117870739
   escribir(mate.acosh(1))        //Devolverá 0</code></pre>

----

mate.aleatorio\( \)
--------------------
El comando **mate.aleatorio\( \)** devuelve un número.

Este comando también dispone de un alias **mate.alt()**.

Este comando puede admitir desde **cero (0)** parámetros, hasta un máximo de **dos (2)** parámetros.

En este comando se puede asignar números positivos como negativos.

.. note:: Los parámetros se definen de la siguiente manera:
    
    * Cero o ningún parámetro:
        Devolverá un valor aleatorio entre **cero (0)** y **uno (1)**.

    * Un parámetro:
        Se tomará como el número máximo, y devolverá entre **cero (0)** hasta el número asignado.

    * Dos parámetros:
        Devolverá un número aleatorio dentro del rango numérico asignado.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.alt())                //Devolverá un número aleatorio entre 0 y 1
   escribir(mate.aleatorio(25))        //Devolverá un número aleatorio entre 0 y 25
   escribir(mate.aleatorio(-25,5))     //Devolverá un número aleatorio entre -25 a 5</code></pre>

----

mate.asen\( \)
---------------
El comando **mate.asen\( \)** devuelve el **arcoseno** de un número como un valor entre **-PI/2** y **PI/2** radianes.

Si el número asignado está **fuera** del rango de -1 a 1, el comando devolverá **NaN**.

El valor de **1** devolverá el valor de PI/2 y el valor de **-1** devolverá el valor de -PI/2.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.asen(0.5))     //Devolverá 0.52359...</code></pre>

----

mate.asenh\( \)
-----------------
Este comando devuelve el **arcoseno hiperbólico inverso** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.asenh(7))        //Devolverá 2.644120761058629
   escribir(mate.asenh(56))       //Devolverá 4.718578581151767
   escribir(mate.asenh(2.45))     //Devolverá 1.6284998192841909
   escribir(mate.asenh(1))        //Devolverá 0.881373587019543
   escribir(mate.asenh(0.5))      //Devolverá 0.48121182505960347
   escribir(mate.asenh(-10))      //Devolverá -2.99822295029797</code></pre>

----

mate.atan\( \)
---------------
Este comando devuelve el **arcotangente** de un número como un valor entre **-PI/2** y **PI/2** radianes.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.atan(2))     //Devolverá 1.10714...</code></pre>

----

mate.atanh\( \)
-----------------
Este comando devuelve el **arcotangente hiperbólico inverso** de un número.

El parámetro admitido por este comando debe estar entre -0.99 y 0.99.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.atanh(0.59))      //Devolverá 0.6776660677579618
   escribir(mate.atanh(-0.12))     //Devolverá -0.120581028408444
   escribir(mate.atanh(0.99))      //Devolverá 2.646652412362246</code></pre>

----

mate.atan2\( \)
----------------
Este comando devuelve el **arcotangente** del cociente de sus argumentos, como un valor numérico entre **PI** y **-PI** radianes.

El número devuelto representa el ángulo en el sentido contrario de las agujas del reloj en radianes (pero NO en grados) entre los dos valores asignados a la operación.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo usaremos las coordenadas de (4,8).

   **Importante**
   Con este comando la segunda coordenada se pasa como primer argumento
   y la primera coordenada se pasa como segundo argumento
   */
   
   escribir(mate.atan2(8,4))     //Devolverá 1.10714...</code></pre>

----

.. _base:

mate.base\( \)
---------------
Este comando devuelve la **base** de un porciento.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos :ref:`mate.parte\( \) <parte>` y :ref:`mate.porc\( \) <porc>`  

**Ejemplo de sintaxis**

.. code-block:: bash
   
   base = parte / porciento

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo buscaremos la base.
   Ejemplo: ¿30 es una parte que representa el 40% de cuál número?
   */
   
   escribir(mate.base(30,40))     //Devolverá 75</code></pre>

----

mate.cos\( \)
--------------
Este comando devuelve el **coseno** de un número.

El comando **mate.cos\( \)** devuelve un valor numérico entre **-1** y **1**, que representa el coseno del ángulo.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.cos(3))     //Devolverá -0.98999...</code></pre>

----

mate.cosh\( \)
---------------
Este comando devuelve el **coseno hiperbólico** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.cosh(3))     //Devolverá 10.06766...</code></pre>

----

mate.e\( \)
--------------
Este comando devuelve el valor del **número de Eular** (*eular's number*).

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.e())     //Devolverá 2.718281828459045</code></pre>

----

mate.exp\( \)
--------------
Este comando devuelve el valor :math:`E^x`, donde E es un `número de Euler`_ (aproximadamente 2,7183) y **equis(x)** es el número que se le pasa.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.exp(1))      //Devolverá 2.71828...
   escribir(mate.exp(-1))     //Devolverá 0.36787...
   escribir(mate.exp(5))      //Devolverá 148.41315...
   escribir(mate.exp(10))     //Devolverá 22026.46579...</code></pre>

----

mate.frexp\( \)
----------------
Este comando **descompone** un número en significativo y a una potencia integral de 2.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.frexp(123.45,0.45))     //Devolverá 0.96445...</code></pre>

----

mate.ldexp\( \)
----------------
Este comando **multiplica** un número por 2, **elevado a una potencia**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.ldexp(7,-4))        //Devolverá 0.4375
   escribir(mate.ldexp(1,-1074))     //Devolverá 4.94065...
   escribir(mate.ldexp(-0,10))       //Devolverá -0
   escribir(mate.ldexp(1,1024))      //Devolverá inf</code></pre>

----

mate.log\( \)
--------------
Este comando devuelve el **logaritmo natural** de un número.

Si el parámetro es **negativo**, devolverá **NaN**.

Si el parámetro es **cero (0)**, devolverá **infinito**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.log(2))          //Devolverá 0.69314...
   escribir(mate.log(2.7183))     //Devolverá 1.0000066849...
   escribir(mate.log(1))          //Devolverá 0
   escribir(mate.log(0))          //Devolverá -inf
   escribir(mate.log(-1))         //Devolverá NaN</code></pre>

----

mate.log10\( \)
----------------
Este comando devuelve el **logaritmo común** de un número (en base a 10).

Si el parámetro es **negativo**, devolverá **NaN**.

Si el parámetro es **cero (0)**, devolverá **infinito**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.log10(1))         //Devolverá 0
   escribir(mate.log10(5))         //Devolverá 0.69897...
   escribir(mate.log10(10))        //Devolverá 1
   escribir(mate.log10(20))        //Devolverá 1.30102...
   escribir(mate.log10(100))       //Devolverá 2
   escribir(mate.log10(1000))      //Devolverá 3
   escribir(mate.log10(0.001))     //Devolverá -3
   escribir(mate.log10(0))         //Devolverá -inf
   escribir(mate.log10(-1))        //Devolverá NaN</code></pre>

----

.. _parte:

mate.parte\( \)
---------------
Este comando devuelve la **parte** de un porciento.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos :ref:`mate.base\( \) <base>` y :ref:`mate.porc\( \) <porc>`  

**Ejemplo de sintaxis**

.. code-block:: bash
   
   parte = base * porciento

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo buscaremos la parte.
   Ejemplo: ¿cuanto es el 35% de 200?
   */
   
   escribir(mate.parte(35,200))     //Devolverá 70</code></pre>

----

mate.pi\( \)
--------------
Este comando devuelve el valor de **PI**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.pi())     //Devolverá 3.141592653589793</code></pre>

----

mate.piso\( \)
---------------
A diferencia del comando **mate.techo\( \)**, el comando **mate.piso\( \)** redondea un número **hacia abajo** al entero más cercano.

Si el argumento pasado es un número entero, el valor NO se redondeará.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.piso(1.6))      //Devolverá 1
   escribir(mate.piso(0.60))     //Devolverá 0
   escribir(mate.piso(5))        //Devolverá 5
   escribir(mate.piso(5.1))      //Devolverá 5
   escribir(mate.piso(-5.1))     //Devolverá -6
   escribir(mate.piso(-5.9))     //Devolverá -6</code></pre>

----

.. _porc:

mate.porc\( \)
---------------
Este comando devuelve la **porcentaje** de un porciento.

Este comando también dispone de alias como **mate.porciento\( \)** y **mate.porcentaje\( \)**.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos :ref:`mate.base\( \) <base>` y :ref:`mate.parte\( \) <parte>`  

**Ejemplo de sintaxis**

.. code-block:: bash
   
   porcentaje = parte / base

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo buscaremos el porcentaje.
   Ejemplo: ¿45 es cual porcentaje de 70?
   */
   
   escribir(mate.porc(45,70))     //Devolverá 0.6428571428571429</code></pre>

----

mate.pot\( \)
--------------
Este comando devuelve el valor(primer dígito) **elevado a la potencia** (segundo dígito).

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.pot(4,3))      //Devolverá 64
   escribir(mate.pot(0,1))      //Devolverá 0
   escribir(mate.pot(1,1))      //Devolverá 1
   escribir(mate.pot(1,10))     //Devolverá 1
   escribir(mate.pot(3,3))      //Devolverá 27
   escribir(mate.pot(-3,3))     //Devolverá -27
   escribir(mate.pot(2,4))      //Devolverá 16</code></pre>

----

mate.max\( \)
---------------
Este comando devuelve el más **alto valor** de una lista.

Este comando también trabaja con números **negativos**.

Este comando NO tiene cantidad máxima de parámetros, lo que significa que se puede hacer una comparación entre 2 a 1000 números si se desea.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.max(-4,-15,1,5,10,2))      //Devolverá 10</code></pre>

----

mate.min\( \)
---------------
Este comando devuelve el más **bajo valor** de una lista.

Este comando también trabaja con números **negativos**.

Este comando NO tiene cantidad máxima de parámetros, lo que significa que se puede hacer una comparación entre 2 a 1000 números si se desea.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.min(-20,1,5,-15,10,2))      //Devolverá -20</code></pre>

----

mate.raiz\( \)
---------------
Este comando devuelve la **raíz cuadrada** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.raiz(9))      //Devolverá 3
   escribir(mate.raiz(0))      //Devolverá 0
   escribir(mate.raiz(1))      //Devolverá 1
   escribir(mate.raiz(64))     //Devolverá 8
   escribir(mate.raiz(-9))     //Devolverá NaN</code></pre>

----

mate.raizc\( \)
---------------
Este comando devuelve la **raíz cúbica** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.raizc(6))      //Devolverá 1.817120592832139</code></pre>

----

mate.redondear\( \)
---------------------
Este comando **redondea** el número a su mas cercano entero.

Este comando también dispone de un alias **mate.rnd\( \)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.redondear(5.4))     //Devolverá 5
   escribir(mate.rnd(5.6)            //Devolverá 6</code></pre>

----

mate.sen\( \)
--------------
Este comando devuelve el **seno** de un número.

El comando **mate.sen\( \)** devuelve un valor entre **-1** y **1**, que representa el seno del parámetro asignado.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.sen(3))      //Devolverá 0.14112...
   escribir(mate.sen(-3))     //Devolverá -0.14112...
   escribir(mate.sen(0))      //Devolverá 0</code></pre>

----

mate.senh\( \)
---------------
Este comando devuelve el **seno hiperbólico** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.senh(1))     //Devolverá 1.17520...</code></pre>

----

mate.tan\( \)
--------------
Este comando devuelve la **tangente** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.tan(1))     //Devolverá 1.55740...</code></pre>

----

mate.tanh\( \)
---------------
Este comando devuelve la **tangente hiperbólica** de un número.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.tanh(1))     //Devolverá 0.76159...</code></pre>

----

mate.tau\( \)
--------------
Este comando devuelve el valor de **TAU**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.tau())     //Devolverá 6.283185307179586</code></pre>

----

mate.techo\( \)
----------------
A diferencia del comando **mate.piso\( \)**, el comando **mate.techo\( \)** redondea un número **hacia arriba** al entero más cercano.

Si el argumento pasado es un número entero, el valor NO se redondeará.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.techo(1.4))      //Devolverá 2
   escribir(mate.techo(0.60))     //Devolverá 1
   escribir(mate.techo(5))        //Devolverá 5
   escribir(mate.techo(5.1))      //Devolverá 6
   escribir(mate.techo(-5.1))     //Devolverá -5
   escribir(mate.techo(-5.9))     //Devolverá -5</code></pre>

----

mate.trunc\( \)
-----------------
Este comando devuelve la parte **entera truncada** de un número.

Este comando NO redondea el número al más cercado entero, sino **remueve su punto decimal**.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(mate.trunc(2.77))       //Devolverá 2
   escribir(mate.trunc(8.32))       //Devolverá 8
   escribir(mate.trunc(-99.29))     //Devolverá -99</code></pre>

----

.. Enlaces

.. _número de Euler: https://es.wikipedia.org/wiki/Número_e
