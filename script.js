const addBtn = document.getElementById("addBtn")

function createImg(photoURL) {
    const imgElm = document.createElement('img')
        imgElm.src = photoURL
        return imgElm
}

function addImg(imgElm) {
    const photoGallary = document.getElementById('photo-gallary')
    photoGallary.appendChild(imgElm)
}

addBtn.addEventListener('click', () => {
    const photoURL = prompt('Enter the URL of the photo:')
    const imgElm = createImg(photoURL)
    addImg(imgElm)
})