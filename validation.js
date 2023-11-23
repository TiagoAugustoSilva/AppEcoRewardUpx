function logar(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "./dashboard.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}