fetch("songs.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("music");

    for (const artist in data) {
      const artistTitle = document.createElement("h1");
      artistTitle.textContent = artist;
      container.appendChild(artistTitle);

      data[artist].forEach((song, index) => {
        const title = document.createElement("h2");
        title.textContent = `${index + 1}. ${song.title}`;

        const audio = document.createElement("audio");
        audio.controls = true;

        const source = document.createElement("source");
        source.src = song.url;
        source.type = "audio/mpeg";

        audio.appendChild(source);

        container.appendChild(title);
        container.appendChild(audio);
      });
    }
  });
