const colorRoot = document.getElementById('color-root');

const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const p = document.createElement('p');

fetch(`api/v1/colors/${name}`)
    .then(
        res => {
            return res.json();
        }
    )
    .then(color => {
        p.textContent = `FACTS ABOUT ${color.name}: it evokes a feeling of ${color.feeling} ... is it fasionable? ${color.fashionable}.`;
    });

colorRoot.appendChild(p);
