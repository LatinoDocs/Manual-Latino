.. meta::
   :description: Módulos en Latino
   :keywords: manual, documentacion, latino, sintaxis, modulo

========
Módulos
========
Un módulo_ es cualquier archivo o directorio en donde se divide el programa en muchos componentes o bloques de códigos autónomos que pueden ser utilizados en diferentes partes del programa.

.. error:: Por el momento en Latino 1.2.0 no se puede incluir módulos en el sistema operativo macOS-X, solo librerías. Espere a futuros lanzamientos de Latino para ver sus novedades.

----

Creación de módulos
---------------------
Un módulo no es más que otro archivo en Latino, el cual puede contener desde *variables*, *funciones*, *listas*, *diccionarios*, etc.

Para crear un módulo en Latino necesitamos guardar el código deseado en un archivo con extensión **\.lat**.

Además es necesario definir en un :ref:`diccionario <dicLink>` las variables y funciones que serán exportadas desde el módulo con el comando **retornar**.

**sintaxis de un modulo**

.. code-block:: bash
   
   variableMensaje = "Hola mundo"

   retornar {"comandoAExportar":variableMensaje}

----

Uso de módulos
----------------
Para usar un módulo necesitamos utilizar el comando :ref:`incluir\( \) <incluirLink>`.

Cuando se importan un módulo en Latino es necesario asignarlo a una variable, de esta manera el programa sabrá en cuál módulo buscar la función deseada.

Ejemplo con módulo
++++++++++++++++++++
Para este ejemplo usaremos dos archivos los cuales deben de estar en la misma ubicación de carpeta.

.. tabs::

   .. tab:: Código Principal
      
      El primer archivo será nuestro código principal en el cual utilizaremos el comando **incluir\( \)** y después usaremos las funciones importadas del módulo.

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">/*
         En este ejemplo escribiremos en pantalla
         el resultado de nuestra función en nuestro módulo.
         */
         
         m = incluir("moduloPersona")

         escribir(m.hola)                   //Devolverá Hola mundo, Latino
         
         escribir(m.persona_completo)       //Devolverá Melvin Guerrero
         
         n = m.persona.edad
         escribir("edad: "..n)              //Devolverá edad: 50

         escribir(m.suma(2,3))              //Devolverá 5</code></pre>
   
   .. tab:: Código del módulo
      
      El segundo archivo será el código de nuestro módulo, el cual guardaremos con el nombre de **moduloPersona.lat**.

      .. important:: Es necesario especificar en el comando **retornar** las funciones y variables que deseamos que se exporten de este módulo, de lo contrario el módulo no funcionara.

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">/*
         Como se puede ver,
         un módulo no es más que un archivo en el cual este
         será importado en otro archivo para ser usado.
         */

         hola = "Hola mundo, Latino"

         persona = {
           "nombre"   : "Melvin",
           "apellido" : "Guerrero",
           "edad"     : 50,
           "completo" : funcion()
               retornar persona.nombre.." "..persona.apellido
            fin
         }
         
         funcion suma(m,n)
           retornar m + n
         fin
         
         /*
         **Importante**
         Se deben de regresar las funciones y variables
         que se quieran exponer del modulo.
         */
         retornar {
           "hola"             : hola,
           "persona"          : persona,
           "persona_completo" : persona.completo(),
           "suma"             : suma
         }</code></pre>

----

Subdirectorio
-----------------
Con el comando **incluir\( \)**, para especificar archivos en subdirectorios varia dependiendo del sistema operativo.

En MS-Windows, para especificar un archivo en un subdirectorio usamos **\\**.

En Linux y Mac, para especificar un archivo en un subdirectorio usamos **\/**.

**Ejemplo**

Para añadir un archivo del siguiente subdirectorio **carpeta/modulo** lo especificamos de la siguiente manera:

.. code-block:: bash
   
   incluir("carpeta\modulo")     //MS-Windows
   incluir("carpeta/modulo")     //Unix

.. Enlaces

.. _módulo: https://es.wikipedia.org/wiki/M%C3%B3dulo_%28inform%C3%A1tica%29
