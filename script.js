let tarefas = [];

function Tarefa(){
    const nome = document.getElementById("tarefa").value;
    const horas = Number(document.getElementById("horas").value);
    const valorHora = Number(document.getElementById("valor").value);
    const urgencia = Number(document.getElementById("urgencia").value);

    if (nome === "" || horas === 0 || valorHora === 0){
        alert("Preencha todos os campos!");
        return;
    }

    tarefas.push({
        nome,
        horas,
        valorHora,
        urgencia
    });

    document.getElementById("tarefa").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("valor").value = "";

    const normal = document.getElementById("lista-normal");
    const urgente = document.getElementById("lista-urgente");
    const muito = document.getElementById("lista-muito");

    if (urgencia === 0){
        normal.innerHTML += `<li>${nome} - ${horas}h</li>`;
    } else if (urgencia === 0.2){
        urgente.innerHTML += `<li>${nome} - ${horas}h</li>`;
    } else {
        muito.innerHTML += `<li>${nome} - ${horas}h</li>`;
    }
}

function gerarOrcamento(){
    let total = 0;

    document.querySelector("#tarefas").innerHTML = "";

    for (let t of tarefas){
        let valor = t.horas * t.valorHora * (1 + t.urgencia);
        total += valor;

        document.querySelector("#tarefas").innerHTML += 
        `<li>${t.nome} - R$ ${valor.toFixed(2)}</li>`;
    }

    let imposto = total * 0.3;
    let totalFinal = total + imposto;

    document.querySelector("h2:last-of-type").innerText = `R$ ${totalFinal.toFixed(2)}`;

    document.getElementById("orcamento").style.display = "block";

}