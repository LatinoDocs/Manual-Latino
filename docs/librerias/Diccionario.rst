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
| llaves\( \)   | 1          | Devuelve el nombre de la propiedad (llave) |
+---------------+------------+--------------------------------------------+
| longitud\( \) | 1          | Devuelve la longitud de texto              |
+---------------+------------+--------------------------------------------+
| valores\( \)  | 1          | Devuelve el valor de la propiedad          |
+---------------+            |                                            |
| vals\( \)     |            |                                            |
+---------------+------------+--------------------------------------------+

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

.. note:: Por el momento en Latino 1.2.0 en la librería **dic** funciones como **dic.copiar( )**, **dic.eliminar( )** y **dic.existe( )** no están disponibles. Espere a futuros lanzamientos de Latino para ver sus novedades.