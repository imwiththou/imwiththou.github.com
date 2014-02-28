(function ($) {
   
    $.fn.fieldValidate = function() {
        var $errorMsg = $('<div class="errormsg"><p>&larr;</p></div>');
        var $emailMsg = $('<div class="errormsg"><p>&larr;</p></div>');
        var passed    = false;

        if(!$(this).hasClass('required') || ($(this).hasClass('required') && $(this).val())) {
            passed = true;
        }

        if($(this).hasClass('email') && passed){
            if( $(this).val().match(/^(?!\.)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/)) {
                passed = true;
            }
            else {
                passed = false;
                $errorMsg = $emailMsg;
            }
        }

        if(passed) {
            $(this).removeClass('error').next('.errormsg').remove();

            return true;
        }
        else {
            $(this).addClass('error');

            if(!$(this).next('.errormsg').size())
                $(this).after($errorMsg);

            else if ($errorMsg)
                $(this).next('.errormsg').replaceWith($errorMsg);

            return false;
        }
    }

$.fn.fitImgHeight = function() {
        var ratio = this.width() / parseInt(this.attr('width'));
        $(this).height(parseInt(this.attr('height')) * ratio);
    };
})(jQuery);


$(document).ready(function(){

	//placeholder
    $('input, textarea').placeholder();
    
    //article
    if($('#article').size()){ //only on slider pages because of bbq
        $("#link1").anchorScroll();
    }
    
    //work - grid
    var $container = $('#container');

    $container.find('.lazy-image').show().lazyload({
        effect : "fadeIn",
        threshold : 300
    });

    $container.masonry({
        itemSelector : '.box',
        isResizable: true,
        columnWidth: function( containerWidth ) {

            //change 02: called every time container is resized
            $container.find('.lazy-image').each(function(){
                $(this).fitImgHeight();
            });
            //change 01: columns cound depend on screen size (according to mq in css)
            var windowWidth = $(window).width();
            if(windowWidth>1100)
                return containerWidth / 3;
            else if(windowWidth>700)
                return containerWidth / 2;
            else
                return containerWidth;
        }
    });

    $('.slidewrap').bind('carousel-validate', function(e, data) {
        e.valid = true;

        var index = (Math.abs(data.moveTo) / 100);
        var slide = $(this).find('.slide:nth('+index+')');

        $(slide).find('input, textarea, select').each(function(){
            if(e.valid)
                e.valid = $(this).fieldValidate();
            else
                $(this).fieldValidate();
        });

        $('.error:first').focus();
    });

    //validation and name
    var $cform = $('#contact-form');
    $cform.find('.enter-name').bind('click', function(e){
        $cform.find('.cell .namebox').text($cform.find('#firstname').val());
    });

    var formSent = false;
    $cform.find('.submit').bind('click', function(e){
        e.preventDefault();
        var valid = true;

        $cform.find('input, textarea, select').each(function(){
            if(valid)
                valid = $(this).fieldValidate();
            else
                $(this).fieldValidate();
        });

        if(formSent){
            $('.slider').trigger('nextprev', {'dir': 'next'});
        }
        else if(!valid) {
            alert('Ops, I think you missed one or more questions. Please check your answers.');
        }
        else {
            $.post($cform.attr('target'), $cform.serialize(), function(data){
                if(data == 'ok'){
                    $cform.find('input, textarea, select').attr('disabled', true);
                    $('.slider').trigger('nextprev', {'dir': 'next'});
                    formSent = true;
                }
                else {
                    alert('Ops, something went wrong with server connection. Please check your answers and try again.');
                }
            });
        }
    });
});