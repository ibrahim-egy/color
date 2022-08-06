function show (event) {


    var image = document.getElementById('img')
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.visibility = 'visible'
    document.getElementById('submit-btn').style.visibility = 'visible'
}