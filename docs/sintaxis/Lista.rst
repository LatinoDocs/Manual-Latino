.. meta::
   :description: Listas en Latino
   :keywords: manual, documentacion, latino, sintaxis, lista

======
Lista
======
Una lista es un tipo de colección. Es equivalente a lo que en otros lenguajes se conoce por arreglos o vectores. Las listas pueden contener cualquier tipo de dato: lógico, númerico, literal, cadena, listas, diccionarios. Crear una lista es tan sencillo como indicar entre corchetes y separados por comas los valores que queremos incluir en la lista.

.. code-block:: latino
   :linenos:

   #declaracion de listas
   numeros = [1, 2, 3, 4, 5]
   vacia = []

Podemos acceder a cada uno de los elementos de la lista escribiendo el nombre de la lista e indicando el índice del elemento entre corchetes []. Ten en cuenta que el índice del primer elemento de la lista es 0:

.. code-block:: latino
   :linenos:

   escribir(numeros[1])
   #salida: 2

También podemos utilizar este operador para modificar un elemento de la lista si lo colocamos en la parte izquierda de una asignación:

.. code-block:: latino
   :linenos:

   numeros[0] = 99
   escribir(numeros)
   #salida: [99, 2, 3, 4, 5]

Podemos utilizar también números negativos. Si se utiliza un número negativo como índice, esto se traduce en que el índice empieza a contar desde el final, hacia la izquierda; es decir, con [-1] accederíamos al último elemento de la lista, con [-2] al penúltimo, con [-3], al antepenúltimo, y así sucesivamente.

.. code-block:: latino
   :linenos:

   escribir(numeros[-1])
   #salida: 5