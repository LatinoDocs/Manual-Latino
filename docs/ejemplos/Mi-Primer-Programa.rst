.. meta::
   :description: Ejemplos básicos de la sintaxis de Latino
   :keywords: manual, documentacion, latino, ejemplo

===================
Mi Primer Programa
===================

Esta sección del manual está enfocada en dar al usuario una breve muestra de algunas funciones y operaciones básicas que se pueden hacer en Latino

Para comenzar con cada uno de los ejemplos tendremos que abrir la terminal de nuestro sistema operativo y tener ejecutado Latino.

.. note:: Para ejecutar Latino en la terminal sólo tendemos que escribir **latino** y precionar la tecla Enter.

.. container:: nota

  |  Si al escribir el código de Latino se hace uso de un editor de texto, al guardar el documento se requiere guardalos con la extensión **.lat**.
  |  ~Ejemplo: **archivo.lat**

.. tabs::
   
   .. tab:: Hola Mundo!
      
      **Hola Mundo** en Lenguaje Latino

      En este ejemplo vamos a realizar un pequeño programa que al ejecutar mostrara un mensaje que diga **"Hola Mundo, Latino!"**
      
      Para hacer mostrar un mensaje en pantalla usaremos el siguiente comando y presionamos Enter

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Hola Mundo, Latino!")</code></pre>

      El resultado será:

      .. code-block:: bash
         
         Hola Mundo, Latino!
      
      .. image:: ../_static/_media/ejemplos/miPrimerPrograma/holaMundo.gif
      

   .. tab:: Imprimir número
      
      **Imprimir número** (digitado por el usuario)

      En este ejemplo se mostrara como podemos digitar y almacenar valores a una variable y posteriormente mostrar ese valor en pantalla.

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Digite un número:")
         num=leer()    //aquí creamos una variable y le asignamos la función leer()
         escribir("El número digitado fue: "..num)</code></pre>
      
      .. note:: Si está escribiendo el código directamente en la terminal, se puede escribir todo en una sola línea, así:

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Digite un número:") num=leer() escribir("El número digitado fue: "..num)</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         Digite un número:
         24
         El número digitado fue: 24
      
      .. image:: ../_static/_media/ejemplos/miPrimerPrograma/imprimirNumero.gif


   .. tab:: Número par/impar
      
      **Número Par o Impar en Latino**

      En este ejemplo vamos a crear un programa que nos ayude a identificar cuando un número (digitado por el usuario) es par o impar.

      **Ejemplo 1:**

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre un número:")
         num=leer()
         si (num % 2 == 0)     //Verdadero si el número es perfectamente divisible por 2
           escribir("El número "..num.." es par")
         sino
           escribir("El número "..num.." es impar")
         fin</code></pre>
      
      .. note:: Si está escribiendo el código directamente en la terminal, se puede escribir todo en una sola línea, así:

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre un número:") num=leer() si(num%2==0) escribir("El número "..num.." es par") sino escribir("El número "..num.." es impar") fin</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         Entre un número:
         8
         El número 8 es par

      **Ejemplo 2:**

      Esta es otra forma de poder crear el mismo programa pero en menos líneas de códigos:

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre un número:")
         num=leer()
         escribir("El numero "..num..(num%2==0)?" es par":" es impar")</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         Entre un número:
         -7
         El número -7 es impar

      .. image:: ../_static/_media/ejemplos/miPrimerPrograma/numeroParImpar.gif

   .. tab:: Intercambiar números
      
      **Intercambiar dos números entre variable en Latino**

      En este ejemplo haremos un programa que intercambie los valores de dos variables entre si.

      **Ejemplo 1:**

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">priNum = 2
         segNum = 5
         priNum, segNum = segNum, priNum  //Aquí se intercambian los valores
         escribir("PrimeroNum:"..priNum.." | SegundoNum:"..segNum)</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         PrimeroNum:5 | SegundoNum: 2
      
      **Ejemplo 2:**

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre el primer número:")
         priNum=leer()
         escribir("Entre el segundo número:")
         segNum=leer()
         tempVar=priNum    //El valor de la primera variable es asignada a una variable temporal
         priNum=segNum     //El valor de la segunda variable es asignada a la primera variable
         segNum=tempVar    //El valor de la variable temporaria es asignada a la segunda variable
         escribir("Después de intercambiar, la primera variable es de: "..priNum)
         escribir("y la segunda variable es de:"..segNum)</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         Entre el primer número:
         1
         Entre el segundo número:
         2
         Después de intercambiar, la primera variable es de: 2
         y la segunda variable es de: 1
      
      **Ejemplo 3:**

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre el primer número:")
         priNum=leer()
         escribir("Entre el segundo número:")
         segNum=leer()
         //processo de intercambio
         priNum=priNum-segNum
         segNum=priNum+segNum
         priNum=segNum-priNum
         escribir("Después de intercambiar, la primera variable es de: "..priNum)
         escribir("y la segunda variable es de:"..segNum)</code></pre>

      El resultado será:

      .. code-block:: bash
         
         Entre el primer número:
         10.25
         Entre el segundo número:
         -12.5
         Después de intercambiar, la primera variable es de: -12.5
         y la segunda variable es de: 10.25
      
      .. image:: ../_static/_media/ejemplos/miPrimerPrograma/intercambiarNumeros.gif

   .. tab:: Vocal o Consonante
      
      **Identificar si el caracter es vocal o no en Latino**
      
      En este ejemplo vamos a crear un programa que sea capaz de saber si el valor que insertamos es una vocal o consonante.

      .. raw:: html
         
         <pre><code class="language-latino line-numbers">escribir("Entre un alfabeto:")
         alfa=leer()
         vocales=["a","A","e","E","i","I","o","O","u","U"]    //Declaración de vocales

         resp = alfa..", NO es una vocal"

         desde (i=0; i < lista.longitud(vocales); i++)
            si (alfa==vocales[i])
               resp = alfa..", SI es una vocal"
            fin
         fin

         escribir (resp)</code></pre>
      
      El resultado será:

      .. code-block:: bash
         
         Entre un alfabeto:
         a
         a, es un vocal
      
      .. image:: ../_static/_media/ejemplos/miPrimerPrograma/caracterVocaloNo.gif