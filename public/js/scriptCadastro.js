function cadastrar(){
    let nome = document.querySelector("#IDnome").value
    let cpf = document.querySelector("#IDcpf").value
    let data = document.querySelector("#IDdata").value
    let tel = document.querySelector("#IDtel").value
    let email = document.querySelector("#IDemail").value
    let senha = document.querySelector("#IDsenha").value

    console.log(nome, cpf, data, tel, email, senha)
    
}

let a = document.querySelector("#IDbusca").addEventListener("keyup", pesquisar);
function pesquisar(){
    let x = document.getElementById("IDbusca");
    x.value = x.value.toUpperCase();
    document.getElementById("resultado").href = `/pesquisar/${x.value}`
    console.log(x.value)
}