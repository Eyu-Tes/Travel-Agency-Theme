var modal = document.querySelector(".modal");
var modalImg = document.querySelector(".modal-content");
var imgs = document.querySelectorAll('.gallery .container img'); // Must insert space b|n .gallery & .container

function openImgModal() {
    // console.log(this.src); // this: the current object that the handler function is called 
    modal.style.display = "block";
    modalImg.src = this.src;
}

for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', openImgModal);
}

modalImg.addEventListener('click', function() {
    modal.style.display = "none";
})