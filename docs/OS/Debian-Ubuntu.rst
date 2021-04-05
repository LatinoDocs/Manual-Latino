.. _debianLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en Debian y Ubuntu
   :keywords: instalacion, latino, debian, ubuntu, linux

===============
Debian - Ubuntu
===============
Para instalar Latino en Debian y Ubuntu, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

.. code-block:: bash

   sudo apt-get update
   sudo apt-get install git bison flex cmake gcc g++
   sudo apt-get install libreadline-dev libpthread-stubs0-dev

Una vez concluido esto, pasamos a instalar propiamente Latino en nuestro sistema

.. code-block:: bash

  cd ~
  sudo git clone https://github.com/lenguaje-latino/latino-core
  cd latino-core
  sudo cmake .
  sudo make
  sudo make install

**... y listo!** para ejecutar Latino solo escribimos en nuestra terminal el comando **latino**

.. note:: Si en el proceso de instalar **Latino** en **Debian o Ubuntu** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro Aquí`_


.. Enlaces

.. _foro Aquí: https://es.stackoverflow.com/questions/tagged/latino
