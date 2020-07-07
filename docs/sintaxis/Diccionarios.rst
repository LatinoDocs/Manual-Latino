.. meta::
   :description: Diccionarios en Latino
   :keywords: manual, documentacion, latino, sintaxis, diccionario, array

========================
Diccionarios (Objetos)
========================
Los diccionarios u objetos, también son llamados **matrices asociativas**, esto deben su nombre a que son colecciones que relacionan una **propiedad (o llave)** a un valor.

Las :ref:`listas (arrays) <listaLink>` almacenan sus valores organizados por índeces, pero este no es el caso de los diccionarios los cuales almacenan sus valores utilizando **corchetes [ ]**.

Los diccionarios son una colección de valores almacenados **sin orden** y **sin índeces**. Esto es así porque los diccionarios se implementan como `tablas hash`_, y a la hora de introducir una nueva propiedad (llave) en el diccionario se calcula el hash de la llave para después poder encontrar la entrada correspondiente rápidamente. Si se modificara su propiedad después de haber sido introducida en el diccionario, evidentemente, su hash también cambiaría y no podría ser encontrado.

Los diccionarios u objetos se declaran (crean) entre **llaves { }** y sus propiedades se escriben **\"propiedad\" : \"Valor\"** y cada propiedad con su valor están separadas por **comas**.

.. raw:: html

   <pre><code class="language-latino line-numbers">/*
   En este ejemplo se creara un diccionario
   con algunas propiedades para luego ser escritas en pantalla
   */
   
   persona = {"nombre": "Melvin", "apellido": "Guerrero", "edad": 50, "etimología": "Latino"}
   escribir(persona.nombre)     //Devolverá Melvin</code></pre>

En el ejemplo anterior se puede apreciar que los diccionarios realmente son **variables**, pero estas almacenan una mayor cantidad de valores.

----

Definir un diccionario
-----------------------
Los diccionarios u objetos como vimos en el ejemplo anterior se pueden declarar en una sola línea, pero esto no es el único caso, también podemos declarar un diccionario en múltiples líneas de la siguiente manera:

Declaración de un diccionario en una sola línea:

.. raw:: html

   <pre><code class="language-latino line-numbers">carro = {"marca":"Toyota", "modelo":"Camry", "anio":2011, "color":"Blanco"}</code></pre>

Declaración de un diccionario en múltiples líneas:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carro = {
     "marca"  : "Toyota",
     "modelo" : "Camry",
     "anio"   : 2011,
     "color"  : "Blanco"
   }</code></pre>

----

Propiedades de un diccionario
------------------------------
En programación al conjunto de **llave:valor** se les llaman propiedades.

+-------------------+--------------------+
| Propiedad (llave) | Valor de propiedad |
+===================+====================+
| marca             | Toyota             |
+-------------------+--------------------+
| modelo            | Camry              |
+-------------------+--------------------+
| anio              | 2011               |
+-------------------+--------------------+
| color             | Blanco             |
+-------------------+--------------------+

----

Invocar una propiedad (llave)
------------------------------
En Latino existen dos maneras para llamar a una propiedad de un diccionario.

Usaremos el ejemplo anterior como base:

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(carro.marca)         //Devolverá Toyota</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(carro["modelo"])     //Devolverá Camry</code></pre>

----

Cambiar valor de propiedad
---------------------------
Se puede cambiar el valor de una propiedad con solo hacer referencia a la misma:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carro = {
     "marca"  : "Toyota",
     "modelo" : "Camry",
     "anio"   : 2011,
     "color"  : "Blanco"
   }
   
   carro.color="Negro"
   escribir(carro.color)     //Devolverá Negro</code></pre>

----

Métodos de un diccionario
--------------------------
Los diccionarios además de ser objetos con sus propiedades, también disponen de **métodos**.

Los métodos son **acciones** que se pueden realizar a un objeto. En otras palabras los métodos en realidad son **funciones** almacenadas en las propiedades del objeto.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {
  "nombre"   : "Melvin",
  "apellido" : "Guerrero",
  "edad"     : 50,
  "completo" : funcion()
     retornar persona.nombre.." "..persona.apellido
   fin
   }
   
   escribir(persona.completo())     //Devolverá Melvin Guerrero</code></pre>

----

Invocar un método
------------------
Al igual que las propiedades los métodos se invocan de la misma manera, con la diferencia que estos requiere **paréntesis ( )** al final del nombre.

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(persona.completo())</code></pre>

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir(persona["completo"]())</code></pre>

