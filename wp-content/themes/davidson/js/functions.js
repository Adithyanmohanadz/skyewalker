jQuery(document).ready( function( $ ) {

    $("#sticky").sticky({topSpacing:0});

    $('.awards-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        centerMode: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.merges-slider-detail').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.merges-slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.merges-slider').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.merges-slider-detail',
        focusOnSelect: true,
        centerMode: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });


    $('.bsp-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.team-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('#spep-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.responsive-nav > a').on( 'click', function(e){
        e.preventDefault();
        $(this).next('ul').slideToggle( 'slow' );
    } );

    $('.banner-slides').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    });

    $('.ser-btm-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    if( $('body').hasClass('page-template-tmp-contact') ) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            separateDialCode: true,
            initialCountry: 'AE'
        });
    }

    jQuery("#contact_form").on( 'submit', function(e) {

        e.preventDefault();

        var form    = $(this),
            url     = form.attr('action'),
            target  = form.next('.ajax_message');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            dataType: "json",
            beforeSend: function( xhr ) {
                target.html('Sending ...');
            },
            success: function(response) {
                //console.log( response );
                var msg = response.status;
                if( msg === 'success' ) {
                    target.html('<p class="alert alert-success">'+response.message+'</p>');
                    window.location.href = homeUrl+'/thank-you';
                } else {
                    target.html('<p class="alert alert-danger">'+response.message+'</p>');
                }
            },
            error: function (response) {
                console.log(response);
            }
        })

    });

    jQuery("#popup_form").on( 'submit', function(e) {

        e.preventDefault();

        var form    = $(this),
            url     = form.attr('action'),
            target  = form.next('.ajax_message');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            dataType: "json",
            beforeSend: function( xhr ) {
                target.html('Sending ...');
            },
            success: function(response) {
                //console.log( response );
                var msg = response.status;
                if( msg === 'success' ) {
                    target.html('<p class="alert alert-success">'+response.message+'</p>');
                    window.location.href = homeUrl+'/thank-you';
                } else {
                    target.html('<p class="alert alert-danger">'+response.message+'</p>');
                }
            },
            error: function (response) {
                console.log(response);
            }
        });

    });

    var input2 = document.getElementById("#phone-b");
    window.intlTelInput(input2, {
        separateDialCode: true,
        initialCountry: 'AE'
    });

    $("#select-services").on('change', function() {
        var value = $(this).val();
        if( value === 'EMPLOYMENT LAW' ) {
            $('#service_notice').show();
        } else {
            $('#service_notice').hide();
        }
    });

} );

