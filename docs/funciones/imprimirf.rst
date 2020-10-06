.. _imprimirfLink:

.. meta::
   :description: Función base imprimirf() en Latino
   :keywords: manual, documentacion, latino, funciones, funcion base, imprimirf

=============
imprimirf( )
=============
El comando **imprimirf\( \)** esta inspirado en el comando **printf\( \)** en C, pero el comando en Latino es mas limitado.

Este comando en esencia es similar a los comandos **imprimir\( \)**, **escribir\( \)** y **poner\( \)** pero con algunas diferencias.

El comando **imprimirf\( \)** requiere del carácter **\\n** al final de cada cadena para poner **escribir** en pantalla, caso que NO se da con los otros comandos.

Este comando permite **dar formato** a un carácter o valor ASCII.

El comando **imprimirf\( \)** opera con los siguientes formatos:

  * **\%c**, convierte a un carácter el valor ASCII.
  * **\%i**, convierte a un número enteros.
  * **\%f**, convierte a un número decimal.
  * **\%d**, convierte a un número.
  * **\%o**, convierte a un valor octal.
  * **\%x**, convierte a un hexadecimal.
  * **\%e**, convierte a una expresión científica.
  * **\%s**, convierte a carácter o ha una cadena de texto.
  * **\%%**, Devuelve el simbolo de **porcentage (\%)**.

.. raw:: html

   <pre><code class="language-latino line-numbers">x = "hola"
   escribir(cadena.formato("%c",x))                //Devolverá h
   escribir(cadena.formato("%i",x))                //Devolverá 104
   escribir(cadena.formato("%f",x))                //Devolverá 104.000000
   escribir(cadena.formato("%d",x))                //Devolverá 104
   escribir(cadena.formato("%o",x))                //Devolverá 150
   escribir(cadena.formato("%x",x))                //Devolverá 68
   escribir(cadena.formato("%e",x))                //Devolverá 5.556763e-307
   escribir(cadena.formato("%s",x))                //Devolverá hola
   escribir(cadena.formato("%%",x))                //Devolverá %
   escribir(cadena.formato("%c",75))               //Devolverá K
   escribir(cadena.formato("%c%c%c",75,76,77))     //Devolverá KLM</code></pre>
