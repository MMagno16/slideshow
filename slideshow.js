'use strict';


const images = [
    {'id': '1', 'url':'./img/nuvem.jpg'},
    {'id': '1', 'url':'./img/nuvem2.jpg'},
    {'id': '1', 'url':'./img/nuvem3.jpg'},
    {'id': '1', 'url':'./img/nuvem4.jpg'},
    {'id': '1', 'url':'./img/nuvem5.jpg'},
    {'id': '1', 'url':'./img/nuvem6.jpg'},
    {'id': '1', 'url':'./img/nuvem7.jpg'},
    
]


const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    })
}




loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');

}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);