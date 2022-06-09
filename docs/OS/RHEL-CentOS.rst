.. _centosLink:

.. meta::
   :description: Pasos a seguir para instalar Latino en RHEL (Red Hat) y CentOS
   :keywords: instalacion, latino, red hat, centos, linux

=============
RHEL - CentOS
=============
Para instalar Latino en RHEL (Red Hat) y CentOS, primero abrimos la consola (Terminal) y ejecutamos los siguientes comandos:

.. admonition:: Instalación express

   El siguiente código tiene en su contenido los pasos para descargar e iniciar el instalador de latino en Linux

   .. code-block:: bash

      git clone https://github.com/lenguaje-latino/instalacion.git && cd instalacion && sudo chmod +x latino_instalacion-linux.sh && ./latino_instalacion-linux.sh

----

Instalación manual
-------------------
Acontinuación estos son los paso a paso para la instalación de Latino si no desea utilizar el script previamente mostrado

.. tabs::

    .. tab:: CentOS ^9/8

        CentOS 8 en adelante disponen tanto de YUM y DNF para la instalación de paquetes, en este caso usaremos DNF ya que es más rápido que YUM

        .. code-block:: bash

            sudo dnf -y update
            sudo dnf -y install git cmake readline-devel
            sudo dnf -y groupinstall "Development Tools"

    .. tab:: CentOS 7/6/5

        CentOS 7 y previos solo disponen tanto de YUM para la instalación de paquetes

        .. code-block:: bash

            sudo yum -y update
            sudo yum -y install git cmake readline-devel
            sudo yum -y groupinstall "Development Tools"

        Solo para CentOS 7/6/5
        ----------------------
        Con CentOS 7 y previos no es posible la instalación de CMake ^3, la cual es la versión requerida para compilar Latido desde su código fuente, por esta razón procedemos a ejecutar los siguientes pasos

        .. code-block:: bash

            sudo yum -y remove cmake
            sudo yum -y install epel-release
            sudo yum -y install epel-release cmake3

            sudo rm -rf /usr/bin/cmake
            sudo ln -s /usr/bin/cmake3 /usr/bin/cmake
            cmake --version

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

.. note:: Si en el proceso de instalar **Latino** en **Red Hat o CentOS** causa algún problema o conflicto, no dude en buscar las soluciones en el `foro Aquí`_


.. Enlaces

.. _foro Aquí: https://es.stackoverflow.com/questions/tagged/latino
.. _git:lenguaje-latino/instalacion: https://github.com/lenguaje-latino/instalacion