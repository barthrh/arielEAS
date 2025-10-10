$( document ).ready(function() {

    // Defines and executes the updateLogo function
    $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
        .done(function() {
            console.log('sub-logoupdate loaded');
            updateLogo();

            // The default setup is a hidden default logo to avoid flash / flicker.
            $('#portalLogo').show();
    });

});