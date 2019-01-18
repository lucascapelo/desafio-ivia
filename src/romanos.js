module.exports = { 
    transformaRomano: function (numero) {
        let numeroConvertido = '' //String que vai salvar o numero convertido em Romano
        let contador //contador que vai guardar o resto inteiro da divisao das casas decimais
        
        if(numero<1 && numero >4000)  //Se nao estiver no range de numeros existentes
            return "Numero fora do range existente"
        
        while(numero>0){  
            //basicamente irei isolar cada casa decimal testando quantas vezes eu a consigo dividir por cada Range
            //Caso aquela casa decimal nao seja mais divisivel, o "Numero" guardará o resto inteiro da divisão
            //E seguirá para o próximo range
            //Exemplo
            if(numero>=1000) {  //Checando se o número está dentro do Range 
                contador = parseInt(numero/1000) //meu contador recebe a parte inteira da divisão do número pelo Range 
                numero -= contador *1000 //Retira a parte contada do número operado 
                numeroConvertido += ('M'.repeat (contador)) //Insere a quantidade da letra daquele Range * o contador
            }
             //Essa mesma lógica segue para cada Range abaixo

             if(numero >= 900 && numero < 1000) {
                contador = parseInt(numero/900)
                numero -= contador * 900
               
                numeroConvertido += ('CM'.repeat (contador))
                
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
                
                numeroConvertido += ('L'.repeat (contador))
               
            }
                

            if(numero >= 40 && numero < 50){
                contador = parseInt(numero/40)
                numero -= contador *40
                numeroConvertido += ('XL'.repeat (contador))

            }
                
            if(numero >= 10 && numero < 40){
                contador = parseInt(numero/10)
                numero -= contador *10
                
                numeroConvertido += ('X'.repeat (contador))
                
            }
                

            if(numero == 9){
                contador = parseInt(numero/9)
                numero -= contador *9
                numeroConvertido += ('IX'.repeat (contador))
            }
                

            if(numero >= 5 && numero < 9){
                contador = parseInt(numero/5)
                numero -= contador *5
                
                numeroConvertido += ('V'.repeat (contador))
                
            }
                

            if(numero == 4){
                contador = parseInt(numero/4)
                numero -= contador *4
                numeroConvertido += ('IV'.repeat (contador))
            }
                

            if(numero >=1 && numero < 4) {   
                                             
                numeroConvertido += ('I'.repeat (numero))
                
                numero = 0
            }
                
        }

        
        return numeroConvertido

    }
}