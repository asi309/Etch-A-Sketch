document.querySelector('body').style.height = '100%';
document.querySelector('body').style.margin = '0';

let container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '100%';

let size = 0;
const createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.flex='1 1 6.25%';
            div.onmouseover = () => {
                div.style.backgroundColor = '#1B1818';
            };
            container.appendChild(div);
        }
    }
};

createGrid(16);

const clearBtn = document.querySelector('#clear');
clearBtn.style.display = 'flex';
clearBtn.style.backgroundColor = '#F54574'
clearBtn.style.border = '0';
clearBtn.style.justifyContent = 'center';
clearBtn.style.margin = '0 0 5px 0';
clearBtn.style.padding = '20px 10px 20px 10px';
clearBtn.style.width = '100%';
clearBtn.onclick = () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    size = parseInt(prompt('Select size of grid: ', 16));
    createGrid(size);
}