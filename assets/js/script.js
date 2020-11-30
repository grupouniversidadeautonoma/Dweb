// Obter o modal
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');

// Quando o utilizador clica fora do modal ele fecha-se
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
	if (event.target == modal2) {
        modal2.style.display = "none";
    }
	if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

//Função que seleciona os filmes favoritos
function mudarCor(obj){
	
  if(obj.style.backgroundColor == "rgb(240, 0, 0)"){
    obj.style.backgroundColor = "rgb(255, 255, 255)";
  }else{
    obj.style.backgroundColor = "rgb(240, 0, 0)";
  }
}

//-------------------validar login da área reservada-------------------------------------------
function validaUser(){
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    if (email.value === "david@gmail.com"){
      
      if (pass.value === "123"){
        console.log(email + "Entrou na sessão!")
        window.open("admn.html")

        return ;
      }
    }
    alert("Login falhou!");
    email.style.borderColor="#f00"
    pass.style.borderColor="#f00"
  }

//------------------------------------utilizador registado localmente---------------------------------------------

const userLogin = [
{
  nome: "Laércio",
  apelido:"Cruvinel",
  cc: "123456789YH0",
  morada:"Avenida de Roma",
  telemovel:"923123456",
  emailLogin:"lcr@gmail.com",
  passLogin:"ual123",
  //sexo:"masculino"
}
]

//-------------------função do login--------------------------------------------------------------------------------------
function login(){
  const emailLogin = document.getElementById("emailLogin").value
  const passLogin = document.getElementById("passLogin").value
  
  //percorre os objetos todos e confirma se o utilizador está registado e os dados estão corretos
  for(i=0;i<userLogin.length;i++){
    if(emailLogin==userLogin[i].emailLogin && passLogin==userLogin[i].passLogin){
      console.log(emailLogin + "Entrou na sessão!")
      alert("Login Bem sucedido")
	  showH();
	  hideLog();
	  showLogout();
	  return;
      

    }else{
      alert("Utilizador não existe. Verifique os seus dados.")
      console.log("Utilizador não existe. Verifique os seus dados.")
      emailLogin.style.borderColor="#f00"
      passLogin.style.borderColor="#f00"
    }
  }
}
//------------------função do registar-----------------------------------------------------------------------------
function registarUser(){
  const nomeRegistar = document.getElementById("nomeRegistar").value
  const apelidoRegistar = document.getElementById("apelidoRegistar").value
  const ccRegistar = document.getElementById("ccRegistar").value
  const moradaRegistar = document.getElementById("moradaRegistar").value
  const telemovelRegistar = document.getElementById("telemovelRegistar").value
  const emailRegistar = document.getElementById("emailRegistar").value
  const passRegistar = document.getElementById("passRegistar").value
 /* const sexoMRegistar = document.getElementById("sexoMRegistar").value
  const sexoFRegistar = document.getElementById("sexoFRegistar").value*/
 
 //criar um utilizador novo
  const userNovo={
    nome:nomeRegistar,
    apelido:apelidoRegistar,
    cc:ccRegistar,
    morada:moradaRegistar,
    telemovel:telemovelRegistar,
    emailLogin:emailRegistar,
    passLogin:passRegistar
    //sexo:
  }  
  
//percorre a lista a ver se já existe um utilizador com este nome
for(i=0; i<userLogin[i].length;i++){
  if(userNovo==userLogin[i].emailLogin){
    alert("Este utilizador já existe!, por favor escolha outro nome")
    return;
  }
}
  userLogin.push(userNovo)
  console.log(userLogin)
}

//--------------------------------------------------------------------------------------

function showHide(){
  var x = document.getElementById("passLogin");
  
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showH(){
  var x = document.getElementById("te");
  
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function hideLog(){
  var x = document.getElementById("demo");
  var y = document.getElementById("demo1");
  var z = document.getElementById("demo2");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
  
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
  
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
  
}

function showLogout(){
  var log = document.getElementById("demo3");
  
  if (log.style.display === "none") {
    log.style.display = "block";
  } else {
    log.style.display = "block";
  }
  
}


function showHide2(){
  var x = document.getElementById("pass");
  
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showAtor(){
	document.getElementById('atoresUser').style.display = 'block';
}

function showRealizador(){
	document.getElementById('realizadoresUser').style.display = 'block';
}

function showEstudio(){
	document.getElementById('estudiosUser').style.display = 'block';
}

function showCinema(){
	document.getElementById('cinemasUser').style.display = 'block';
}

function showFilme(){
	document.getElementById('filmesUser').style.display = 'block';
}