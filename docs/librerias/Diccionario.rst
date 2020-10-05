.. _diclibLink:

.. meta::
   :description: Librería de diccionarios en Latino
   :keywords: manual, documentacion, latino, librerias, lib, diccionario

===========
Lib "dic"
===========
La librería **dic** nos permite trabajar y manipular los :ref:`diccionarios <dicLink>` en Latino.

**Lista de comando**

+---------------+------------+--------------------------------------------+
| Comando       | Parámetros | Descripción                                |
+===============+============+============================================+
| contiene\( \) | 2          | Devuelve verdadero si el elemento existe   |
+---------------+------------+--------------------------------------------+
| eliminar\( \) | 2          | Elimina la llave asignada y su valor       |
+---------------+------------+--------------------------------------------+
| llaves\( \)   | 1          | Devuelve el nombre de la propiedad (llave) |
+---------------+------------+--------------------------------------------+
| longitud\( \) | 1          | Devuelve la longitud de texto              |
+---------------+------------+--------------------------------------------+
| valores\( \)  | 1          | Devuelve el valor de la propiedad          |
+---------------+            |                                            |
| vals\( \)     |            |                                            |
+---------------+------------+--------------------------------------------+

----

dic.contiene\( \)
---------------------
Este comando nos permite comprobar si una **llave** o **propiedad** existe en un diccionario.

Este comando es sensible a las mayúsculas y minúsculas.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.contiene(persona, "edad"))     //Devolverá verdadero</code></pre>

----

dic.eliminar\( \)
---------------------
Este comando nos permite **eliminar** una **llave** o **propiedad** existente de un diccionario.

Este comando es sensible a las mayúsculas y minúsculas.

.. raw:: html
   
   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   dic.eliminar(persona, "edad")     //Eliminamos la propiedad llamada edad
   escribir(persona)                 //Devolverá {"nombre": "Melvin", "apellido": "Guerrero", "etimologa": "Latino"}</code></pre>

----

dic.llaves\( \)
-----------------
Para obtener las **llaves (propiedades)** que almacena un diccionario usaremos el siguiente comando **dic.llaves( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.llaves(persona))     //Devolverá ["nombre", "apellido", "edad", "etimología"]</code></pre>

----

dic.longitud\( \)
-------------------
Para obtener la Longitud de un diccionario usaremos el siguiente comando **dic.longitud( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.longitud(persona))     //Devolverá un valor de 4</code></pre>

----

dic.valores\( \)
------------------
Para obtener los **valores** almacenados en las propiedades de un diccionario usaremos el siguiente comando **dic.valores( )**, también podemos usar este otro comando que de igual manera hace lo mismo **dic.vals( )**.

.. raw:: html

   <pre><code class="language-latino line-numbers">persona = {"nombre":"Melvin", "apellido":"Guerrero", "edad":50, "etimología":"Latino"}
   escribir(dic.vals(persona))     //Devolverá ["Melvin", "Guerrero", 50, "Latino"]</code></pre>
