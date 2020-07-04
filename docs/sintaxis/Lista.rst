.. _listaLink:

.. meta::
   :description: Listas en Latino
   :keywords: manual, documentacion, latino, sintaxis, lista

===============
Lista (Arrays)
===============
Una lista es un tipo de colección. Es equivalente a lo que en otros lenguajes se conoce por arreglos o vectores. Las listas pueden contener cualquier tipo de dato: lógico, númerico, literal, cadena, listas, diccionarios. Crear una lista es tan sencillo como indicar entre corchetes y separados por comas los valores que queremos incluir en la lista.

.. raw:: html

   <pre><code class="language-latino line-numbers">#declaracion de listas
   numeros = [1, 2, 3, 4, 5]
   vacia = []</code></pre>

Podemos acceder a cada uno de los elementos de la lista escribiendo el nombre de la lista e indicando el índice del elemento entre corchetes []. Ten en cuenta que el índice del primer elemento de la lista es 0:

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(numeros[1])
   #salida: 2</code></pre>

También podemos utilizar este operador para modificar un elemento de la lista si lo colocamos en la parte izquierda de una asignación:

.. raw:: html

   <pre><code class="language-latino line-numbers">numeros[0] = 99
   escribir(numeros)
   #salida: [99, 2, 3, 4, 5]</code></pre>

Podemos utilizar también números negativos. Si se utiliza un número negativo como índice, esto se traduce en que el índice empieza a contar desde el final, hacia la izquierda; es decir, con [-1] accederíamos al último elemento de la lista, con [-2] al penúltimo, con [-3], al antepenúltimo, y así sucesivamente.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(numeros[-1])
   #salida: 5</code></pre>