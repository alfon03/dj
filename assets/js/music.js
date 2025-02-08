document.addEventListener("DOMContentLoaded", function () {
  // Array con las canciones
  const todasLasCanciones = [
    {
      id: "song1",
      nombre: "Canción 1",
      subtitulo: "Artista - Álbum 1",
      ruta: "../assets/music/song1.mp3",
      imagen: "https://via.placeholder.com/300",
    },
    {
      id: "song2",
      nombre: "Canción 2",
      subtitulo: "Artista 2 - Álbum 2",
      ruta: "../assets/music/song2.mp3",
      imagen: "https://via.placeholder.com/300",
    },
    {
      id: "song3",
      nombre: "Canción 3",
      subtitulo: "Artista 3 - Álbum 3",
      ruta: "../assets/music/song3.mp3",
      imagen: "https://via.placeholder.com/300",
    },
    // Agregar más canciones aquí
  ];

  // Cargar las canciones
  function cargarTodasLasCanciones() {
    const contenedor = document.getElementById("todas");
    contenedor.innerHTML = ""; // Limpiar contenido anterior

    todasLasCanciones.forEach((cancion) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.innerHTML = `
        <div class="card bg-dark text-white">
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

      // Agregar eventos para el control de audio
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

  // Funciones para controlar la reproducción de audio
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

  // Llamar a la función para cargar las canciones
  cargarTodasLasCanciones();

  // Funciones para abrir y cerrar el sidebar
  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  // Agregar eventos al botón de menú y el botón de cerrar
  document
    .querySelector("#menuButton")
    .addEventListener("click", toggleSidebar);
  document
    .querySelector("#closeSidebarBtn")
    .addEventListener("click", toggleSidebar);
});
