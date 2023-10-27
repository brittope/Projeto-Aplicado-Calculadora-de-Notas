let nota_final_t;
let nota_final

var tipo = document.getElementById("tipo").value
var ap1 = parseFloat(document.getElementById("nota1").value)
var ap2 = parseFloat(document.getElementById("nota1").value)
var ac = parseFloat(document.getElementById("nota3").value)

if (tipo === "sim") {
    nota_final_t = (ap1 * 4 + ap2 * 2 + ac * 4);
}
else { 
    nota_final_t = (ap1 * 4 + ap2 * 2 + ac * 4);
}





function notaf() {
  if (tipo === "sim") {
    if (nota_final_t >= 30 && nota_final_t < 70) {
      var as = parseFloat(document.getElementById("nota4").value)
      if (ap1 > ap2) {
        nota_final = (ap1 * 4 + as * 2 + ac * 4)
        if (nota_final >= 70){
          alert('APROVADO')
        }
        else{
          alert('REPROVADO')
        }
      }
      else {
        nota_final = (as * 4 + ap2 * 4 + ac * 2)
        if (nota_final >= 70){
          alert('APROVADO')
        }
        else{
          alert('REPROVADO')
        }
      }
    } 
    else if (nota_final_t < 30) {
      alert('REPROVADO')
    }
    else{
      alert('APROVADO')
    }
  } 
  else {
    if (nota_final_t >= 30 && nota_final_t < 70) {
      var as = parseFloat(document.getElementById("nota4").value)
      if (ap1 > ap2) {
        nota_final = (ap1 * 4 + as * 2 + ac * 4)
        if (nota_final >= 70){
          alert('APROVADO')
        }
        else{
          alert('REPROVADO')
        }
      }
      else {
        nota_final = (as * 4 + ap2 * 4 + ac * 2)
        if (nota_final >= 70){
          alert('APROVADO')
        }
        else{
          alert('REPROVADO')
        }
      }
    } 
    else if (nota_final_t < 30) {
      alert('REPROVADO')
    }
    else{
      alert('APROVADO')
    }
  }
}