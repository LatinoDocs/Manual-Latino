.. meta::
   :description: Tipos de datos en Latino
   :keywords: manual, documentacion, latino, sintaxis, datos

===============
Tipos de Datos
===============
En Latino los **tipos de datos** hacen referencia al tipo o tamaña de datos asociados a una **variable** o una **función**.

En programación estos tipos de datos suelen estar almacenados en una variable, ya que estas pueden almacenar tipos de datos como: Numéricos, alfanuméricos, objetos, cadenas, entre otros.

+------------------+--------------------+
| Latino           | Tipo de datos en C |
+==================+====================+
| lógico           | bool               |
+------------------+--------------------+
| numérico         | double             |
+------------------+--------------------+
| cadena o literal | char*              |
+------------------+--------------------+
| lista (arreglo)  | struct             |
+------------------+--------------------+
| diccionario      | struct             |
+------------------+--------------------+

----

Tipos de datos: Lógicos
------------------------
Los tipos de datos lógicos (o booleans por su nombre en inglés) solo pueden tener dos valores: **verdadero** o **falso**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = 5
   y = 5
   z = 6
   escribir(x == y)       // devolverá un valor verdadero
   escribir(x == z)       // Devolverá un valor falso</code></pre>