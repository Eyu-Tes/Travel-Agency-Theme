// ------------------------- Image Modal ------------------------- //

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


// ------------------------- Date ------------------------- //

var currentYear = new Date().getFullYear();
spanElement = document.querySelector("#print-year");
yearNode = document.createTextNode(currentYear);
spanElement.appendChild(yearNode);


// ------------------------- Scroll to Top ------------------------- //

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    // console.log(document.body);
    if (document.body.scrollTop > 610 || document.documentElement.scrollTop > 610) {
        document.querySelector(".scroll-to-top").style.display = "block";
    } else {
        document.querySelector(".scroll-to-top").style.display = "none";
    }
}