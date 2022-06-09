.. _archlinuxLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en Arch Linux y Manjaro
   :keywords: instalacion, latino, archlinux, manjaro, linux

=====================
Arch Linux - Manjaro
=====================
Para instalar Latino en Arch Linux y Manjaro, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

Instalación express
---------------------
El siguiente código tiene en su contenido los pasos para descargar e iniciar el instalador de latino en Linux

.. code-block:: bash

   git clone https://github.com/lenguaje-latino/instalacion.git && cd instalacion && sudo chmod +x latino_instalacion-linux.sh && ./latino_instalacion-linux.sh

----

Instalación manual
-------------------
Acontinuación estos son los paso a paso para la instalación de Latino si no desea utilizar el script previamente mostrado

.. code-block:: bash

   sudo pacman -Syu
   sudo pacman -S --noconfirm base-devel cmake git

Una vez concluido esto, pasamos a instalar propiamente Latino en nuestro sistema

.. code-block:: bash

  cd ~
  sudo git clone https://github.com/lenguaje-latino/latino-core
  cd latino-core
  sudo cmake .
  sudo make install

**... y listo!** para ejecutar Latino solo escribimos en nuestra terminal el comando **latino**

Desinstalar
------------
Para desinstalar Latino de su sistema, necesitara el archivo "latino_desinstalacion-linux.sh" el cual puede conseguir desde el siguiente repositorio:
`git:lenguaje-latino/instalacion`_

.. code-block::bash

   sudo chmod +x latino_desinstalacion-linux.sh && ./latino_desinstalacion-linux.sh

.. note:: Si en el proceso de instalar **Latino** en **Arch Linux o Manjaro** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro Aquí`_


.. Enlaces

.. _foro Aquí: https://es.stackoverflow.com/questions/tagged/latino
.. _git:lenguaje-latino/instalacion: https://github.com/lenguaje-latino/instalacion