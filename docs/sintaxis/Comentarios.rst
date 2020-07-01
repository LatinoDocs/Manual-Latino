.. meta::
   :description: Comentarios en Latino
   :keywords: manual, documentacion, latino, sintaxis, comentario

============
Comentarios
============
Como otros lenguajes de programación, Latino también dispone de comentarios. Estos comentarios se pueden usar para crear notas que ayuden a explicar algún código que tengamos escrito o también usarlo para prevenir la ejecución de alguna línea de código al momento de ejecutar el programa.

----

Comentarios de una línea simple
--------------------------------
Los comentarios de una línea simple pueden comenzar con un signo de **#** ó **//**.
Cualquier texto o código que este después de estos signos serán ignorados por Latino (No se ejecutaran).

En este ejemplo se hará uso del comentario de una línea antes de cada línea de código:

.. code-block:: latino
   :linenos:

   //Esta línea de código mostrara el mensaje Hola Mundo al ejecutar el programa
   escribir ("Hola Mundo")
   #La siguiente línea de código sumara los valores y su resultado se escribirá en pantalla
   escribir (5+5)

En este ejemplo se usa un comentario línea simple al final de cada línea para explicar el código:

.. code-block:: latino
   :linenos:

   x = 5            #Declaramos una variable con el nombre de X, y le hemos asignado un valor de 5
   y = x + 2        #Declaramos una variable con el nombre de Y, y le hemos asignado el valor de X más 2
   escribir (y)     //En esta linea de código escribiremos en pantalla el valor de Y el cual tiene el valor de X + 2

----

Comentarios de líneas múltiples
--------------------------------
Los comentarios de líneas múltiples comienzan con **/*** y terminan con ***/**. Cualquier texto o código que este dentro de estos signos serán ignorados por Latino (no se ejecutaran).

En este ejemplo se hará uso del comentario de líneas múltiples:

.. code-block:: latino
   :linenos:
   
   /*
   El siguiente código
   repite el mismo ejemplo que vimos hace un momento arriba
   con las mismas variables X y Y como variables para usar
   */

   x = 5
   y = x + 2
   escribir (y)

----

Usando comentarios para prevenir la ejecución de códigos:
----------------------------------------------------------
El uso de comentarios para prevenir la ejecución de una línea de código puede ser muy útil cuando estamos probando nuestro código.
Agregando los signos **#** ó **//** delante de cualquier línea de código, hará que esta única línea se vuelva invisible para el programa al momento de ejecutarlo.

En este ejemplo se hará uso del signo **//** para prevenir la ejecución de la primera linea de codigo:

.. code-block:: latino
   :linenos:
   
   //escribir ("Este código NO se ejecutara")
   escribir ("Este código SI se ejecutara")

En este ejemplo se preverá la ejecución de un bloque de código con los comentarios de líneas múltiples:

.. code-block:: latino
   :linenos:

   /*
   Todo este bloque de código al ser un comentario
   no se ejecutara al iniciar el programa
   
   x = 5
   y = x + 2
   escribir (y)
   */