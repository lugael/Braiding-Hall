var usuario = [];
var ecafe =[];
var csala = [];
var rclientes =[];


  function cadastrarCliente() {

      usuario.push({
        nome: $("#Pnome").val(),
        sobrenome: $("#Snome").val()
      })

      $("#Pnome, #Snome").val(null)
    console.log(usuario)
}
   function cadastrarNsala() {
     csala.push({
       salac: $("#Sala").val(),
       slotacao: $("#lotacaoS").val(),
     })

    $("#Sala,#lotacaoS").val(null)
  console.log(csala)

}

   function cadastrarEcafe() {

    ecafe.push({
     ncafe: $("#Ncafe").val(),
     lotacaof: $("#lotacaoCf").val(),
   })

    $("#Ncafe,#lotacaoCf").val(null)
   console.log(ecafe)
 }

function selecao(evt, selb) {


  var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(selb).style.display = "block";
  evt.currentTarget.className += " active";
}

//function Bcliente(){

  //  rclientes.push({
//    cliente: $("#Buscacliente").val()
//    })

  //  $("#Buscacliente").val(null)
//  console.log(rclientes)
  //usuario.forEach(log);

//}

 //function search() {
  // console.log(3)

  //if (usuario.indexOf>=0)
  //   return "está no indece"+usuario.indexOf;
  //else
  //return"não esta"
  //console.log(4)


  //}
//  function Bcliente() {
//    var item = document.getElementById('txt').value;
//    if (usuario.indexOf(item) > -1) {
//      alert("Encontrou");
//    } else {
//      alert("Não encontrou");
//    }
//  }
// const verifica = (item) => {
//    const usuario;
//    usuario.includes(item) ? alert("Encontrou") : alert("Não encontrou");
// }
