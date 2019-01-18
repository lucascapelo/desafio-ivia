module.exports = { 
    transformaRomano: function (numero) {
        let numeroConvertido = ''
        let contador
        if(numero<1 && numero >4000)  
            return "Numero fora do range existente"
        while(numero>0){
            
            if(numero>=1000) {
                contador = parseInt(numero/1000)
                numero -= contador *1000
                numeroConvertido += ('M'.repeat (contador))
            }
                
             if(numero >= 900 && numero < 1000) {
                contador = parseInt(numero/900)
                numero -= contador * 900
                console.log('numero: ', numero)
                numeroConvertido += ('CM'.repeat (contador))
                console.log('numeroConvertido: ', numeroConvertido)
            }

            if(numero>=500 && numero < 900){
                contador = parseInt(numero/500)
                numero -= contador *500
                numeroConvertido += ('D'.repeat (contador)) 
            }
               
                
            if(numero >= 400 && numero < 500){
                contador = parseInt(numero/400)
                numero -= contador *400
                numeroConvertido += ('CD'.repeat (contador)) 
            }
                

            if(numero >= 100 && numero < 400){
                contador = parseInt(numero/100)
                numero -= contador *100
                numeroConvertido += ('C'.repeat (contador)) 
            }
               

            if(numero >= 90 && numero < 100){
                contador = parseInt(numero/90)
                numero -= contador *90
                numeroConvertido += ('XC'.repeat (contador))
            }
                

            if(numero >= 50 && numero < 90){
                contador = parseInt(numero/50)
                numero -= contador *50
                console.log('numero: ', numero)
                numeroConvertido += ('L'.repeat (contador))
                console.log('numeroConvertido: ', numeroConvertido)
            }
                

            if(numero >= 40 && numero < 50){
                contador = parseInt(numero/40)
                numero -= contador *40
                numeroConvertido += ('XL'.repeat (contador))

            }
                
            if(numero >= 10 && numero < 40){
                contador = parseInt(numero/10)
                numero -= contador *10
                console.log('numero: ', numero)
                numeroConvertido += ('X'.repeat (contador))
                console.log('numeroConvertido: ', numeroConvertido)
            }
                

            if(numero == 9){
                contador = parseInt(numero/9)
                numero -= contador *9
                numeroConvertido += ('IX'.repeat (contador))
            }
                

            if(numero >= 5 && numero < 9){
                contador = parseInt(numero/5)
                numero -= contador *5
                console.log('numero: ', numero)
                numeroConvertido += ('V'.repeat (contador))
                console.log('numeroConvertido: ', numeroConvertido)
            }
                

            if(numero == 4){
                contador = parseInt(numero/4)
                numero -= contador *4
                numeroConvertido += ('IV'.repeat (contador))
            }
                

            if(numero >=1 && numero < 4) {   
                console.log('numero: ', numero)                             
                numeroConvertido += ('I'.repeat (numero))
                console.log('numeroConvertido: ', numeroConvertido)
                numero = 0
            }
                
        }

        console.log(numeroConvertido)
        return numeroConvertido

    }
}