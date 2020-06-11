
// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    var slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 300,
        transition: 1000,
        interval: 3000
    });

    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
});

