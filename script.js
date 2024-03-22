$(".botao1").click(function(){

    $(".c1").hide();
    $(".imagem p").attr("class", "text-center fs-5 formatacaoTexto");
    $(".imagem p").html(criptografia());

});

$(".botao2").click(function(){

    $(".c1").hide();
    $(".imagem p").attr("class", "text-center fs-5 formatacaoTexto");
    $(".imagem p").html(descriptografia());

});

$(".botao3").click(function(){

    copiarTexto();

});

function criptografia() {
    var texto = $(".texto").val();
    var criptografia = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "e") {
            criptografia += "enter";
        } else if (texto[i] == "i") {
            criptografia += "imes";
        } else if (texto[i] == "a") {
            criptografia += "ai";
        } else if (texto[i] == "o") {
            criptografia += "ober";
        } else if (texto[i] == "u") {
            criptografia += "ufat";
        } else {
            criptografia += texto[i];
        }
    }

    return criptografia;
}

function descriptografia() {
    var texto2 = $(".texto").val();
    var descriptografia = "";

    for(var x = 0; x < texto2.length; x++) {

        
    console.log("LETRA ATUAL: " + texto2[x]);

        if((texto2[x] + texto2[x+1] + texto2[x+2] + texto2[x+3] + texto2[x+4]) == "enter") {
            descriptografia += "e";
            x = x + 4;
        } else if ((texto2[x] + texto2[x+1] + texto2[x+2] + texto2[x+3]) == "imes") {
            descriptografia += "i";
            x = x + 3;
        } else if ((texto2[x] + texto2[x+1]) == "ai") {
            descriptografia += "a";
            x = x + 1;
        } else if ((texto2[x] + texto2[x+1] + texto2[x+2] + texto2[x+3]) == "ober") {
            descriptografia += "o";
            x = x + 3;
        } else if ((texto2[x] + texto2[x+1] + texto2[x+2] + texto2[x+3]) == "ufat") {
            descriptografia += "u";
            x = x + 3;
        } else {
            descriptografia += texto2[x];
        }
    }

    return descriptografia;
}

function copiarTexto() {
      
    var texto3 = $(".imagem p").html();

    navigator.clipboard.writeText(texto3);
      
    alert('Texto copiado para área de transferência ' + texto3);
    
}