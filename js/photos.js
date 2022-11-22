function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
loadPhoto();

function displayPhoto(photos) {
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        console.log(photo);
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        photoDiv.innerHTML = `
            <h4>Photo ID: ${photo.albumId}</h4>
            <h5>Tile: ${photo.title}</h5>
            <p>To see photo: ${photo.url}</p>
        `;
        photoContainer.appendChild(photoDiv);
    }
}