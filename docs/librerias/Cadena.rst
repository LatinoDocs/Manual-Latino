.. meta::
   :description: Librería de canedas en Latino
   :keywords: manual, documentacion, latino, librerias, lib, cadena

==============
Lib "cadena"
==============
La librería **cadena** nos permite trabajar y manipular las **canedas(string)** en Latino.

**Lista de comando**

+-------------------------+------------+--------------------------------------------+
| Comando                 | Parámetros | Descripción                                |
+=========================+============+============================================+
| bytes\( \)              | 1          | Devuelvé el valor ASCII de cada carácter en una lista                    |
+-------------------------+------------+--------------------------------------------+
| char\( \)               | 1          | Combierte el valor o lista ASCII a un carácter o una lista de caracteres |
+-------------------------+------------+--------------------------------------------+
| comparar\( \)           | 2          | Compara dos cadenas y devuelvé -1 si la primer cadenas es menor que la segunda, 0 si son iguales, y 1 si es mayor la primer cadena que la segunda |
+-------------------------+------------+--------------------------------------------+
| concatenar\( \)         | 2          | Úne dos cadenas(Una alternativa al ..)
+-------------------------+------------+--------------------------------------------+
| contiene\( \)           | 2          | Busca un caracter o cadena dentro de otra cadena |
+-------------------------+------------+--------------------------------------------+
| ejecutar\( \)           | 1          | Ejecuta una cadena que tenga código de latino |
+-------------------------+------------+--------------------------------------------+
| eliminar\( \)           | 2          | Elimina la primera considencia en una cadena |
+-------------------------+------------+--------------------------------------------+
| encontrar\( \)          | 2          | Regresa la posicion de la primera considencia y regresa -1 si no lo encuentra
+-------------------------+------------+--------------------------------------------+
| es_alfa\( \)            | 1          | Regresa verdadero si en la cadena es letra y/o numero, y falso si es simbolo
+-------------------------+------------+--------------------------------------------+
| es_igual\( \)           | 2          | Regresa verdadero si las dos cadenas son iguales
+-------------------------+------------+--------------------------------------------+
| es_numerico\( \)        | 1          | Regresa verdadero si la cadena es solo numero y falso si es letra o simbolo
| es_numero\( \)          |            | 
+-------------------------+------------+--------------------------------------------+
| esta_vacia\( \)         | 1          | Regresa verdadero si la cadena esta vacia
+-------------------------+------------+--------------------------------------------+
| formato\( \)            | 1          | (Seria este un alias de imprimirf en latino)
+-------------------------+------------+--------------------------------------------+
| indice\( \)             | 2          | Es un alieas de encontrar en latino
+-------------------------+------------+--------------------------------------------+
| inicia_con\( \)         | 2          | Regresa verdadero si la cadena comienza con el caracter, palabra, u oracion especificado
+-------------------------+------------+--------------------------------------------+
| insertar\( \)           | 3          | Agrega una cadena en la posicion indicada (cadena_original, cadena_a_agregar, la_posicion)
+-------------------------+------------+--------------------------------------------+
| invertir\( \)           | 1          | Invierte el contenido de la cadena
+-------------------------+------------+--------------------------------------------+
| longitud\( \)           | 1          | Regresa el tamaño de la cadena
+-------------------------+------------+--------------------------------------------+
| match\( \)              | 2          | Utiliza RegEx y regresa una lista de las coincidencias
+-------------------------+------------+--------------------------------------------+
| mayusculas\( \)         | 1          | Combierte toda la cadena en mayusculas
+-------------------------+------------+--------------------------------------------+
| minusculas\( \)         | 1          | Combierte toda la cadena en minusculas
+-------------------------+------------+--------------------------------------------+
| recortar\( \)           | 1          | Elimina los espacios al inicio y al final de la cadena
+-------------------------+------------+--------------------------------------------+
| reemplazar\( \)         | 4          | Cambiar una palabra por otra en una cadena (cadena_original, texto_a_reemplazar, texto_nuevo, posicion)
+-------------------------+------------+--------------------------------------------+
| regex\( \)              | 2          | Regresa verdadero si encuentra la coincidencia y falso si no lo encontro
+-------------------------+------------+--------------------------------------------+
| rellenar_derecha\( \)   | 3          | Agrega n caracteres al final de la cadena especificada (cadena_original, cadena_a_agregar, cantidad(valor numerico))
+-------------------------+------------+--------------------------------------------+
| rellenar_izquierda\( \) | 3          | Agrega n caracteres al inicio de la cadena especificada (cadena_original, cadena_a_agregar, cantidad(valor numerico))
+-------------------------+------------+--------------------------------------------+
| separar\( \)            | 2          | Separa la cadena en una lista en base a un caracter (usar comillas simples)
+-------------------------+------------+--------------------------------------------+
| subcadena\( \)          | 3          | Devuelvé una subcadena embase a la posicion y su longitud (cadena_original, posicion_inicial(numero), longitud(numero))
+-------------------------+------------+--------------------------------------------+
| termina_con\( \)        | 2          | Devuelvé verdadero si una cadena termina con un caracter o palabra especificada (Distingue entre mayusculas y minusculas)
+-------------------------+------------+--------------------------------------------+
| ultimo_indice\( \)      | 2          | Devuelvé la posicion final de un caracter o palabra especificada en una cadena


.. cadena.comparar("a","b")  -1
.. cadena.comparar("a","a")   0
.. cadena.comparar("b","a")   1
.. cadena.comparar("abeja","avestruz")  -1

contiene
---------
Es diferente a RegEx ya que este comando es mas especifico al buscar un caracter y regex es mas versatil.

ejecutar
---------
cadena.ejecutar("poner(\"Hola mundo\")") = devuelvé: Hola mundo

eliminar
---------
x = "Hola mundo, Latino. mundo, Mundo"
y = "mundo"
poner(cadena.eliminar(x,y)) //Hola, Latino. mundo, Mundo
