// $(document).ready(function () {
//     $('.my-file').slick({
//         dots: true,
//         infinite: true,
//         speed: 250,
//         slidesToShow: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: false,
//         nextArrow: false,

//     });
// });

document.getElementById("scrollButton").addEventListener("click", function () {
    document.getElementById("targetSection").scrollIntoView({ behavior: "smooth" });
});