
// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });


document.addEventListener('DOMContentLoaded', function () {
    const side = document.querySelectorAll('.sidenav');
    M.Sidenav.init(side, { draggable: true });


    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 300,
        transition: 1000,
        interval: 3000
    });

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    const portfolio = document.querySelectorAll('.responsive-img');
    M.Materialbox.init(portfolio,);

    const scroll = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scroll, {
        scrollOffset: 55,
        throttle: 200
    });


});

