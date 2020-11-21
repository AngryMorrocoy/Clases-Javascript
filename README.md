<p align="center">
    Clases de Javascript piedrasxd
</p>

Resumen de las clases y lugar donde se almacenan los ejemplos y se subirán los ejercicios que deberán
resolver.

## Instalando Sublime Text 3

El editor ST3 se puede descargar muy fácilmente [aqui](https://www.sublimetext.com/3)
A la hora de descargarlo asegúrense de elegir la opción correspondiente a su Sistema Operativo (32/64 bits)

Abren el ejecutable, e instalan como cualquier otro programa

## Configurando Sublime Text 3
<ol>
<li> Para programar en JavaScript, usaremos dos plugins `JavaScript Completions` y `BracketHighlighter`
Para instalar estos plugins en ST3 deberemos abrir el editor de texto y presionar `CTRL+SHIFT+P`</li>

<li> Nos abrirá una especie de "barra de navegación", aquí buscaremos la opción de `Install Package Manger` y damos enter, esperamos un poco hasta que complete la instalación</li>

<li>Una vez culminado el paso anterior volveremos a presionar `CTRL+SHIFT+P` y esta vez buscaremos `Install Package`, damos enter y esperamos a que busque los plugins disponibles, en este nuevo menú buscaremos primeramente `JavaScript Completions` y damos enter para instalarlo, una vez que termine toda su instalación (el tiempo de instalación puede variar dependiendo de la velocidad del internet, pero no debería tardar más de 30 minutos), para verificar si funciona correctamente, se puede abrir un archivo con código javascript, escribir "console" y ver si intenta autocompletarnos nuestro código.</li>

<li> Ahora vamos con el siguiente plugin `BracketHighlighter`, su instalación es exactamente igual a la del plugin anterior, abrimos barra de navegación (`CTRL+SHIFT+P`), buscamos "Install Package" y buscamos "BracketHighlighter" y damos a enter, y esperamos un poco</li>

<li> Para los atajos de teclado, basta con descargar el archivo "Keybindings" ubicado en la carpeta Sublime Text 3 (En este repositorio). En sublime text 3 ir a "Preferences" > "Key Bindings"; Se abrirá una nueva ventana con dos archivos abiertos, en el que se encuentra a la derecha copiaremos todo el contenido del archivo previamente descargado</li>

<li> Para la configuración que yo uso: descargar el archivo "Settings" ubicado en la carpeta Sublime Text 3 (En este repositorio). En sublime text 3 ir a "Preferences" > "Settings"; se abrirá una nueva ventana con dos archivos abiertos, en el de la derecha copian el contenido del archivo previamente descargado.</li>
</ol>

## Primera Clase

En la primera clase se vieron los siguientes conceptos

`Variable` > Es un trozo de memoria que almacena algún dato que queramos y le otorga un identificador
    Sintaxis: `let IDENTIFICADOR = VALOR` (Declaración)
              `let IDENTIFICADOR;` (Definición)
              `let ID1, ID2;` (Definición múltiple)
        Donde:
            `let` - es una palabra reservada por JavaScript para declarar o definir variables
            `IDENTIFICADOR` - Palabra con la que se identificará durante el programa al dato almacenado
            esta no puede contener carácteres especiales (+, -, /, *, ?, ", ', \), ni tampoco puede comenzar
            con números
            `VALOR` - El valor que se desea que la variable almacene
    Más adelante en el programa, para referirnos a una variable, se utiliza su `IDENTIFICADOR` fuera de
    paréntesis. Una variable puede poseer múltiples tipos, para saber el tipo de valor que almacena una
    variable se usa la palabra reservada `typeof IDENTIFICADOR`

    Tipos: `Number` - Valor numérico con el que se realizan operaciones matemáticas
           `String` - Cadena de carácteres con el que no se realizan operaciones matemáticas
           `Booleanos` - Este tipo simplemente se refiere a verdadero o falso (true/false)
           `null` - Valor null, no significa nada
           `undefined` - Aparece cuando un valor no ha sido definido

`Operaciones` > En JavaScript se realizan las siguientes operaciones matemáticas:

<ul>
    <li>`Suma` - Se utiliza el signo "+" su sintáxis es `a + b`</li>
    <li>`Resta` - Se utiliza el signo "-" su sintáxis es `a - b`</li>
    <li>`Multiplicación` - Se utiliza el signo "*" su sintáxis es `a * b`</li>
    <li>`División` - Se utiliza el signo "/" su sintáxis es `a / b`</li>
    <li>`Modulo` - Retorna el resto de una divisón, y se utiliza el signo "%" su sintáxis es `a % b`</li>
<ul>

`Estructuras de datos (Arrays)` > En JavaScript los arrays se declaran de la siguiente forma:
    [dato1, dato2, dato3, dato4] (Obviamente todo esto puede o no almacenarse en una variable)
    Y poseen las siguientes propiedades:
    * Sus indices comienzan en 0 y se accede a ellos así: Array[INDICE]
    * Puede almacenar cualquier tipo y cantidad de datos
    * Si se intenta acceder a un indice que no existe retorna `undefined`
    * Array.length > Retorna la cantidad de elementos presentes en un Array

    Y los siguientes metodos:
    * Array.push(DATO) > Agrega `DATO` al final del Array
    * Array.pop() > Remueve el último objeto del array y lo retorna, en caso de que quiera ser utilizado posteriormente
    * Array.concat(Array2) > Agrega todos los objetos de `Array2` en `Array`



`Condicionales y comparaciones` > En JavaScript se utiliza la siguiente sintaxis para realizar comparaciones:
<ul>
    <li>`Mayor que` - ">", `a > b` (`a` mayor que `b`)</li> 
    <li>`Menor que` - "<", `a < b` (`a` menor que `b`)</li>
    <li>`Igual que` - "==", `a == b` (`a` igual a `b`)</li>
    <li>`Distinto de` - "!=" `a != b` (`a` distinto de `b`)</li>
    <li>`Mayor o igual que` - ">=" `a >= b` (`a` mayor o igual que `b`)</li>
    <li>`Menor o igual que` - "<=" `a <= b` (`a` menor o igual que `b`)</li>
</ul>
    A la hora de las condiciones se vieron las sentencias (Solamente se muestra la sintáxis)

    `if | else if | else` >
        if (CONDICIÓN) {        # Inicio de las comparaciones, con una condición que puede o no cumplirse
            // CÓDIGO A EJECUTAR
        }
        else if (CONDICIÓN2) {  # Siguiente caso, se llega aquí si la anterior condición no se cumplió
            // CÓDIGO A EJECUTAR
        } else {                # Último caso, se llega aquí si ninguno de los casos anteriores es verdadero
            // CÓDIGO A EJECUTAR
        }

    `switch` > # Poco usado
        switch (VARIABLE) {     # Inicio de la comparacion

            case COMPARACION1:  # Se compara variable con COMPARACION1
                // Código
                break;

            case COMPARACION2: # Se compara variable con COMPARACION2
                // CODIGO
                break;

            default:           # Si ningun caso anterior es verdadero (caso por defecto)
                // CODIGO
                break;

        }

`Menciones honoríficas:` 
<ul>
    <li>console.log(x) > Imprime por consola cual sea el valor de `x`</li>
    <li>Concatenación > Cuando se juntan más de dos valores de tipo String usando el operando `+`
                      En caso de que la concatenación ocurra entre Number y String, el tipo Number se 
                      convierte automáticamente en String</li>
</ul>

## Segunda Clase 

