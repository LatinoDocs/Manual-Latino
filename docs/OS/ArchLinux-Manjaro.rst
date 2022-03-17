.. _archlinuxLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en Arch Linux y Manjaro
   :keywords: instalacion, latino, archlinux, manjaro, linux

=====================
Arch Linux - Manjaro
=====================
Para instalar Latino en Arch Linux y Manjaro, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

.. code-block:: bash

   sudo pacman -Syu
   sudo pacman -S base-devel

Una vez concluido esto, pasamos a instalar propiamente Latino en nuestro sistema

.. code-block:: bash

  cd ~
  sudo git clone https://github.com/lenguaje-latino/latino-core
  cd latino-core
  mkdir build && cd build
  make
  make install

**... y listo!** para ejecutar Latino solo escribimos en nuestra terminal el comando **latino**

.. note:: Si en el proceso de instalar **Latino** en **Arch Linux o Manjaro** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro Aquí`_


.. Enlaces

.. _foro Aquí: https://es.stackoverflow.com/questions/tagged/latino
