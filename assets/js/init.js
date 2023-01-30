let indice_slide2 = 0;
$(function() {
    $('.lista-img a').click(function() {
        let img = $(this).data('img');
        $('.img-big img').attr('src', img);
        $('.lista-img a').removeClass('active');
        $(this).addClass('active');
    });
})

setInterval(altera_slider_1, 4000);
setInterval(altera_slider_2, 4000);

function altera_slider_1() {
    $('#momentos').toggleClass('slide2');
}

function altera_slider_2() {
    if (indice_slide2 == 0) {
        $('#tom .bg').addClass('slide2');
        indice_slide2 = 1;
    } else if (indice_slide2 == 1) {
        $('#tom .bg').addClass('slide3');
        indice_slide2 = 2;
    } else {
        $('#tom .bg').removeClass('slide3');
        $('#tom .bg').removeClass('slide2');
        indice_slide2 = 0;
    }
}