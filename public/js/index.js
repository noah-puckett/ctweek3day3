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
            const a = document.createElement('a');
            a.href = `/color.html?name=${color.name}`;
            a.innerText = color.name;
            li.appendChild(a);
            colorsList.appendChild(li);
        });
    });

root.appendChild(colorsList);
