.. meta::
   :description: Funcion leer en Latino
   :keywords: manual, documentacion, latino, funcion, base, interna, leer

============
leer( )
============
La función **leer\( \)** escanea las teclas numéricas y alfanuméricas digitadas por el usuario, hasta que este presione la tecla **enter**.

Es recomendable asignar este comando a una variable, ya que se puede manipular con mayor facilidad cualquier dato digitado por el usuario.

.. code-block:: bash
   
   leer()

.. raw:: html

   <pre><code class="language-latino line-numbers">escribir("¿Cual es su nombre?")
   x = leer()
   escribir("Hola "..x)     //Devolverá "Hola (Mas el nombre del usuario)"</code></pre>