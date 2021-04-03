const imageGrid = document.querySelector('.image-grid');
const numRows = 10;

getImages(imageGrid, numRows);

function getImages(container, numRows) {
    const numImages = numRows * 3;
    const url = 'https://source.unsplash.com/random/';

    for (let i = 0; i < numImages; i++) {
        const dimension = 300 + i;
        const endpoint = `${url}${dimension}x${dimension}`;
        const img = document.createElement('img');
        img.src = endpoint;
        img.alt = "Random photo from Unsplash";
        container.append(img);
    }
}