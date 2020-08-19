.. _relacionalesLink:

.. meta::
   :description: Relacionales en Latino
   :keywords: manual, documentacion, latino, sintaxis, relacionales

=============
Relacionales
=============
En programación, un operador relacional verifica la relación entre dos operandos. Si la relación es verdadera, devuelve el valor **verdadero**; si la relación es falsa, devuelve el valor **falso**.

Los operadores relacionales se utilizan en la toma de decisiones y en los bucles (por su nombre en inglés).

+----------+---------------------------+
| Operador | Descripción               |
+==========+===========================+
| ==       | Igual que                 |
+----------+---------------------------+
| \!=      | No igual que              |
+----------+---------------------------+
| \>       | Mayor que                 |
+----------+---------------------------+
| \<       | Menor que                 |
+----------+---------------------------+
| \>=      | Mayor o igual que         |
+----------+---------------------------+
| \<=      | Menor o igual que         |
+----------+---------------------------+
| \~=      | RegEx (Expresión Regular) |
+----------+---------------------------+

.. container:: nota
   
   | Los *operadores relacionales* y los *operadores lógicos* son utilizados para probar si una operación es verdadera o falsa.

----

**Ejemplos:**

Para los siguientes ejemplos supondremos que la variable **x** tiene un valor de **5**

.. raw:: html
   
   <pre><code class="language-latino line-numbers">x = 5
   escribir(x==8)    //El resultado sería falso</code></pre>

+----------+-------------------+------------------+-----------+
| Operador | Descripción       | Comparativa      | Resultado |
+==========+===================+==================+===========+
| ==       | igual a           | escribir(x == 8) | falso     |
+----------+-------------------+------------------+-----------+
|          |                   | escribir(x == 5) | verdadero |
+----------+-------------------+------------------+-----------+
| \!=      | no igual          | escribir(x != 8) | verdadero |
+----------+-------------------+------------------+-----------+
|          |                   | escribir(x != 5) | falso     |
+----------+-------------------+------------------+-----------+
| \>       | mayor que         | escribir(x > 8)  | falso     |
+----------+-------------------+------------------+-----------+
| \<       | menor que         | escribir(x < 8)  | verdadero |
+----------+-------------------+------------------+-----------+
| \>=      | mayor ó igual que | escribir(x >= 8) | falso     |
+----------+-------------------+------------------+-----------+
| \<=      | menor ó igual que | escribir(x <= 8) | verdadero |
+----------+-------------------+------------------+-----------+

----

.. _opregexLink:

**Operador \~=**

Este operador hace uso de las expresiones regulares(regular expression) en Latino.

Una `expresión regular`_ (*regular expression* ó *RegEx*, por su nombre en Ingles) es una secuencia de caracteres y estas forman un patrón de búsqueda.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">/*
   El operador ~= utiliza las expresiones regulares
   en cadenas para hacer patrones de búsqueda.

   La condicional SI, devolverá:
   "x inicia con hola"
   */

   x = "hola mundo"
   
   si x ~= "^hola"
     escribir("x inicia con hola")
   sino
     escribir("x NO inicia con hola")
   fin</code></pre>

.. note:: Las **Expresiones Regulares** (RegEx) contienen un artículo dedicado a su uso en Latino el cual se puede encontrar :ref:`aquí <regexLink>`.


.. Enlaces

.. _expresión regular: https://es.wikipedia.org/wiki/Expresión_regular