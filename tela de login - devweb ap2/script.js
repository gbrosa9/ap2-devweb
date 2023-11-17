if (sessionStorage.getItem('coiso')){
    document.getElementById('secreta').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
} else {
    document.getElementById('secreta').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
}


const verificaSenha = () => {
    const entrada = document.getElementById("entrada").value;
    const senha = 'b70e2a0d855b4dc7b1ea34a8a9d10305';

    if (hex_md5(entrada) === senha){
        sessionStorage.setItem('coiso', 'qualquer valor');
        window.location = '/';
    } else {
        alert('Senha incorreta!');
    }
}

const limpaCoiso = () => {
    sessionStorage.removeItem('coiso');
    window.location = '/';
}

