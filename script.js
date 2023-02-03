const textBoxEncriptar=document.querySelector(".listBox-Encriptar");
const textBoxMensajes=document.querySelector(".textBox-Mensajes");

function funcBtnEncriptar(){
	// body...
	const textoEncriptado=funcEncriptar(textBoxEncriptar.value);
	textBoxMensajes.value=textoEncriptado;

}

function funcEncriptar(stringEncriptar){
	let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","olves"],["u","ui"]];
	
	/*stringEncriptar=stringEncriptar.toLowerCase();*/

	for (let i = 0 ; i < matrizCodigo.length ; i++) {
	
		if (stringEncriptar.includes(matrizCodigo[i][0])){
			stringEncriptar=stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
		}	
	}
	return stringEncriptar;
}
