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
   sudo apt-get install libcurl4-openssl-dev libhiredis-dev libjansson-dev
   sudo apt-get install redis-server curl libgtk-3-dev
   sudo apt-get install libreadline-dev libpthread-stubs0-dev

.. note:: En el código de arriba es **LIBCURL4**, no LIBCUR14

Una vez concluido esto, pasamos a instalar propiamente Latino en nuestro sistema

.. code-block:: bash

  cd ~
  sudo git clone --recursive https://github.com/lenguaje-latino/Latino
  cd latino
  sudo git submodule update --init --recursive
  sudo cmake .
  sudo make
  sudo make install

**... y listo!** para ejecutar Latino solo escribimos en nuestra terminal el comando **latino**

.. note:: Si en el proceso de instalar **Latino** en **Debian o Ubuntu** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro oficial Aquí`_


.. Enlaces

.. _foro oficial Aquí: https://lenguaje-latino.org/foro/debian-ubuntu/
