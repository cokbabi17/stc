// Jumlah episode
    var totalEpisodes = 104;

    // Tangkap elemen tabs
    var tabsContainer = document.querySelector('.tabs');

    // Mendapatkan URL halaman saat ini
    var currentPageUrl = window.location.href;

    // Buat tab-episode secara dinamis
    for (var i = 1; i <= totalEpisodes; i++) {
        var episodeUrl = 'https://iqiyoo.blogspot.com/p/ss-' + i + '.html';

        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = ' ' + i;

        // Jika URL halaman saat ini adalah URL tab, atur tab sebagai aktif
        if (currentPageUrl === episodeUrl) {
            tab.classList.add('active');
        }

        tabsContainer.appendChild(tab);
    } 
