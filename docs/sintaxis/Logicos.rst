.. _logicosLink:

.. meta::
   :description: Lógicos en Latino
   :keywords: manual, documentacion, latino, sintaxis, logicos

=========
Lógicos
=========
Los operadores lógicos se usan para determinar la lógica entre variables o valores y estos devuelven **Verdadero** o **Falso**, dependiendo si la expresión es verdadera o falsa.

Los operadores lógicos se utilizan comúnmente en la toma de decisiones en programación.

+----------+-------------------------------------------------------------------------------+
| Operador | Descripción                                                                   |
+==========+===============================================================================+
| \&\&     | **y lógico.**  Sólo será verdadero si todos los operadores son verdaderos.    |
+----------+-------------------------------------------------------------------------------+
| \|\|     | **ó lógico.**  Será verdadero si sólo uno de los dos operadores es verdadero. |
+----------+-------------------------------------------------------------------------------+
| \!       | **no lógico.** Sólo será verdadero si los operadores son falsos.              |
+----------+-------------------------------------------------------------------------------+

----

**Ejemplo:**

Para los siguientes ejemplos supondremos que la variable **X=6** y la variable **Y=3**.

+----------+-------------+------------------------------+-----------+
| Operador | Descripción | Ejecución                    | Resultado |
+==========+=============+==============================+===========+
| &&       | y lógico    | escribir(x < 10 && y > 1)    | Verdadero |
+----------+-------------+------------------------------+-----------+
| \|\|     | o lógico    | escribir(x == 5 \|\| y == 5) | Falso     |
+----------+-------------+------------------------------+-----------+
| \!       | no lógico   | escribir(!(x == y))          | Verdadero |
+----------+-------------+------------------------------+-----------+