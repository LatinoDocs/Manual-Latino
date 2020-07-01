.. meta::
   :description: Diccionarios en Latino
   :keywords: manual, documentacion, latino, sintaxis, diccionario, array

======================
Diccionarios (Arrays)
======================
Los diccionarios, también llamados matrices asociativas, deben su nombre a que son colecciones que relacionan una clave y un valor, entre llaves y separado el valor de la clave con dos puntos.

.. code-block:: latino
   :linenos:

   #Diccionario de personajes y actores:
   actores = { "Chilindrina": "Maria Antonieta de las Nieves",
        "El chavo del 8": "Roberto Gomez Bolaños",
        "Tres patines": "Leopoldo Fernandez" }


El primer valor se trata de la clave y el segundo del valor asociado a la clave. Como clave usamos cadenas, esto es así porque los diccionarios se implementan como tablas hash, y a la hora de introducir un nuevo par clave-valor en el diccionario se calcula el hash de la clave para después poder encontrar la entrada correspondiente rápidamente. Si se modificara el objeto clave después de haber sido introducido en el diccionario, evidentemente, su hash también cambiaría y no podría ser encontrado. La diferencia principal entre los diccionarios y las listas es que a los valores almacenados en un diccionario se les accede no por su índice, porque de hecho no tienen orden, sino por su clave, utilizando corchetes [].

.. code-block:: latino
   :linenos:

   escribir(actores["Chilindrina"])
   #salida: Maria Antonieta de las Nieves

Al igual que en listas también se puede utilizar corchetes para reasignar valores.


.. code-block:: latino
   :linenos:

   actores["Chilindrina"] = "Maria Antonieta"
   escribir(actores["Chilindrina"])
   #salida: Maria Antonieta