----

Anidar diccionarios
--------------------
Un diccionario no únicamente está compuesto por propiedades y métodos, también de otros diccionarios. A esto se lo llama **diccionario anidado**.

.. raw:: html

   <pre><code class="language-latino line-numbers">carros = {
     "carro1"   : {
       "marca"  : "Toyota",
       "modelo" : "Camry",
       "anio"   : "2011"
     },
     "carro2"   : {
       "marca"  : "Ford",
       "modelo" : "Fiesta",
       "anio"   : "2012"
     },
     "carro3"   : {
       "marca"  : "Peugeot",
       "modelo" : "206",
       "anio"   : "2009"
     }
   }
   
   escribir(carros.carro1.marca)     //Devolverá Toyota</code></pre>

De igual manera podemos anidar otros diccionarios ya existentes a un diccionario:

.. raw:: html

   <pre><code class="language-latino line-numbers">carro1 : {
     "marca"  : "Toyota",
     "modelo" : "Camry",
     "anio"   : "2011"
   }
   carro2 : {
     "marca"  : "Ford",
     "modelo" : "Fiesta",
     "anio"   : "2012"
   }
   carro3 : {
     "marca"  : "Peugeot",
     "modelo" : "206",
     "anio"   : "2009"
   }

   carros = {
     "carro1" : carro1,
     "carro2" : carro2,
     "carro3" : carro3
   }
   
   escribir(carros.carro3.marca)     //Devolverá Peugeot</code></pre>

----

Librería "dic"
---------------
La librería **dic** nos permite obtener más información sobre nuestro diccionario en Latino.

Longitud de un diccionario
+++++++++++++++++++++++++++
Para obtener la Longitud de un diccionario usaremos el siguiente comando **dic.longitud( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.longitud(persona))     //Devolverá un valor de 4</code></pre>

Llaves de un diccionario
+++++++++++++++++++++++++
Para obtener las **llaves (propiedades)** que almacena un diccionario usaremos el siguiente comando **dic.llaves( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.llaves(persona))     //Devolverá ["nombre", "apellido", "edad", "etimología"]</code></pre>

Valores de un diccionario
++++++++++++++++++++++++++
Para obtener los **valores** almacenados en las propiedades de un diccionario usaremos el siguiente comando **dic.valores( )**, también podemos usar este otro comando que de igual manera hace lo mismo **dic.vals( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.vals(persona))     //Devolverá ["Melvin", "Guerrero", 50, "Latino"]</code></pre>

Agregar nuevas propiedades a un diccionario
+++++++++++++++++++++++++++++++++++++++++++++
Para agregar nuevas propiedades a un diccionario implementamos el siguiente código:

.. raw:: html

   <pre><code class="language-latino line-numbers">carro = {
     "marca"  : "Toyota",
     "modelo" : "Camry",
     "anio"   : 2011,
     "color"  : "Blanco"
   }
   
   carro["engranaje"]="Automatico"     //Aquí hemos agregado una nueva propiedad llama "engranaje" y está con un valor de "Automático"
   carro.pais="USA"                    //También se puede agregar nuevas propiedades de esta manera
   escribir(carro)                     //escribimos el nombre del diccionario para que se impriman todas sus propiedades y valores</code></pre>

Recorrer un diccionario
++++++++++++++++++++++++
Podemos recorrer un diccionario utilizando el :ref:`ciclo Desde (For Loop) <desdeLink>`.

Éste es un ejemplo de cómo podríamos recorrer un diccionario que este a su vez imprima las llaves y valores almacenados:

.. raw:: html
   
   <pre><code class="language-latino line-numbers">carro = {
     "marca"  : "Toyota",
     "modelo" : "Camry",
     "anio"   : 2011,
     "color"  : "Blanco"
   }
   
   desde(i=0; i < dic.longitud(carro); i++)                          //Obtenemos la longitud del diccionario
     escribir(dic.llaves(carro)[i].." | "..dic.valores(carro)[i])    //Devolverá cada propiedad del diccionario con su valor
   fin</code></pre>

.. note:: Por el momento en Latino 1.2.0 en la librería **dic** funciones como **dic.copiar( )**, **dic.eliminar( )** y **dic.existe( )** no están disponibles. Espere a futuros lanzamientos de Latino para ver sus novedades.

.. Enlaces

.. _tablas hash: https://es.wikipedia.org/wiki/Tabla_hash