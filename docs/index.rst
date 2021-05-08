.. meta::
   :description: Documentación de Latino, un lenguaje de programación con sintaxis en Español
   :keywords: manual, documentacion, latino

.. epigraph::
   
   Have been programing for over four decades. Each programmer needs to be responsible for documenting, testing and debugging what they have created - who else knows it better?

   -- Prem Sobel

----

================================
Manual Latino |LATINO_VERSION|
================================
Bienvenidos al manual de Latino_, un lenguaje de programación con sintaxis en Español.

:Autor:
  `Melvin Guerrero`_

:Versión:
  `Latino 1.4.0`_

Empezando
----------

.. container:: tocdescr
   
   .. container:: descr
      
      :doc:`/Sobre-Latino`
   
   .. container:: descr
      
      :doc:`/Instalar-Latino`
   
   .. container:: descr
      
      :doc:`/Editores-Textos`
   
   .. container:: descr
      
      :doc:`/ejemplos/Mi-Primer-Programa`

Categorías
-----------

.. container:: tocdescr
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_novedades.png
         :target: Novedades.html

      :doc:`/Novedades`
         Descubre las mejoras y novedades en esta nueva versión de Latino |LATINO_VERSION|
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_operadores.png
         :target: sintaxis/Operadores.html

      :doc:`/sintaxis/Operadores`
         Operadores de aritmética, asignación, condicionales, lógicos, relacionales, y más.
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_datos.png
         :target: sintaxis/Tipos-de-Datos.html

      :doc:`/sintaxis/Tipos-de-Datos`
         Los tipos de datos es una clasificación que define el valor asociado a una variable u objeto.
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_cadena.png
         :target: sintaxis/Cadenas.html

      :doc:`/sintaxis/Cadenas`
         Las cadenas (strings por su nombre en Ingles) son utilizados para almacenar y manipular textos en Latino.
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_modulo.png
         :target: sintaxis/Modulo.html

      :doc:`/sintaxis/Modulo`
         Un módulo es un archivo que contiene un conjunto de funciones que desea incluir en su aplicación.
   
   .. container:: descr
      
      .. figure:: /_static/_media/indice/index_regex.png
         :target: sintaxis/RegEx.html

      :doc:`/sintaxis/RegEx`
         Una Expresión Regular o RegEx es una secuencia de caracteres que forman un patrón de búsqueda.
   
   .. container:: descr
      
      :doc:`/Funciones-Base`
         Son funciones predefinidas que nos ayudan a realizar ciertas tareas.
      
   .. container:: descr
      
      :doc:`/latGlosario`
         Lista de librerías, palabras reservadas y definiciones en Latino.

----

Otras Documentaciones
----------------------
`Latino API`_

----

Enlaces Externos
-----------------
`Canal en Youtube`_

`Editor en-linea de Latino`_

.. .. attention:: Esta documentación esta sujeta a actualizaciones y modificaciones, ya que aún se encuentra en un proceso de desarrollo. Gracias.

==================
¿Deseas colaborar?
==================
Este manual esta abierto para cualquier voluntario que desee colaborar.
Si desea colaborar, mire el articulo de `guía de colaboración`_


.. Enlaces

.. _Latino: https://lenguajelatino.org
.. _Melvin Guerrero: https://melvinguerrero.blogspot.com
.. _Latino 1.4.0: https://github.com/lenguaje-latino/Latino/releases/tag/v1.4.0
.. _Latino API: https://manuallatinoapi.blogspot.com
.. _guía de colaboración: https://github.com/LatinoDocs/Manual-Latino/blob/master/.readme/CONTRIBUTING.md
.. _Canal en Youtube: https://www.youtube.com/channel/UCLVTJpQn-TDbBSwR732kvnQ/featured
.. _Editor en-linea de Latino: https://editorlatino.blogspot.com

.. Tabla de contenido (TOC)

.. toctree::
   :maxdepth: 2
   :hidden:
   
   Introduccion
   Sobre-Latino
 
.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Instalar Latino

   OS/MS-Windows
   OS/Debian-Ubuntu
   OS/Fedora-CentOS
   OS/ArchLinux-Manjaro
   OS/macOS-X

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Editores de textos

   editores/Atom
   editores/Notepad++
   editores/Sublime-Text
   editores/TextMate
   editores/Vim
   editores/VS-Code 

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Primeros pasos

   ejemplos/Mi-Primer-Programa

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Sintaxis

   sintaxis/Comentarios
   sintaxis/Variables
   sintaxis/Operadores
   sintaxis/Aritmetica
   sintaxis/Asignacion
   sintaxis/Relacionales
   sintaxis/Logicos
   sintaxis/Tipos-de-Datos
   sintaxis/Numeros
   sintaxis/Cadenas
   sintaxis/Funciones
   sintaxis/Lista
   sintaxis/Diccionarios
   sintaxis/Condicion-Si
   sintaxis/Condicion-Elegir
   sintaxis/Condicion-Desde
   sintaxis/Condicion-Mientras
   sintaxis/Condicion-Rango
   sintaxis/Condicion-Repetir
   sintaxis/Condicion-Romper
   sintaxis/Modulo
   sintaxis/RegEx

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Funciones base (internas)
   
   funciones/acadena
   funciones/alogico
   funciones/anumero
   funciones/imprimir
   funciones/imprimirf
   funciones/incluir
   funciones/leer
   funciones/limpiar
   funciones/tipo

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Librerías

   librerias/Archivo
   librerias/Cadena
   librerias/Diccionario
   librerias/Lista
   librerias/Matematica
   librerias/Sistema

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Consola

   consola/Comandos-Consola

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Referencias

   latGlosario
