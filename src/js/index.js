window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

// Função para voltar ao topo
document.getElementById('backToTop').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave
    });
};

const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.nav');

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

