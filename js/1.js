
    // Jumlah episode
    var totalEpisodes = 21;

    // Tangkap elemen tabs
    var tabsContainer = document.querySelector('.tabs');

    // Mendapatkan URL halaman saat ini
    var currentPageUrl = window.location.href;

    // Buat tab-episode secara dinamis
    for (var i = 1; i <= totalEpisodes; i++) {
        var episodeUrl = 'https://iqiyoo.blogspot.com/p/rene-' + i + '.html';

        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = 'Episode ' + i;

        // Jika URL halaman saat ini adalah URL tab, atur tab sebagai aktif
        if (currentPageUrl === episodeUrl) {
            tab.classList.add('active');
        }

        tabsContainer.appendChild(tab);
    }
