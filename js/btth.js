// Jumlah episode
var totalEpisodes = 82;

// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Tangkap elemen iframe
var iframe = document.querySelector('.video-container iframe');

// Daftar URL video untuk setiap episode
var videoUrls = [
    "https://app.videas.fr/embed/media/44ee6163-0be8-4eb1-901f-313dad60607e/",
    "https://app.videas.fr/embed/media/c3be07b0-94bc-4e69-a737-2e45bbce4a6b/",
    "https://yt.com/embed/3",
    // tambahkan URL video lainnya di sini sesuai dengan jumlah episode
];

// Fungsi untuk mengubah sumber video
function changeVideoSource(videoUrl) {
    iframe.src = videoUrl;
}

// Buat tab-episode secara dinamis
for (var i = 80; i <= totalEpisodes; i++) {
    var episodeUrl = '../p/btth-' + i + '.html';

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    tab.textContent = ' ' + i;

    // Tambahkan event listener untuk setiap tab
    tab.addEventListener('click', function(event) {
        event.preventDefault(); // Menghindari perilaku default dari link

        // Panggil fungsi untuk mengubah sumber video dengan nomor episode yang sesuai
        var episodeNumber = parseInt(this.textContent.trim());
        var videoUrl = videoUrls[episodeNumber - 1];
        changeVideoSource(videoUrl);

        // Hapus kelas 'active' dari semua tab
        tabsContainer.querySelectorAll('a').forEach(function(tab) {
            tab.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke tab yang sedang diklik
        this.classList.add('active');
    });

    // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes('/rene-' + i + '.html')) {
        tab.classList.add('active');
        // Jika URL halaman saat ini cocok dengan URL tab, atur sumber video iframe sesuai dengan nomor episode
        var videoUrl = videoUrls[i - 1];
        changeVideoSource(videoUrl);
    }

    tabsContainer.appendChild(tab);
}
