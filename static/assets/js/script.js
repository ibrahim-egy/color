function show (event) {


    var image = document.getElementById('img')
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.visibility = 'visible'
    document.getElementById('submit-btn').style.visibility = 'visible'
}

function copy(i) {
    var copyText = document.querySelector('.color-' + i)

  /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied color in rgb: " + copyText.value)
}