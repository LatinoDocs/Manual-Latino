.. meta::
   :description: Condición desde en Latino
   :keywords: manual, documentacion, latino, sintaxis, desde, for

===========================
Condición Desde (For Loop)
===========================
Hace que una instrucción o bloque de instrucciones se repitan desde una condición inicial y mientras la condición se cumpla (es decir sea verdadero), en esta sentencia los paréntesis si son requeridos.

.. raw:: html

   <pre><code class="language-latino line-numbers">desde (condicion_inicial; condicion; incremento)
     #codigo
   fin
   
   desde (i=0; i <= 10; i++)
     escribir(i)
   fin
   #salida: 0 1 2 3 4 5 6 7 8 9 10

   desde (i=10; i >= 0; i--)
     escribir(i)
   fin
   #salida: 10 9 8 7 6 5 4 3 2 1 0</code></pre>

Se puede especificar un salto diferente cambiando la expresión de incremento.

.. raw:: html

   <pre><code class="language-latino line-numbers">desde(i=0; i < 50; i=i+10)
     imprimir(i)
   fin
   #salida: 0 10 20 30 40</code></pre>