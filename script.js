function carregar(){
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = "fotomanha.jpg";
        document.body.style.background = "#fee65e";
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = "fototarde.jpg";
        document.body.style.background = "#dce1e5";
    } else{
        // BOA NOITE!
        img.src = "fotonoite.jpg";
        document.body.style.background = "#1a3552";
    }
}