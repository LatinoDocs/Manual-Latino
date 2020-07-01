.. meta::
   :description: Funciones en Latino
   :keywords: manual, documentacion, latino, sintaxis, funciones, funcion

============
Funciones
============
Una función es un bloque de código que realiza una tarea específica.

Una función se ejecuta cuando esta es invoca (llamada).

Una ventaja que propone crear y usar una función es la división de problemas complejos en pequeños componentes que hacen el programa mas fácil de entender y programar.

Cuando estamos programando y tenemos líneas de códigos que se repiten o necesitamos de ciertos códigos en más de una ocasión, la mejor forma de gestionar nuestro código es, creando funciones.

----

Sintaxis de función
--------------------
Las funciones se definen con la palabra clave de **funcion** o la forma corta **fun**, seguido por el **nombre de la función** y terminando con **paréntesis()**.

No puede existir más de una función con el mismo nombre.

Los nombres de funciones pueden contener letras, dígitos, subrayados y signos de dólar (las mismas reglas que las variables).

Los paréntesis pueden incluir nombres de parámetros separados por comas: (**parámetro1**, **parámetro2**, ...)

.. code-block:: latino
   :linenos:

   funcion nombreFuncion (argumento1, argumento2)
     #codigo
     retornar resultado
   fin

----

Invocar una función
--------------------
Para ejecutar el código dentro de una función primero hay que invocarla (llamar a la función).

Para llamar una función se hace escribiendo el **nombre de la función** y en paréntesis los parámetros que esta tenga (en caso de que haya alguno).

.. code-block:: latino
   :linenos:

   funcion hola()                        //Aquí creamos una función con el nombre de hola()
     escribir("Hola Mundo, Latino!")     //Aquí especificamos lo que queremos que la función haga, en este caso sería un mensaje de "Hola Mundo, Latino!"
   fin                                   //Se concluye la función

   hola()                                //aquí llamamos a la función a ser ejecutada y el código dentro de esta se ejecutara

----

Retornar función
-----------------
El retornar los valores de una función nos ayuda a poder procesar de forma independiente valores enviados a esta sin interrumpir nuestro código.

Para que nuestra función pueda retornar valores es necesario que esta tenga sus **parámetros asignados**.

En Latino se puede regresar el valor de una función con las palabras claves **regresar**, **retornar** o la forma corta **ret**. La estructura de una función es la siguiente:

.. code-block:: latino
   :linenos:

   funcion suma(a,b)               //creamos una función de nombre suma() y con dos parámetros los cuales serán a y b
     retornar a+b                  //asignamos el valor que deseamos devolver el cual será la suma de a+b
   fin

   resultado=suma(2,3)             //creamos una variable llamada resultado y en ella asignamos el nombre de la función la cual es suma() y le asignamos valores a los parámetros
   escribir(resultado)             //El resultado será 5

----

Funciones como variables
-------------------------
Las funciones se pueden usar de la misma manera que las variables, en todos los tipos de fórmulas, asignaciones y cálculos.

.. code-block:: latino
   :linenos:

   /*En este ejemplo primero
   crearemos una función la cual convertirá
   el valor de fahrenheit a celsius
   y posteriormente veremos cómo usar
   directamente una función en vez de una variable*/

   funcion convCelsius (fahrenheit)
     retornar (5/9) * (fahrenheit-32)
   fin

   //Aquí usamos una variable
   x = convCelsius(77)
   escribir("La temperatura es de "..x.." celsius")

   //Aquí usamos directamente la función
   escribir("La temperatura es de "..convCelsius(77).." celsius")

----

Parámetros de funciones
------------------------
Toda función tiene una **entrada** y una **salida** de datos.

Las salidas de datos se hacen cuando el código de la función se termina de ejecutar y también cuando usamos el comando **retornar**.

Para la entrada de datos en una función hacemos uso de los **parámetros**.

Los parámetros de una función son iguales que las variables con la diferencia que solo funcionan en la función en donde estén declaradas.

.. code-block:: latino
   :linenos:
   
   /*En este ejemplo creamos una función,
   a esta le enviamos el valor colectado por el comando leer()
   este valor es enviado a la función por medio de la variable usuario
   y es recibida en la función gracias al parámetro nombre*/

   funcion bienvenida(nombre)
     escribir ("Bienvenido "..nombre)
   fin

   escribir("Hola como te llamas?")
   usuario=leer()
   bienvenida(usuario)

----

Múltiples parámetros
---------------------
Una función puede recibir tantos parámetros como queramos.

Estos parámetros son separados por una **coma(,)**.

Al usar más de un parámetro, los valores enviados a la función tienen que estar en el mismo orden que los parámetros asignados en ésta.