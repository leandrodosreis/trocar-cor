"use strict"
 //aviso para o navegador cobrar mais do codigo

/*
nome = 'fernando' //string
idade = 13 //int
aprovado = false //booleano
aprovado =[] //list
teste = {} //
fn = function(){} //função
*/

// a variavel esta pegando o elemento pelo id
const botaoTrocarCor = document.getElementById('botao-trocar-cor')

const botaoVerde = document.getElementById('botao-verde')

const botaoVermelho = document.getElementById('botao-vermelho')


function trocarCor(){
    

    const corUsuario = document.getElementById('cor-usuario').value

    // avisando que o documento e a var color-bg vire a cor denominada pelo usuario
    document.documentElement.style.setProperty('--color-bg' , corUsuario)

    

}

function verde(){

    const corVerde = document.getElementById('botao-verde')

    document.documentElement.style.setProperty('--color-bg-vermelho', corVerde)

}

// observando e direcionando para trocarCor com click
botaoTrocarCor.addEventListener('click' , trocarCor)

botaoVerde.addEventListener('click' , verde)

botaoVermelho.addEventListener('click' , trocarCor)