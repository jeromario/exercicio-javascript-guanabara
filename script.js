function carregar(){
    let agora = document.getElementById('msg');
    let img = document.getElementById('imagem');
    hora = new Date();
    hoje = hora.getHours();
    
    
    agora.innerHTML = `Agora são ${hoje} horas`;
    if (hoje >= 0 && hoje < 12){
        img.setAttribute('src','fotomanha.jpg');
        document.body.style.background = '#e2cd9f';
    }else if(hoje >=12 && hoje < 18){
        img.setAttribute('src','fototarde.jpg');
        document.body.style.background = '#b9846f';
    }else{
        img.setAttribute('src','fotonoite.jpg');
        document.body.style.background = '#515154';
    }
}
