.. meta::
   :description: Librería de sistema en Latino
   :keywords: manual, documentacion, latino, librerias, lib, sis, sistema

===========
Lib "sis"
===========
La librería **sis** contiene funciones que nos permitirán operar con nuestro sistema desde Latino.

**Lista de comando**

+----------------+------------+--------------------------------------------------------------+
| Comando        | Parámetros | Descripción                                                  |
+================+============+==============================================================+
| dormir\( \)    | 1          | Detiene el sistema por segundos                              |
+----------------+------------+--------------------------------------------------------------+
| ejecutar\( \)  | 1          | Ejecuta un comando de la consola desde latino                |
+----------------+------------+--------------------------------------------------------------+
| fecha\( \)     | 1          | Imprime la fecha y hora del sistema (cadena)                 |
+----------------+------------+--------------------------------------------------------------+
| salir\( \)     | 0          | Termina la ejecución de latino                               |
+----------------+------------+--------------------------------------------------------------+
| cwd\( \)       | 0          | Imprime la ruta de donde se está ejecutando Latino           |
+----------------+------------+--------------------------------------------------------------+
| iraxy\( \)     | 2          | Mueve el cursor de la consola a una nueva posición           |
+----------------+------------+--------------------------------------------------------------+
| tiempo\( \)    | 2          | Muestra el año, mes, hora, min, y seg de la maquina local    |
+----------------+------------+--------------------------------------------------------------+
| usuario\( \)   | 0          | Devuelve el nombre del usuario activo del sistema            |
+----------------+------------+--------------------------------------------------------------+
| operativo\( \) | 1          | Devuleve el sistema operativo en el que se ejecuta           |
+----------------+            |                                                              |
| op\( \)        |            |                                                              |
+----------------+------------+--------------------------------------------------------------+

----

sis.dormir\( \)
-----------------
Este comando **detiene la ejecución del código** por la cantidad de segundos signados.

Es importante recalcar que este comando admite **segundos** y NO milisegundos.

