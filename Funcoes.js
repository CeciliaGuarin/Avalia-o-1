function exer_1(){

    let preco = 0
    let valorbase = 0

    let metragem = Number(document.getElementById("metragem").value)
    let garagem = Number(document.getElementById("garagem").value)
    let andar = Number(document.getElementById("andar").value)
    let sol = Number(document.getElementById("sol").value)

    if(metragem == 1){
        preco = 300.000
        valorbase = 300.000
    }
    else if(metragem == 2){
        preco = 400.000
        valorbase = 400.000
    }
    else if(metragem == 3){
        preco = 500.000
        valorbase = 500.000
    }

    resultado = `o apartamento é ${preco} mil`

    if(garagem == 1){
        preco = preco + 0
    }
    else if(garagem == 2){
        preco = preco + 20.000
    }
    else if(garagem == 3){
        preco = preco + 40.000
    }

    resultado = `o apartamento é ${preco} mil`

    if(andar == 1){
        preco = preco + 10.000
    }
    else if(andar == 2){
        preco = preco + 20.000
    }
    else if(andar == 3){
        preco = preco + 30.000
    }

    resultado = `o apartamento é ${preco} mil`

    if(sol == 1){
       preco = preco + (5/100)*valorbase
    }
    else if(sol == 2){
        preco = preco + (8/100)*valorbase
    }

    resultado = `o apartamento é ${preco} mil`
    
    document.getElementById("resultado").innerHTML = resultado
}

function exer_2(){
    let opcao
    let porce
    let qtde1 = 0; let qtde2 = 0; let qtde3 = 0; let qtde4 = 0; let qtde5 = 0
    do {
        opcao = Number(prompt(`Informe \n 1- teams \n 2-Papel \n 3-WhatsAp \n 4-Email \n 5-Tanto faz \n 0-Sair`))
        switch(opcao){
            case 1: qtde1++; break
            
            case 2: qtde2++; break

            case 3: qtde3++; break
           
            case 4: qtde4++; break

            case 5: qtde5++; break
            
            case 0: alert(`Saindo`); break

            default: alert(`opção invalida`)
        }


    }
    while (opcao != 0){
    let total = qtde1 + qtde2 + qtde3 + qtde4 + qtde5 
    porce = (qtde5*total) /100
    }

    alert(`Opção 1 = ${qtde1} \n Opção 2 = ${qtde2} \n Opção 3 = ${qtde3} \n Opção 4 = ${qtde4} \n Opção 5 = ${qtde5} \n `)
    alert(`A porcentagem de "tanto faz" sobre os votos é de ${porce}`)
    
}