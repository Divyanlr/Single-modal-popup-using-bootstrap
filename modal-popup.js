$(document).ready(function () {
    // Trigger and modal selector for a single modal
    $('.Modal_ipad-btn').click(function (e) {  
        e.preventDefault();
        $('#Modal_ipad').modal('show');  
        $('body').addClass('modal-open');
    });

    $('.quantum-modal__close').on('click', function () {
        $('body').removeClass('modal-open');
    });
});

