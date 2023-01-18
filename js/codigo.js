const bnt_c_encri=document.getElementById("btn_encrip");
const bnt_c_desencri=document.getElementById("btn_desencrip");
const bnt_c_copia=document.getElementById("btn_copia");
const text_entrada=document.getElementById("entrada");
const text_salida=document.getElementById("salida");


function encriptar(){

    let texto=text_entrada.value.toLowerCase()
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    var descarte = /^[a-zA-Z ]+$/;
    if(descarte.test(texto)){ 
        text_salida.value=texto;
        text_entrada.value="";
        document.getElementById("img_salida").style.visibility="hidden";
        document.getElementById("texto_de_salida").style.visibility="hidden";
        document.getElementById("salida").style.visibility="visible";
        document.getElementById("btn_copia").style.visibility="visible";
        document.getElementById("entrada").style.backgroundColor="#c5e1a5";
        document.getElementById("parrafo").style.backgroundColor="#7cb342";
    }else { 
        document.getElementById("entrada").style.backgroundColor="#ef5350";
        document.getElementById("parrafo").style.backgroundColor="#e57373";

    }       
}

function desencriptar(){
 
    let texto=text_entrada.value.toLowerCase()
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    text_salida.value=texto;
    text_entrada.value="";
    document.getElementById("img_salida").style.visibility="hidden";
    document.getElementById("texto_de_salida").style.visibility="hidden";
    document.getElementById("salida").style.visibility="visible";
    document.getElementById("btn_copia").style.visibility="visible";

}

function copiar(){
    let texto=text_salida.value;
    navigator.clipboard.writeText(texto);
    text_salida.value="";
    document.getElementById("salida").style.visibility="hidden";
    document.getElementById("btn_copia").style.visibility="hidden";
    document.getElementById("img_salida").style.visibility="visible";
    document.getElementById("texto_de_salida").style.visibility="visible";
    document.getElementById("entrada").focus();

}

bnt_c_encri.onclick=encriptar;
bnt_c_desencri.onclick=desencriptar;
bnt_c_copia.onclick=copiar;




