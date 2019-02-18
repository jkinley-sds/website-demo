

var button = document.querySelector('.menu-toggle');
var dropdown__content = document.querySelector('.dropdown__content');


button.addEventListener("click", function(e) {
    console.log(e, "click");
    dropdown__content.classList.toggle('is-active');
});


// Init lightbox plugin
baguetteBox.run('.lightbox');
