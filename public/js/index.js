const root = document.getElementById('root');
const colorsList = document.getElementById('colors-list');

fetch('/api/v1/colors')
    .then(
        res => {
            return res.json();
        }
    )
    .then(colors => {
        colors.forEach(color => {
            const li = document.createElement('li');
            li.textContent = color.name;
            colorsList.appendChild(li);
        });
    });

root.appendChild(colorsList);
