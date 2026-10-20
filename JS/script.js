const modal = document.getElementById('modal');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const fechar = document.getElementById('fechar');
const fotos = document.querySelectorAll('.foto');

function abrirImagem(event) {
	const foto = event.currentTarget;
	imagemAmpliada.src = foto.dataset.imagem;
	imagemAmpliada.alt = foto.querySelector('img').alt;
	modal.classList.add('aberto');
	modal.setAttribute('aria-hidden', 'false');
}

function fecharImagem() {
	modal.classList.remove('aberto');
	modal.setAttribute('aria-hidden', 'true');
	imagemAmpliada.src = '';
}

fotos.forEach((foto) => foto.addEventListener('click', abrirImagem));
fechar.addEventListener('click', fecharImagem);

modal.addEventListener('click', (event) => {
	if (event.target === modal) fecharImagem();
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') fecharImagem();
});
