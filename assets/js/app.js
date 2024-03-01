
function criptografar() {
    var txt = document.getElementById('iptdata').value;

    document.getElementById("slimg").style.display = 'none';

    document.getElementById("slmsg").style.display = 'none';

    var tamscreen = window.innerWidth;
    alert(tamscreen);

    document.getElementById("btncopy").style.display = 'block';
    
    if (tamscreen < 376) {
        // o que vai mudar
        
        document.getElementById("sltablet").style.height = "595px";
        
        document.getElementById("second-layout-cripto").style.height = "432px";
        document.getElementById("second-layout-cripto").style.width = "279px";
        document.getElementById("second-layout-cripto").style.margin = "0px";

        document.getElementById("btncopy").style.display = "block";
        document.getElementById("btncopy").style.marginLeft = "0px";

        /*
            https://www.figma.com/file/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?type=design&node-id=16-802&mode=design&t=84tODcP6sHDbvOli-0        
        */
    }
    else if (tamscreen < 769) {
        alert("oi");

        document.getElementById("sltablet").style.height = "343px";

        document.getElementById("second-layout-cripto").style.width = "624px";
        document.getElementById("second-layout-cripto").style.height = "180px";
        document.getElementById("second-layout-cripto").style.marginLeft = "0px";

        document.getElementById("btncopy").style.width = "624px";
        document.getElementById("btncopy").style.height = "67px";
        document.getElementById("btncopy").style.padding = "24px";
        document.getElementById("btncopy").style.borderRadius = "24px";
        document.getElementById("btncopy").style.border = "1px";
        document.getElementById("btncopy").style.gap = "8px";
        document.getElementById("btncopy").style.marginLeft = "0px";
    }
    else {
        document.getElementById('btncopy').style.marginTop = '35px';
    }

    document.getElementById('second-layout-cripto').style.display = 'block';

    var txtm = txt.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat");

    document.getElementById('second-layout-cripto').value = txtm;
}

/* 
    Regra criptografia
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
*/

function descriptografar() {
    let txtm, txto;

    txtm = document.getElementById("iptdata").value;

    txto = txtm.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u");

    document.getElementById('second-layout-cripto').value = txto;
}

function copy() {
    var copytxt = document.getElementById('second-layout-cripto');

    copytxt.select();
    copytxt.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copytxt.value);
}