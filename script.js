function Tarefa(){
    const nome = document.getElementById("tarefa").value;
    const horas = document.getElementById("horas").value;
    const urgencia = Number(document.getElementById("urgencia").value);

    if (nome === "" || horas === ""){
        alert("Preencha os campos!!");
        return;
    }

    document.getElementById("tarefa").value = "";
    document.getElementById("horas").value = "";

    const normal = document.getElementById("lista-normal");
    const urgente = document.getElementById("lista-urgente");
    const muito = document.getElementById("lista-muito");

    if (urgencia === 0){
        normal.innerText += `${nome} - ${horas}\n`;
    }else if (urgencia === 0.2){
        urgente.innerText += `${nome} - ${horas}\n`;
    }else {
        muito.innerText += `${nome} - ${horas}\n`;
    }
}
function gerarOrcamento(){
}