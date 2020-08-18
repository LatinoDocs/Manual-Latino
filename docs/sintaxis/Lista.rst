.. _listaLink:

.. meta::
   :description: Listas en Latino
   :keywords: manual, documentacion, latino, sintaxis, lista

===============
Lista (Arrays)
===============
Las listas o arrays (también son conocidas como arreglos, matrices o vectores en otros lenguajes de programación) son variables que pueden almacenar **múltiples valores** al mismo tiempo y estos a su vez están organizados por **índice**.

Entre algunos de los tipos de datos que una lista puede simultáneamente almacenar pueden ser: lógicos, numéricos, cadenas, otras listas y/o diccionarios.

----

¿Cúando y/o por qué usar una lista?
------------------------------------
Una variable nos permite almacenar únicamente un tipo de dato en ella a la vez. Esto resulta ideal cuando se trabaja con operaciones simples pero no sería practico en grandes operaciones.

**Ejemplo:**

Si tenemos un grupo de artículos (una lista de marcas de carro, por ejemplo) y las almacenamos en variables, sería algo así:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carro1 = "Toyota"
   carro2 = "Ford"
   carro3 = "Peugeot"</code></pre>

Sin embargo, ¿qué pasaría si en vez de 3 marcas, tuviéramos 300 marcas y tuviéramos que buscar un valor en específico? Resultaría tedioso y poco practico tener que crear 300 variables con nombres distintos solo para almacenar un valor.

La solución sería usar una lista. Como se había explicado antes, una lista nos permiten almacenar varios valores en ella y acceder a ellos haciendo referencia a su número de índice.

----

Creación de una lista (array)
------------------------------
Las listas se definen (crean) entre **corchetes [ ]** y sus valores están separados por **comas**.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carros = ["Toyota", "Ford", "Peugeot"]</code></pre>

Las listas o array como vimos en el ejemplo anterior se pueden declarar en una sola línea, pero esto no es el único caso, también podemos declarar una lista en múltiples líneas de la siguiente manera:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carros = [
     "Toyota",
     "Ford",
     "Peugeot"
   ]</code></pre>

----

Acceder a los valores en una lista
-----------------------------------
Para acceder a los valores almacenados en una lista usamos su **número de índice**.

Estos números índices comienzan a contar desde el **número 0 (cero)** en adelante.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   A continuación definimos una lista
   y encima marcaremos su número de índice
   */

   //índice:    0        1         2 ...
   carros = ["Toyota", "Ford", "Peugeot"]
   escribir(carros[0])     //Devolverá Toyota</code></pre>

Índices con **números negativos**
++++++++++++++++++++++++++++++++++
Podemos utilizar también índices con **números negativos**.

La indexación negativa significa comenzar desde el final, -1 se refiere al último elemento, -2 se refiere al penúltimo elemento, -3 se refiere al antes penúltimo elemento, etc.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   A continuación definimos una lista
   y encima marcaremos su número de índice negativo
   */

   //índice:    0        -5       -4         -3        -2         -1
   carros = ["Toyota", "Ford", "Peugeot", "Nissan", "Subaru", "Chevrolet"]
   escribir(carros[-1])     //Devolverá Chevrolet</code></pre>

Mostrar carácter de un elemento
++++++++++++++++++++++++++++++++
Anteriormente vimos que usando el número de índice podemos acceder al valor almacenado en una lista, pero también podemos únicamente mostrar un solo carácter de una lista usando doble índice.

Esta propiedad resulta bastante útil cuando se esta buscando palabras con letras específicas o carácteres específicos en los elementos de una lista.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   El orden de los índices para buscar un carácter
   empezaría desde el número cero (0)

   Si quisiéramos mostrar la segunda "t" de la marca Toyota
   este valor sería el no. 4 ya que se empezaría a contar desde cero (0)
   */

   carros = ["Toyota", "Ford", "Peugeot"]
   escribir(carros[0][4])     //Devolverá la segunda "t" de Toyota
   escribir(carros[2][3])     //Devolverá la "g" de Peugeot</code></pre>

----

Agregar un nuevo elemento
--------------------------
Para agregar un nuevo elemento a la lista solo basta con escribir el nombre de la lista más el nuevo número de índice.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carro = [
      "Toyota",           //Este sería el índice #0
      "Camry",            //Este sería el índice #1
   ]
   
   carro[2] = 2011        //Creamos un nuevo índice #2 y le asignamos el valor de "2011"
   escribir(carro[2])     //Devolverá 2011</code></pre>

----

Cambiar valor de elemento
--------------------------
Se puede cambiar el valor de un elemento con solo hacer referencia a la misma:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carros = [
     "Toyota",
     "Ford",
     "Peugeot"
   ]
   
   carros[1] = "Ferrari"
   escribir(carros[1])     //Devolverá Ferrari</code></pre>

----

Acceder a todos los valores de una lista
-----------------------------------------
Para imprimir todos los valores de una lista solo hacemos mención del nombre de la lista **sin número de índice**.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carros = [
     "Toyota",
     "Ford",
     "Peugeot"
   ]
   
   escribir(carros)     //Devolverá ["Toyota","Ford","Peugeot"]</code></pre>

----

Las listas pueden ser objetos
------------------------------
Las variables pueden ser objetos, y las listas son un tipo de variables. Debido a esto se puede almacenar diversos tipos de datos en una lista.

Las listas pueden almacenar **funciones**, **otras listas** o **diccionarios** si así se desea.

Anidar una función en una lista
++++++++++++++++++++++++++++++++
.. raw:: html
   
   <pre><code class="language-latino line-numbers">funcion miCarro()
     retorno carro[0]..", "..carro[1]
   fin

   carro = [
      "Toyota",
      "Camry",
      "2011"
   ]
   
   carro[3] = miCarro()   //Agregamos la función en un nuevo índice de la lista
   escribir(carro[3])     //Devolverá Toyota, Camry</code></pre>

Anidar otras listas
++++++++++++++++++++
La manera de llamar a una **sub-lista** de una lista es de la misma manera en la que se accede a los **carácteres de un elemento** que explicamos unos puntos más arriba de este articulo.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carros = [
      "Toyota",            //Este sería el índice 0
      "Ford",              //Este sería el índice 1
      "Peugeot"            //Este sería el índice 2
   ]

   modelos = [
      "Camry",
      "Fiesta",
      "206"
   ]
   
   carros[3] = modelos     //Agregamos la lista modelos en un nuevo índice
   escribir(carros[3][1])   //Devolverá Fiesta</code></pre>

Anidar un diccionario a una lista
+++++++++++++++++++++++++++++++++++
Si tenemos un diccionario anidado en una lista, para llamar un elemento del diccionario, escribimos el nombre de la lista con el número de índice en donde se encuentra el diccionario más la propiedad del diccionario:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">//Creación de un diccionario
   region = {
     "ciudad1" : "Santiago",
     "ciudad2" : "Bayamón",
     "ciudad3" : "Las Tunas"
   }
   
   //Creación de una lista
   pais = [
      "Santo Domingo",
      "Puerto Rico",
      "Cuba"
   ]
   
   pais[3] = region              //Agregamos el diccionario a la lista en un nuevo índice
   escribir(pais[3].ciudad1)     //Devolverá Santiago</code></pre>
