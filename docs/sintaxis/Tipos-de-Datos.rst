.. meta::
   :description: Tipos de datos en Latino
   :keywords: manual, documentacion, latino, sintaxis, datos

===============
Tipos de Datos
===============
Las computadoras a diferencia de los seres humanos, no reconocen ni saben la diferencia entre "1234" y "abcd", por esta razón en programación se definieron los **tipos de datos**.

Un tipo de dato es una clasificación que define el valor asociado a una variable u objeto. Por lo general estos tipos de datos suelen estar almacenados en una variable, ya que estas pueden almacenar tipos de datos como: Numéricos, alfanuméricos, objetos, cadenas, entre otros.

A continuación se presenta una tabla con ejemplos de algunas clasificaciones para los tipos de datos en programación tanto para Latino y C.

+--------------------+--------------------+--------------------------+
| Latino             | Tipo de datos en C | Ejemplos                 |
+====================+====================+==========================+
| lógico             | bool               | verdadero ó falso        |
+--------------------+--------------------+--------------------------+
| numérico (decimal) | double             | 1.69549875               |
+--------------------+--------------------+--------------------------+
| cadena             | char*              | letras                   |
+--------------------+--------------------+--------------------------+
| lista (matriz)     | array              | agr1, agr2, agr3...      |
+--------------------+--------------------+--------------------------+
| diccionario        | struct             | \"propiedad\": \"valor\" |
+--------------------+--------------------+--------------------------+
| nulo               | void               | vacio (no data)          |
+--------------------+--------------------+--------------------------+

----

Tipos de datos: Lógico
------------------------
Los tipos de datos lógicos (o booleans por su nombre en inglés) solo pueden tener dos valores: **verdadero** o **falso**.

.. raw:: html

   <pre><code class="language-latino line-numbers">//Es X igual a Y o será X igual a Z

   x = 5
   y = 5
   z = 6
   escribir(x == y)       // Devolverá un valor verdadero
   escribir(x == z)       // Devolverá un valor falso</code></pre>

----

Tipos de datos: Numérico
--------------------------
Los tipos de datos numéricos son números asignados a una variable que se pueden escribir con o sin **punto decimal**.

.. raw:: html

   <pre><code class="language-latino line-numbers">num1 = 34.00
   num2 = 34</code></pre>

.. note:: Tambien se pueden escribir en **notación científica**, ejemplo:
   
   .. raw:: html

      x = 7 x 10 <sup>2</sup>  ||  y = 4.9 x 10 <sup>9</sup>  ||  z = 5.5 x 10 <sup>-3</sup>  ||  n = 2.56 × 10 <sup>-6</sup>
   
   .. raw:: html

      <pre><code class="language-latino line-numbers">x = (7*10^2)        //Devolverá 700
      y = (4.9*10^9)      //Devolverá 4,900,000,000
      z = (5.5*10^-3)     //Devolverá 0.0055
      n = (2.56*10^-6)    //Devolverá 2.56e-06</code></pre>

----

Tipos de datos: Cadena
-----------------------
Los tipos de datos alfanuméricos (o strings por su nombre en inglés) son líneas de textos escritas entre **comillas simples o dobles**.
Ejemplo \"Bill Gates\" \'Steve Jobs\'.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona1 = "Bill Gates"                //Uso de comillas dobles
   persona2 = 'Steve Jobs'                //Uso de comillas simples
   
   respuesta1 = "Su nombre es 'Bill'"     //Uso de las comillas simples dentro de comillas dobles
   respuesta2 = 'Su nombre es "Steve"'    //Uso de las comillas dobles dentro de comillas simples</code></pre>

----

Tipos de datos: Lista
----------------------
Los tipos de datos de listas o matrices se escriben entre **corchetes** y sus elementos están separados por **comas**.

Las matrices son indexadas desde el número 0 (Cero) en adelante. Lo que significa que el primer elemento es [0], y el segundo es [1], y así sucesivamente.

.. raw:: html

   <pre><code class="language-latino line-numbers">carro = ["Nissan", "Volvo", "BMW"]
   escribir(carro[0])     //Devolverá Nissan</code></pre>

----

Tipos de datos: Diccionario
----------------------------
Los tipos de datos de diccionarios u objetos se escriben entre **llaves {}** y sus propiedades se escriben **\"propiedad\" : \"Valor\"** y cada propiedad con su valor están separadas por **comas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo se creara un diccionario
   con algunas propiedades para luego ser escritas en pantalla
   */
   
   persona =  {"nombre": "Melvin", "apellido": "Guerrero", "edad": 50, "etimología": "Latino"}
   escribir(persona.nombre)     //Devolverá Melvin</code></pre>

----

Nulo
-----
En Latino los tipos de datos **Nulos** son nada. Se supone que es algo que no existe.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">persona = nulo
   escribir(persona)     //Devolverá un valor nulo</code></pre>

En Latino una variable con valor nulo **no es igual** a una variable con valor indefinido.

Las variables con valor indefinido son imposibles de declarar(crear) en Latino ya que las variables requieren ser asignadas a un valor al momento de estas ser declaradas, de lo contrario Latino solo las omitirá.

De todas maneras si se pueden llegar a crear variables con valor **vacío** de la siguiente manera:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">persona = ""
   escribir(persona)     //Devolverá un espacio en blanco</code></pre>

Diferencia entre un valor vacío y un nulo
+++++++++++++++++++++++++++++++++++++++++++
Un valor vacío y un valor nulo en primera instancia puede que aparenten ser lo mismo ya que nos permite asignar un valor no definido a una variable, pero internamente son totalmente distintas.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = ""              //Este valor al llevar comillas es una cadena
   y = nulo            //Este valor es nulo
   escribir(x == y)    //Devolverá un valor falso</code></pre>

Operador "tipo()"
++++++++++++++++++
En Latino podemos usar el operador **tipo()** para saber el tipo de dato que lleva un objeto o una variable.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = ""
   y = nulo
   escribir(tipo(x))     //Devolverá un valor de cadena
   escribir(tipo(y))     //Devolverá un valor nulo</code></pre>