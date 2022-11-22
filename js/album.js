function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}
loadAlbum();

function displayAlbum(albums) {
    const albumContainer = document.getElementById('album-container');
    for (const album of albums) {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `
            <h5>User ID: ${album.userId}</h5>
            <p>Title: ${album.title}</p>
        `;
        albumContainer.appendChild(albumDiv);
    }
}