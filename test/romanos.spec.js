import { expect } from 'chai'

let romanos_func = require('../src/romanos')

console.log('romano: ', romanos_func.transformaRomano(2000))


describe('Romanos', () => {
    it('Deve retornar MM', () => {
        let romano = romanos_func.transformaRomano(2000)
        expect(romano).to.equal('MM')
    })

    it('Deve retornar CMLXXVII', () => {
        let romano = romanos_func.transformaRomano(977)
        expect(romano).to.equal('CMLXXVII')
    })

    it('Deve retornar DLXIX', () => {
        let romano = romanos_func.transformaRomano(569)
        expect(romano).to.equal('DLXIX')
    })

    it('Deve retornar CMXXIII', () => {
        let romano = romanos_func.transformaRomano(923)
        expect(romano).to.equal('CMXXIII')
    })

    it('Deve retornar XXVIII', () => {
        let romano = romanos_func.transformaRomano(28)
        expect(romano).to.equal('XXVIII')
    })
})