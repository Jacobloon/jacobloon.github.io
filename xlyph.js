const imageContainer = document.getElementById('image-container');
const numberOfRows = 3;
const imageInRow = 5;
const numberOfImages = 13; // Adjust as necessary
let imgNum = 0;

for (let i = 1; i <= numberOfRows; i++) {
    let imgRow = document.createElement('imgRow');
    imgRow.style = "display: flex; justify-content: center;"
    for (let i = 1; i <= imageInRow; i++) {
        if (imgNum < numberOfImages) {
            imgNum = imgNum + 1;
            const img = document.createElement('img');
            img.src = `images/card_images/GLF_${imgNum}.jpg`; 
            img.alt = `Image ${i}`;
            img.style.margin = '5px';
            imgRow.appendChild(img);
        }
    }
    imageContainer.appendChild(imgRow);
}