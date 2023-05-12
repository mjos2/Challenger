"use strict";
const textArea = document.querySelector(".textDigitado");
const mensagem = document.querySelector(".textCodigo");
const boneco = document.querySelector(".boneco");
const botaoCopiar = document.querySelector(".btnCopiar");
const entrada = textArea.addEventListener("input", erro)



function erro(event){
  const regex= /^[a-zA-Z]+$/
  const textodatextarea = event.target.value
  if(!regex.test(textodatextarea)){
    event.target.value = textodatextarea.replace(/[^a-z A-Z]+/g,"")
    alert("Digite um valor válido !");
  }
}


function btnCopiar(){
  var textoCopiado = document.querySelector(".textCodigo");
  textoCopiado.select();
  document.execCommand("copy");
}


function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
  boneco.style.display = "none";
  botaoCopiar.style.display = "inline-block";
}

function encriptar(stringEncriptada){
  
  let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"],["u" , "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}


function btnDesencriptar(){
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada){
  
  let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"],["u" , "ufat"]];  
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

document.addEventListener("DOMContentLoaded", function(){
  var txtarea = document.querySelector(".textCodigo");
  txtarea.style.height = txtarea.scrollHeight+"px";
});