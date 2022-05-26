function cript() {
  const mensagem = document.getElementById("textoutput");
  const text = document.getElementById("textinput");




  const txtencript = encript(text.value);
  mensagem.value = txtencript;
}

function encript(stringEncriptada) {
  
  let text = document.getElementById("textinput");
 
  if(text.value.length == 0){
    document.getElementById('textoutput').innerHTML = "nenhum texto encontrado";
  }
  else{
     document.getElementById('textoutput').classList.add('bg-none')
   } 
  
  let matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  let encriptedString = "";

  for (var i = 0; i < stringEncriptada.length; i++) {
    let hasCharToEncript = true;

    matrizCodigo.forEach((encriptCode) => {
      if (stringEncriptada.charAt(i) === encriptCode[0]) {
        encriptedString += encriptCode[1];
        hasCharToEncript = false;
      }
    });

    if (hasCharToEncript) encriptedString += stringEncriptada.charAt(i);
  }

  return encriptedString;
  

}

function descript(){
 
  const texto = document.getElementById("textinput").value;
  const textoOutput = document.getElementById("textoutput");
  

  const txtdesncript = texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
  textoOutput.value = txtdesncript;
  
  const popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  window.setTimeout(countdown, 7000);
}
  function countdown (){
    const txt_inp = document.getElementById("textinput");
    const txt_out = document.getElementById("textoutput");
    
    txt_inp.value = "";
    txt_out.value = "";
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }  

async function copiar() {
  const texto = document.getElementById("textoutput").value;
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
texto.value= "";
  
}