.. raw:: html

   <pre><code class="language-latino line-numbers">sis.dormir(5)             //Detendar la ejecución del código por 5 segundos
   escribir("Hola mundo)     //Escribira el mensage despues de pasar el tiempo asignado</code></pre>

----

sis.ejecutar\( \)
-------------------
Con este comando podemos efectuar **comandos nativos de la consola** en el que estamos.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Este comando escribirá
   "Hola mundo" en la consola
   */
   
   sis.ejecutar("echo Hola mundo")</code></pre>

.. ----

.. sis.pipe\( \)
.. ---------------

.. .. raw:: html

..    <pre><code class="language-latino line-numbers"></code></pre>


.. | pipe\( \)      | 1          | Almacena la salida del comando de la consola en una variable |
.. +----------------+------------+--------------------------------------------------------------+

----

sis.fecha\( \)
----------------
Este comando nos permite obtener la **fecha** del equipo o maquina local en donde Latino se está ejecutado.

los comando a utilizar son los siguientes:

+----------+-----------------------------------+
| Comandos | Descripción                       |
+==========+===================================+
| seg      | Devuelve los segundos             |
+----------+-----------------------------------+
| min      | Devuelve los minutos              |
+----------+-----------------------------------+
| hora     | Devuelve las horas (hora militar) |
+----------+-----------------------------------+
| mes      | Devuelve el mes                   |
+----------+-----------------------------------+
| año      | Devuelve el año                   |
+----------+-----------------------------------+
| d_sem    | Devuelve el día de la semana      |
+----------+-----------------------------------+
| d_mes    | Devuelve el día del mes           |
+----------+-----------------------------------+
| d_año    | Devuelve el día del año           |
+----------+-----------------------------------+
| estacion | Devuelve la estación del año      |
+----------+-----------------------------------+

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(sis.fecha("hora"))     //Devolverá las horas EJ. 17 horas</code></pre>

----

.. _sisSalirLink:

sis.salir\( \)
----------------
Con este comando podemos **cerrar o terminar** la ejecución de Latino.

Este comando es similar al atajo de teclado de consola explicado :ref:`aquí <atajoConsolaLink>`.

.. raw:: html

   <pre><code class="language-latino line-numbers">sis.salir()</code></pre>

----

sis.cwd\( \)
-------------
Imprime la **ruta** en donde Latino esta siendo ejecutado.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(sis.cwd())</code></pre>

----

sis.iraxy\( \)
----------------
Con este comando podemos **mover** el cursor de texto a cualquier parte de la ventana.

Este comando es similar al comando **gotoxy\( \)** en C.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   sis.iraxy(valorHorizontal, valorVertical)

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   */
   
   escribir("Ente su número en la caja
   +----------+
   |          |
   +----------+")
   sis.iraxy(2,3)     //Moverá el cursor al sitio deseado
   x = leer()</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **sis**, la función **sis.iraxy()** no funciona en MS-Windows. Espere a futuros lanzamientos de Latino para ver sus novedades.


----

sis.tiempo\( \)
-----------------
A diferencia del comando **sis.fecha\( \)**, el comando **sis.tiempo\( \)** nos permite tener un mayor control de las fechas y horas.

Este comando es similar a la librería **datetime** en python.

+---------+-------------------------------------------------------------------------------+
| Comando | Descripción                                                                   |
+=========+===============================================================================+
| \%a     | Nombre del día de la semana abreviado                                         |
+---------+-------------------------------------------------------------------------------+
| \%A     | Nombre del día de la semana completo                                          |
+---------+-------------------------------------------------------------------------------+
| \%w     | Día de la semana en números del 0-6 (0 es Domingo)                            |
+---------+-------------------------------------------------------------------------------+
| \%d     | Día del mes                                                                   |
+---------+-------------------------------------------------------------------------------+
| \%b     | Nombre del mes abreviado                                                      |
+---------+-------------------------------------------------------------------------------+
| \%B     | Nombre del mes completo                                                       |
+---------+-------------------------------------------------------------------------------+
| \%m     | Mes en números                                                                |
+---------+-------------------------------------------------------------------------------+
| \%y     | Año abreviado                                                                 |
+---------+-------------------------------------------------------------------------------+
| \%Y     | Año completo                                                                  |
+---------+-------------------------------------------------------------------------------+
| \%H     | Horas (00-23)                                                                 |
+---------+-------------------------------------------------------------------------------+
| \%I     | Horas (00-12)                                                                 |
+---------+-------------------------------------------------------------------------------+
| \%p     | AM/PM                                                                         |
+---------+-------------------------------------------------------------------------------+
| \%M     | Minutos (00-59)                                                               |
+---------+-------------------------------------------------------------------------------+
| \%S     | Segundos (00-59)                                                              |
+---------+-------------------------------------------------------------------------------+
| \%z     | UTC offset                                                                    |
+---------+-------------------------------------------------------------------------------+
| \%Z     | Zona horaria (timezone)                                                       |
+---------+-------------------------------------------------------------------------------+
| \%j     | Número del día del año (001-366)                                              |
+---------+-------------------------------------------------------------------------------+
| \%U     | Números de la semana del año (00-53, Domingo como el primer día de la semana) |
+---------+-------------------------------------------------------------------------------+
| \%W     | Números de la semana del año (00-53, Lunes como el primer día de la semana)   |
+---------+-------------------------------------------------------------------------------+
| \%c     | Fecha y el hora de la maquina local                                           |
+---------+-------------------------------------------------------------------------------+
| \%x     | Fecha de la maquina local                                                     |
+---------+-------------------------------------------------------------------------------+
| \%X     | Hora de la maquina local                                                      |
+---------+-------------------------------------------------------------------------------+
| \%\%    | Devuelve el carácter de \%                                                    |
+---------+-------------------------------------------------------------------------------+

.. | \%f     | Devuelve los microsegundos

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(sis.tiempo("%c"))     //Devolverá la fecha y hora actual</code></pre>

----

sis.usuario\( \)
------------------
Este comando obtener el **nombre del usuario** activo en el sistema.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(sis.usuario())</code></pre>

----

sis.operativo\( \)
--------------------
El comando **operativo** también disponde de una abreviación **op**.

Ambos comandos retornar el nombre del **sistema operativo** es en el que Latino esta siendo ejecutado.

Estes comando solo admite los siguientes comandos (en mayusculas):

* **WIN32** : para MS-Windows
* **APPLE** : para macOS-X
* **LINIX** : para Linux

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   Esta operación escribirá un mensaje personalizado
   dependiendo del sistema operativo en donde sea ejecutado
   */
   
   si sis.op("WIN32")
       escribir("Windows-XP 4ever")
   osi sis.operativo("APPLE")
       escribir("Thing Different")
   osi sis.op("LINUX")
       escribir("Linux for Humand")
   sino
       escribir("El sistema no es reconosido por Latino")
   fin</code></pre>

.. error:: Por el momento en Latino 1.2.0 en la librería **sis**, las funciones **sis.pipe\( \)**, **sis.avisar\( \)** y **sis.iraxy\( \)** no funcionan correctamente. Espere a futuros lanzamientos de Latino para ver sus novedades.
