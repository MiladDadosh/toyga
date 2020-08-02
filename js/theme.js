;(function($) {
    "use strict";
    
    /*Scroll Spy*/
    function scrollSpy () {
        if ($('.navbar').length ) {
            $('body').scrollspy({ 
                target: '.navbar', 
                offset: 170
            })
        }
        $(".nav-item a").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });

          } // End if

        });
    }
    scrollSpy();

    
    $(document).ready(function(){
        overrideHref();
    });
    
    $(window).load(function(){
        
    });
    
})(jQuery)

function onFormSubmit(e) {
    e.preventDefault();
    const form = $(e.target);
    let params = {};
    form.find('[name]').each(function() {
        const field = $(this);
        const key = field.attr('name');
        const value = field.val();
        params[key] = value;
    });

    saveData('toyga-user-data', params);

    window.location.href = 'thankyou.html';

    return false;
}

function overrideHref() {
    $('a').each(function() {
        let t = $(this);
        const href = t.attr('href');
        const paramString = '?test=true';
        href !== undefined && href.indexOf('xxx') !== -1 && t.attr('href', href + paramString);
    });
}

function saveData(key, value) {
    // $.cookie(key, btoa(JSON.stringify(value)));
    localStorage.setItem(key, btoa(JSON.stringify(value)));
}

function getData(key) {
    //////////locally cookie return undefined
    // const cookie = $.cookie(key);
    // const parsedCookie = cookie !== undefined && atob(JSON.parse(cookie));
    // console.log('cookie: ', parsedCookie);

    const ls = localStorage.getItem(key);
    const parsedData = ls !== null && JSON.parse(atob(ls));
    return parsedData;
}

function removeData(key) {
    localStorage.removeItem(key);
}