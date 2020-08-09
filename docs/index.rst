.. meta::
   :description: Documentación de Latino, un lenguaje de programación con sintaxis en Español
   :keywords: manual, documentacion, latino

.. epigraph::
   
   Have been programing for over four decades. Each programmer needs to be responsible for documenting, testing and debugging what they have created - who else knows it better?

   -- Prem Sobel

----

====================
Manual Latino v1.2.0
====================
Bienvenidos al manual de Latino_, un lenguaje de programación con sintaxis en Español.

:Autor:
  `Melvin Guerrero`_

:Versión:
  `Latino 1.2.0`_

----

Otras Documentaciones
----------------------
`Latino API`_

----

.. attention:: Esta documentación esta sujeta a actualizaciones y modificaciones, ya que aún se encuentra en un proceso de desarrollo. Gracias.

==================
¿Deseas colaborar?
==================
Este manual esta abierto para cualquier voluntario que desee colaborar.
Si desea colaborar, mire el articulo de `guía de colaboración`_


.. Enlaces

.. _Latino: https://lenguaje-latino.org
.. _Melvin Guerrero: https://melvinguerrero.blogspot.com
.. _Latino 1.2.0: https://github.com/lenguaje-latino/Latino/releases/tag/v1.2.0
.. _Latino API: https://manuallatinoapi.blogspot.com
.. _guía de colaboración: https://github.com/LatinoDocs/Manual-Latino/blob/master/.readme/CONTRIBUTING.md


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
   sintaxis/Condicion-Repetir
   sintaxis/Modulo
..   sintaxis/RegEx

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Funciones base (internas)
   
   funciones/acadena
   funciones/alogico
   funciones/anumero
   funciones/imprimir
   funciones/incluir
   funciones/leer
   funciones/limpiar
   funciones/tipo

.. .. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Libreías

..   librerias/librerias

.. toctree::
   :maxdepth: 2
   :hidden:
   :caption: Referencias

   Glosario


.. .. container:: nota
..
  |  sudo apt-get update
  |  sudo apt-get install git bison flex cmake gcc g++
  |  sudo apt-get install libcurl4-openssl-dev libhiredis-dev libjansson-dev
  |
  |  sudo apt-get install redis-server curl libgtk-3-dev
  |  sudo apt-get install libreadline-dev libpthread-stubs0-dev

.. .. raw:: html
..
   <pre><code class="language-latino line-numbers"></code></pre>