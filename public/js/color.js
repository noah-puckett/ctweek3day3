const colorRoot = document.getElementById('color-root');

const search = new URLSearchParams();
const color = search.get('color');

fetch('api/v1/color/:color/')
    .then(
        res => {
            return res.json();
        }
    )
    .then(color => {
        color = 'red';
        return color;
    });

colorRoot.appendChild(color);
