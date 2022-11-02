function carregar(){

    const msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
        if (hora >= 0 && hora < 12) {
            img.src = 'foto-manha.jpg'
            document.body.style.background = '#DEB887'
        }
        else if (hora >= 12 && hora < 18) {
            img.src = 'foto-tarde.jpg'
            document.body.style.background = '#8B4513'	
        }
        else {
            img.src = 'foto-noite.jpg'
            document.body.style.background = '#191970'	
        }
    }

