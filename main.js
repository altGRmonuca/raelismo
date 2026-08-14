function toggleSearch() {
            const searchBox = document.getElementById('searchBox');
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                searchBox.querySelector('.search-input').focus();
            }
        }