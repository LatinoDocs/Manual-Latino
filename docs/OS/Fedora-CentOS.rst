.. _fedoraLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en Fedora y CentOS
   :keywords: instalacion, latino, fedora, centos, linux

================
Fedora - CentOS
================
Para instalar Latino en Fedora o CentOS, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

.. code-block:: bash

   su
   sudo dnf update
   sudo dnf install gcc-c++ git cmake kernel-devel
   sudo dnf install readline-devel

Una vez concluido esto, pasamos a instalar propiamente Latino en nuestro sistema

.. code-block:: bash
   
   cd ~
   sudo git clone https://github.com/lenguaje-latino/latino-core
   cd latino-core
   sudo cmake .
   sudo make
   sudo make install

**... y listo!** para ejecutar Latino solo escribimos en nuestra terminal el comando **latino**

.. note:: Si en el proceso de instalar **Latino** en **Fedora ó CentOS** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro Aquí`_


.. Enlaces

.. _foro Aquí: https://es.stackoverflow.com/questions/tagged/latino