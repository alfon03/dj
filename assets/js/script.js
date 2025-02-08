document.addEventListener("DOMContentLoaded", function () {
  // Datos de las canciones destacadas
  const cancionesDestacadas = [
    {
      id: "song1",
      nombre: "Canción 1",
      subtitulo: "Artista - Álbum",
      ruta: "assets/music/mezcla1.mp3",
      imagen: "https://via.placeholder.com/300",
    },
    {
      id: "song2",
      nombre: "Canción 2",
      subtitulo: "Artista 2 - Álbum 2",
      ruta: "assets/music/martin.mp3",
      imagen:
        "https://los40pa00.epimg.net/los40/imagenes/2017/10/26/wdm/1509030930_334035_1509031224_noticia_normal.jpg",
    },
    {
      id: "song3",
      nombre: "Canción 3",
      subtitulo: "Artista 2 - Álbum 2",
      ruta: "assets/music/mezcla2.mp3",
      imagen:
        "https://los40pa00.epimg.net/los40/imagenes/2017/10/26/wdm/1509030930_334035_1509031224_noticia_normal.jpg",
    },
    {
      id: "song5",
      nombre: "Canción 3",
      subtitulo: "Artista 2 - Álbum 2",
      ruta: "assets/music/mezcla2.mp3",
      imagen:
        "https://los40pa00.epimg.net/los40/imagenes/2017/10/26/wdm/1509030930_334035_1509031224_noticia_normal.jpg",
    },
  ];

  function cargarCancionesDestacadas() {
    const contenedor = document.getElementById("cancionesDestacadas");
    contenedor.innerHTML = "";

    cancionesDestacadas.forEach((cancion) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.innerHTML = `
        <div class="card bg-dark text-white mt-3">
          <img src="${cancion.imagen}" class="card-img-top" alt="Portada de ${cancion.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${cancion.nombre}</h5>
            <p class="card-text">${cancion.subtitulo}</p>
            <audio id="audioPlayer-${cancion.id}" src="${cancion.ruta}" hidden></audio>
            <div class="controls">
              <span class="material-symbols-outlined" id="rewind-${cancion.id}" title="Rebobinar">fast_rewind</span>
              <span class="material-symbols-outlined play-btn" id="playPause-${cancion.id}" title="Reproducir/Pausar">play_arrow</span>
              <span class="material-symbols-outlined" id="forward-${cancion.id}" title="Avanzar">fast_forward</span>
            </div>
            <div class="progress mt-2">
              <div class="progress-bar" id="progressBar-${cancion.id}" style="width: 0%" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p id="time-${cancion.id}">0:00</p>
          </div>
        </div>
      `;
      contenedor.appendChild(card);

      document
        .getElementById(`playPause-${cancion.id}`)
        .addEventListener("click", function () {
          togglePlayPause(cancion.id);
        });
      document
        .getElementById(`rewind-${cancion.id}`)
        .addEventListener("click", function () {
          rewindAudio(cancion.id);
        });
      document
        .getElementById(`forward-${cancion.id}`)
        .addEventListener("click", function () {
          forwardAudio(cancion.id);
        });
    });
  }

  let currentAudio = null;
  function togglePlayPause(id) {
    const audio = document.getElementById(`audioPlayer-${id}`);
    const playPauseBtn = document.getElementById(`playPause-${id}`);

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      document.querySelector(".play-btn.playing").classList.remove("playing");
      document.querySelector(".play-btn.playing").textContent = "play_arrow";
    }

    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "pause";
      playPauseBtn.classList.add("playing");
      currentAudio = audio;
    } else {
      audio.pause();
      playPauseBtn.textContent = "play_arrow";
      playPauseBtn.classList.remove("playing");
    }
  }

  function rewindAudio(id) {
    const audio = document.getElementById(`audioPlayer-${id}`);
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  }

  function forwardAudio(id) {
    const audio = document.getElementById(`audioPlayer-${id}`);
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  }

  cargarCancionesDestacadas();
});
