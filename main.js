document.addEventListener("DOMContentLoaded", function() {
  const rengo = document.querySelector('.rengo');
  const pipe = document.querySelector('.pipe');
  const nezuco = document.querySelector('.ne');

  nezuco.style.animation = 'none';

  const jump = () => {
    rengo.classList.add('jump');

    setTimeout(() => {
      rengo.classList.remove('jump');
    }, 500);
  };

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(rengo).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      rengo.style.animation = 'none';
      rengo.style.bottom = `${marioPosition}px`

      nezuco.style.animation = 'nezu 0.5s';

      // Move a chamada da função setTimeout para dentro da condição
      setTimeout(() => {
        rengo.src = "img/ren_stop.png";
        rengo.style.width = '125px';
        rengo.style.marginLeft = '50px';

        nezuco.style.animation = 'none';
        nezuco.remove();
      }, 500);
    }
  }, 10);

  document.addEventListener('keydown', jump);
});

