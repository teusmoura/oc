document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");
    const content = document.getElementById("main-content");

    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar a página");
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = "<h2>Erro ao carregar a página</h2><p>Por favor, tente novamente mais tarde.</p>";
            });
    }

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });
});
