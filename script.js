fetch("songs.json")
  .then(r => r.json())
  .then(data => {
    const container = document.getElementById("music");

    let currentArtist = "";

    data.forEach(song => {
      if (song.artist !== currentArtist) {
        currentArtist = song.artist;

        const h = document.createElement("h1");
        h.textContent = currentArtist;
        container.appendChild(h);
      }

      const title = document.createElement("h2");
      title.textContent = song.title;

      const audio = document.createElement("audio");
      audio.controls = true;

      const source = document.createElement("source");
      source.src = song.url;
      source.type = "audio/mpeg";

      audio.appendChild(source);

      container.appendChild(title);
      container.appendChild(audio);
    });
  });