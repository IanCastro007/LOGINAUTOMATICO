function logar(){
    var usuario = document.getElementById("inputUsuario").value;
    var senha = document.getElementById("InputSenha").value;

    if(usuario =="adimin" && senha == "1234") {
        window.location.href= "page2.html"
    } else{
        alert("Usuario/Senha está incorreto! Tente novamente")


    }
}


function calcular() {
    //Variáveis
        var nota1 = parseInt(document.getElementById('nota1').value);
        var nota2 = parseInt(document.getElementById('nota2').value);
        var nota3 = parseInt(document.getElementById('nota3').value);
        var nota4 = parseInt(document.getElementById('nota4').value);
        var media = (nota1 + nota2 + nota3 + nota4) / 4 
    
    
    
    
    
    
    
    
        //Concatenar - Texto + variável 
        document.getElementById('NotaResultado1').innerHTML = "nota1:  " + nota1
        document.getElementById('NotaResultado2').innerHTML = "nota2:  " + nota2 
        document.getElementById('NotaResultado3').innerHTML = "nota3:  " + nota3
        document.getElementById('NotaResultado4').innerHTML = "nota4:  " + nota4
        
        if(media >= 7){
            document.getElementById("mediaAluno").innerHTML = "Aprovado"
        } else{
            document.getElementById("mediaAluno").innerHTML = "Reprovado"
        }

   


    
    
    
    }
