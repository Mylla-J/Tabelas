document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("questionForm");
    const tableBody = document.getElementById("tableBody");
    const recordCount = document.getElementById("recordCount");
    const button = form.querySelector("button");
    
    button.addEventListener("click", function () {

        const name = document.getElementById("name").value.trim();
        const constellation = document.getElementById("constellation").value.trim();
        const planet = document.getElementById("planet").value.trim();
        
        if (name === "" || constellation === "" || planet === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${constellation}</td>
            <td>${planet}</td>
        `;
        
        tableBody.appendChild(newRow);
        
  
        recordCount.textContent = tableBody.rows.length;
        

        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const tabela = document.querySelector("table");
    const cabecalhos = tabela.querySelectorAll("th");
    let ordemAscendente = true; // Alterna entre crescente e decrescente

    cabecalhos.forEach((cabecalho, coluna) => {
        cabecalho.addEventListener("click", () => ordenarTabela(coluna));
    });

    function ordenarTabela(coluna) {
        const corpoTabela = document.getElementById("tableBody");
        const linhas = Array.from(corpoTabela.rows);

        linhas.sort((a, b) => {
            let valorA = a.cells[coluna].textContent.trim().toLowerCase();
            let valorB = b.cells[coluna].textContent.trim().toLowerCase();
            
            return ordemAscendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
        });

        ordemAscendente = !ordemAscendente; // Alterna a ordem

        // Reanexa as linhas ordenadas
        corpoTabela.innerHTML = "";
        linhas.forEach(linha => corpoTabela.appendChild(linha));
    }
});


