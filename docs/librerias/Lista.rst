.. meta::
   :description: Librería de listas en Latino
   :keywords: manual, documentacion, latino, librerias, lib, listas

=============
Lib "lista"
=============
La librería **lista** contiene las funciones para el manejo de :ref:`lista <listaLink>` en Latino.

**Lista de comando**

+----------------------+------------+--------------------------------------------------------+
| Comando              | Parámetros | Descripción                                            |
+======================+============+========================================================+
| agregar\( \)         | 2          | Agrega un elemento al final de la lista                |
+----------------------+------------+--------------------------------------------------------+
| comparar\( \)        | 2          | Comprueba el orden y tamaño de letras de los elementos |
+----------------------+------------+--------------------------------------------------------+
| contiene\( \)        | 2          | Devuelve verdadero si el elemento existe en la lista   |
+----------------------+------------+--------------------------------------------------------+
| crear\( \)           | 1          | Crea una lista con el nombre especificado              |
+----------------------+------------+--------------------------------------------------------+
| eliminar_indice\( \) | 2          | Elimina un elemento de la lista por posición           |
+----------------------+------------+--------------------------------------------------------+
| eliminar\( \)        | 2          | Elimina solo la primera coincidencia de la lista       |
+----------------------+------------+--------------------------------------------------------+
| encontrar\( \)       | 2          | Devuelve el índice del elemento buscado                |
+----------------------+            |                                                        |
| indice\( \)          |            |                                                        |
+----------------------+------------+--------------------------------------------------------+
| extender\( \)        | 2          | Agrega los elementos de una lista en otra lista        |
+----------------------+------------+--------------------------------------------------------+
| invertir\( \)        | 1          | Invierte el orden de la lista                          |
+----------------------+------------+--------------------------------------------------------+
| longitud\( \)        | 1          | Devuelve la cantidad de elementos de una lista         |
+----------------------+------------+--------------------------------------------------------+

----

lista.agregar\( \)
---------------------
Para agregar un nuevo elemento a la lista usamos el comando **lista.agregar\(\ )**.

Este comando agrega un nuevo elemento al final de la lista.

.. raw:: html

   <pre><code class="language-latino line-numbers">carros = ["Toyota", "Ford", "Peugeot"]
   lista.agregar(carros, "Honda")           //Agregará "Honda" al final de la lista
   escribir(carros)                         //Imprimirá ["Toyota", "Ford", "Peugeot", "Honda"]</code></pre>

----

lista.comparar\( \)
--------------------
Con este comando podremos **comparar la longitud** de dos listas.

Este comando devolverá los siguientes valor según el resultado:

* -1 si la lista original es menor.
*  1 si la lista original es mayor.
*  0 si ambas listas son iguales. 

**Ejemplo de sintaxis**

.. code-block:: bash
   
   lista.comparar(listaOriginal, listaAComparar)

.. raw:: html

   <pre><code class="language-latino line-numbers">lista1 = ["Hola", "mundo"]
   lista2 = ["Mundo", "Latino"]
   escribir(lista.comparar(lista1, lista2))
   escribir(lista.comparar(lista2, lista1))
   escribir(lista.comparar(lista2, lista2))     //Devolverá cero"0", ya que la lista son idénticas</code></pre>

----

lista.contiene\( \)
---------------------
Este comando nos permite comprobar si un elemento **existe en la lista**.

Este comando es sensible a las mayúsculas y minúsculas.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo"]
   escribir(lista.contiene(mensaje, "Latino"))     //Devolverá Falso</code></pre>

----

lista.crear\( \)
------------------
Este comando nos permite crear una lista asignando la **cantidad de elementos** que esta tendrá.

Al crear una lista con este comando, cada elemento tendrá un valor **nulo** los cuales podrán ser modificados después.

Este comando admite un valor número positivo, de ser asignado cualquier número negativo, esta creará una lista vacía.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   Al crear una lista con este comando,
   sus elementos serán nulos
   */
   
   x = lista.crear(3)     //Creará una lista con 3 elementos nulos
   escribir(x)            //Devolverá [nulo, nulo, nulo]
   
   y = lista.crear(-1)    //Creará una lista con cero elementos
   escribir(y)            //Devolverá [ ]</code></pre>

----

lista.eliminar_indice\( \)
----------------------------
Este comando nos permite **eliminar** un elemento de la lista asignada por medio de su **número de índice**.

En una lista los elementos de esta están organizados por índices y estos índices inicial desde el número **cero ( 0 )** en adelante.

Este comando NO admite números negativos.

