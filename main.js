
        const palavras = ["Elohim", "RAEL", "Yahweh", "Objetivo", "Polêmica"];
        let intervaloDigitacao;

        function toggleSearch() {
            const searchBox = document.getElementById('searchBox');
            const searchInput = document.getElementById('searchInput');
            
            clearInterval(intervaloDigitacao); 
            searchBox.classList.toggle('active');
            
            if (searchBox.classList.contains('active')) {
                searchInput.focus();
                /
                const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
                digitarPalavra(searchInput, palavraSorteada);
            } else {
                searchInput.value = ""; 
            }
        }

        
        function digitarPalavra(input, texto) {
            input.value = "";
            let index = 0;
            
            intervaloDigitacao = setInterval(() => {
                if (index < texto.length) {
                    input.value += texto.charAt(index);
                    index++;
                } else {
                    clearInterval(intervaloDigitacao);
                }
            }, 150); 
        }