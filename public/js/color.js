const colorRoot = document.getElementById('color-root');
//another appendable thing?

const search = new URLSearchParams();
console.log(search.get('name'));

fetch('/api/v1/colors/:name')
    .then(
        res => {
            return res.json();
        }
    );
//     fetch('/api/v1/colors')
//     .then(
//         res => {
//             return res.json();
//         }
//     )
//     .then(colors => {
//         colors.forEach(color => {
//             const li = document.createElement('li');
//             li.textContent = color.name;
//             colorsList.appendChild(li);
//         });
//     });

// root.appendChild(colorsList);
