function validar2(){
	if(document.form.nome.value == ""){
		alert('Favor preeencher o campo nome!');
		document.form.nome.focus();
		return;
	}

	if(document.form.email.value == ""){
		alert('Favor preeencher o nome e-mail!');
		document.form.email.focus();
		return;
	}

	if(document.form.assunto.value=""){
		alert('Favor preeencher o campo assunto!');
		document.form.assunto.focus();
		return;
	}

	if(document.form.mensagem.value ==""){
		alert('Favor preencher o campos mensagem!');
		document.form.mensagem.focus();
		return;
	}

	document.form.action="resposta.html";
	document.form.submit();
}


function voltar(){
	history.back();
}




function validar3(){
	var msgE = 'Favor preeencher o campo';

	if(document.getElementById('nome').value == '' ){
		//document.getElementById('nome').focus();
		mostrarMensagemErro(msgE, 'nome');
		return;

	}

	if(document.getElementById('email').value == ''){
		//document.getElementById('email').focus();
		mostrarMensagemErro(msgE, 'email');
		return;
	}

	if(document.getElementById('assunto').value == ''){
		//document.getElementById('assunto').focus();
		mostrarMensagemErro(msgE, 'assunto');
		return;
	}

	if(document.getElementById('mensagem').value == ''){
		//document.getElementById('mensagem').focus();
		mostrarMensagemErro(msgE, 'mensagem');
		return;
	}

	document.form.action="resposta.html";
	document.form.submit();

}


function mostrarMensagemErro(msgE, nomeCampo){
	document.getElementById(nomeCampo).focus();
	//alert(msgE  + ' ' + nomeCampo + '!');
	var campoMSG = document.getElementById('mensagemErro');
	campoMSG.style.display ="block";
	campoMSG.innerHTML = msgE + ' ' + nomeCampo + '!';
	campoMSG.style.background='red';
	campoMSG.style.color='#ffffff';
}


function mudarCor(valor){
	console.log(valor);
	var campoFormulario = document.getElementsByClassName('formulario')[0];
	var campoCores = document.getElementsByClassName('cores')[0];


	if(valor ==1){
		campoFormulario.style.background = "#666";
		campoCores.style.background = "#333"
	}

	if(valor ==2){
		campoFormulario.style.background = "blue";
		campoCores.style.background = "#20068a";
	}

	if(valor ==3){
		campoFormulario.style.background = "red";
		campoCores.style.background = "#952b2b";
	}

	if(valor ==4){
		campoFormulario.style.background = "green";
		campoCores.style.background = "#0b5026"; 
	}

}
