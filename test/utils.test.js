const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {

            const aux = gerarNumeroAleatorio(1, 5);

            expect(aux.correto).toBe(1);
        });
 
        test('inicio nao pode ser negativo', () => {
            const aux = gerarNumeroAleatorio(20, -5);

            expect(aux.correto).toBe(-1);
        });
    
        test('inicio maior ou igual ao fim', () => {
            const aux = gerarNumeroAleatorio(20, 5);

            expect(aux.correto).toBe(-2);
        });
        
        test('O numero não é inteiro', () => {
            const aux = gerarNumeroAleatorio(4.5, 5);

            expect(aux.correto).toBe(-3);
        });

        test('Tudo Ok', () => {
            const aux = gerarNumeroAleatorio(1, 15);

            expect(aux.correto).toBe(1);
        });
       
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        test('comprimento diferente do real', () => {
            expect(acharCaracter(4, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });

        test('Tudo ok', () => {
            const aux = acharCaracter(4, 'abcd', 'c');

            expect(aux.encontrado).toBe("caracter encontrado");
            expect(aux.localizacao).toBe(2);
        });


    });    
});