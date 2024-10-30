const {
    ehPalindromo 
} = require("../src/index");

describe ("Teste do módulo ehPalindromo", () => {
    test("Deveria verificar se a palavra é a mesma ao contrário", () => {
        expect(ehPalindromo('arara' )).toBe(true);
    })

    test("Deveria retornar falso para palavras que não são palindromos", () => {
        expect(ehPalindromo('amor' )).toBe(false);
    })
})

