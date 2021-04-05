.. _fedoraLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en Fedora y CentOS
   :keywords: instalacion, latino, fedora, centos, linux

================
Fedora - CentOS
================
Para instalar Latino en Fedora o CentOS, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

.. tabs::
   
   .. tab:: Fedora 26
      
      .. code-block:: bash

         sudo dnf update
         sudo dnf install gcc-c++
         sudo dnf install git bison flex cmake kernel-devel
         sudo dnf install readline-devel

   .. tab:: Fedora 25
      
      .. code-block:: bash
      
         sudo dnf update
         sudo dnf install gcc-c++
         sudo dnf install git bison flex cmake kernel-devel
         sudo dnf install hiredis-devel
         sudo dnf install readline-devel
      
   .. tab:: Fedora 24
      
      .. code-block:: bash
      
         sudo dnf update
         sudo dnf install bison flex cmake gcc g++ libjansson-dev libcurl4-openssl-dev libhiredis-dev redis-server curl jansson-devel groupinstall "Development Tools" "Development Libraries" groupinstall "RPM Development Tools" redhat-lsb libgtk-3-dev gtk3-devel readline-devel

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