// Requires other javaScript inclusions. This is from a WebFlow add-in.

/*
<script src="https://refreshless.com/nouislider/dist/nouislider.js?v=1550"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script src="https://refreshless.com/nouislider/documentation/assets/wNumb.js"></script>
*/

$(function () {
    //THIS IS FOR THE SINGLE SLIDER
    let idOfSlider = 'raise-slider-single';
    let idOfSliderValue = 'slider-single-value';


    $('#' + idOfSlider).css('display', 'none');
    $("<div></div>").insertAfter('#' + idOfSlider);

    var single = $('#' + idOfSlider).next()[0];
    noUiSlider.create(single, {
        start: [0],
        range: {
            'min': 0,
            'max': 8
        },
        step: 1,
        tooltips: [
            /*  wNumb({decimals: 0,prefix: '$'}) , */
            false,
        ],
    });
    var valueSingle = document.getElementById(idOfSlider);
    single.noUiSlider.on('update', function (values) {
            let strVal = new String(values);
        let percentVal = strVal.concat("%");
        $('#' + idOfSlider).val(values);
        $('#' + idOfSliderValue).text(percentVal);
    });
            $('[data-tooltip-pos]').next().children().find('.noUi-tooltip').addClass('bottom')

});