.. raw:: html

   <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo", "Latino", "es lo máximo"]
   lista.eliminar_indice(mensaje, 3)     //Aquí asignamos la librería y el índice del elemento a eliminar
   escribir(mensaje)                     //Devolverá ["Hola", "mundo", "Latino"]</code></pre>

----

lista.eliminar\( \)
--------------------
A diferencia de **lista.eliminar_indice\( \)** el comando **lista.eliminar\( \)** elimina la primera coincidencia de la lista.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   Elimina solo la primera coincidencia.
   Para eliminar las demás coincidencias
   se tendrá que repetir el código.
   */
   
   mensaje = ["hola", "Hola", "Hola", "xHola"]
   
   lista.eliminar(mensaje, "Hola")     //Eliminará la primera coincidencia
   escribir(mensaje)                   //Devolverá ["hola", "Hola", "xHola"]
   
   lista.eliminar(mensaje, "Hola")     //Eliminará el segundo "Hola"
   escribir(mensaje)                   //Devolverá ["hola", "xHola"]</code></pre>

----

lista.indice\( \)
------------------
El comando **lista.indice\( \)** también dispone de un alias el cual es **lista.encontrar\( \)**. Este comando nos permite **buscar** un elemento por su nombre en una lista y nos devolverá su **número de índice**.

Este comando es sensible a las mayúsculas y minúsculas.

Si NO encuentra el nombre del elemento a buscar, entonces regresara **-1**.

.. raw:: html

   <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo", "Latino"]
   escribir(lista.indice(mensaje, "latino"))        //Devolverá -1, ya que latino esta en mayúsculas
   escribir(lista.encontrar(mensaje, "Latino"))     //Devolverá 2, ya que el índice comienza a contar desde el número cero</code></pre>

----

lista.extender\( \)
---------------------
El comando **lista.extender\( \)** copiará los elementos de una lista para ser insertados al final de otra lista deseada.

**Ejemplo de sintaxis**

.. code-block:: bash
   
   lista.extender("ListaAExtender", "ListaACopiar")

.. raw:: html

   <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo"]
   copiar = ["Latino", "es lo máximo!"]
   lista.extender(mensaje, copiar)
   escribir(mensaje)                      //Devolverá ["Hola", "mundo", "Latino", "es lo maximo!"</code></pre>

----

lista.invertir\( \)
---------------------
Para invertir el orden de una lista, utilizamos el comando **lista.invertir\( \)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">carros = ["Toyota", "Ford", "Peugeot", "Nissan", "Subaru", "Chevrolet"]
   escribir(lista.invertir(carros))     //Devolverá la lista en orden invertido</code></pre>

----

lista.longitud\( \)
--------------------
Este comando devuelve la cantidad de elementos de una lista.

.. raw:: html

   <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo", "Latino"]
   escribir(lista.longitud(mensaje))     //Devolverá "3"</code></pre>

.. ----

.. lista.insertar\( \)
.. --------------------
.. Con este comando podemos insertar un elementos en cualquier indice deseado de una lista.

.. **Ejemplo de sintaxis**

.. .. code-block:: bash
   
..    lista.insertar(listaOriginal, elementoNuevo, indice)

.. .. raw:: html

..    <pre><code class="language-latino line-numbers">mensaje = ["Hola", "mundo", "Latino"]
..    lista.insertar(mensaje, "Lenguaje", 2)
..    escribir(mensaje)                          //Devolverá ["Hola", "mundo", "Lenguaje", "Latino"]
..    error, escribe cfun en ves de la cadena deseada</code></pre>

.. | insertar\( \)        | 3          | Inserta un nuevo elemento a una lista                  |
.. +----------------------+------------+--------------------------------------------------------+

.. ----

.. lista.concatenar\( \)
.. -----------------------
.. Con este comando podremos unir dos listas en una nueva variable para ser utlizada despues.

.. .. raw:: html
   
..    <pre><code class="language-latino line-numbers">lista1 = ["Hola", "mundo"]
..    lista2 = ["Como", "estan?"]
..    lista3 = lista.concatenar(lista1, lista2)
..    escribir(lista3)</code></pre>

.. | concatenar\( \)      | 2          | Uné todos los elementos de dos listas en una sola      |
.. +----------------------+------------+--------------------------------------------------------+

.. error:: Por el momento en Latino 1.2.0 en la librería **lista** funciones como **lista.insertar\( \)** y **lista.concatenar\( \)** no funcionan apropiadamente. Espere a futuros lanzamientos en Latino para ver sus novedades.
