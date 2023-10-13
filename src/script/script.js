$(document).ready(function(){
    $('.avaliacoes').slick({
      slidesToShow: 3, // Exibe 3 imagens por vez
      slidesToScroll: 3, // Percorre 3 imagens por vez
      autoplay: true, // Ativa o carrossel automático
      autoplaySpeed: 2000, // Velocidade de transição entre os slides (em milissegundos)
      infinite: true, // Permite que o carrossel repita infinitamente
      prevArrow: false, // Remove o botão "Previous"
      nextArrow: false, // Remove o botão "Next"
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".list .item");

    let index = 0;

    function showNextItem() {
        if (index < items.length) {
            items[index].classList.add("active");
            index++;
            setTimeout(showNextItem, 300); 
        }
    }

    showNextItem();
});

document.addEventListener("DOMContentLoaded", function () {
    const cardAvaliacoes = document.querySelectorAll(".card-avaliacao");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.7) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate");
            }
        });
    }, options);

    cardAvaliacoes.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const blocos = document.querySelectorAll('.bloco');
  const botaoLerMais = document.getElementById("ler-mais");
  const botaoLerMenos = document.getElementById("ler-menos");

  // Defina a quantidade inicial de blocos visíveis
  let blocosVisiveis = 3;

  function mostrarBlocos() {
      for (let i = 0; i < blocos.length; i++) {
          if (i < blocosVisiveis) {
              blocos[i].style.display = "block";
          } else {
              blocos[i].style.display = "none";
          }
      }
  }

  mostrarBlocos();

  botaoLerMais.addEventListener("click", function () {
      blocosVisiveis += 3; // Mostra mais 3 blocos
      mostrarBlocos();

      // Se todos os blocos estiverem visíveis, oculte o botão "Ler Mais"
      if (blocosVisiveis >= blocos.length) {
          botaoLerMais.style.display = "none";
          botaoLerMenos.style.display = "inline-block"; // Mostra o botão "Ler Menos"
      }
  });

  botaoLerMenos.addEventListener("click", function () {
      blocosVisiveis = 3; // Redefine a quantidade de blocos visíveis
      mostrarBlocos();

      botaoLerMais.style.display = "inline-block"; // Mostra o botão "Ler Mais"
      botaoLerMenos.style.display = "none"; // Oculta o botão "Ler Menos"
  });
});






  