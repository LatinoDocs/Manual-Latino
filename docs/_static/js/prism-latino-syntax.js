//Sintaxis de Latino

//Regular Expression  --  https://www.regextester.com
//https://en.wikipedia.org/wiki/Regular_expression

Prism.languages.latino = {
    'comment' : /#.*|\/\/.*|\/\*[\s\S]*?\*\//,

    // 'string': {
    //     pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    //     greedy: true
    // }, (?<=\.) {2,}(?=[A-Z])
    // /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    // (?:("|')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)
    // (["'])(?:\\(?:\r\n|[\s\S])|[\s\S])*?\1
    'string' : {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|[\s\S])*?\1/,
        greedy: true
    },
    'number'  : /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    'keyword' : /\b(?:caso|defecto|otro|desde|elegir|fin|funcion|fun|global|hasta|mientras|repetir|regresar|retornar|retorno|ret|romper|si|sino|osi)\b/,
    'boolean' : /\b(?:cierto|verdadero|falso|nulo)/,
    'builtin' : /\b(?:poner|escribir|imprimir|leer|acadena|anumero|alogico|incluir|limpiar|tipo|imprimirf|error)/,
    'function': /(?!\d)\w+(?=\s*(?:[({]))/,
    'operator': [
        /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[~=]=?|\./,
        {
            // Match ".." but don't break "..."
            pattern: /(^|[^.])\.\.(?!\.)/,
            lookbehind: true
        }
    ],
    'punctuation': /[\[\](){},;]|\.+|:+/
};