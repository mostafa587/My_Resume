<<<<<<< HEAD
'use strict';
{
    // Call function fn when the DOM is loaded and ready. If it is already
    // loaded, call the function now.
    // http://youmightnotneedjquery.com/#ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        function handleClick(event) {
            event.preventDefault();
            const params = new URLSearchParams(window.location.search);
            if (params.has('_popup')) {
                window.close(); // Close the popup.
            } else {
                window.history.back(); // Otherwise, go back.
            }
        }

        document.querySelectorAll('.cancel-link').forEach(function(el) {
            el.addEventListener('click', handleClick);
        });
    });
}
=======
'use strict';
{
    // Call function fn when the DOM is loaded and ready. If it is already
    // loaded, call the function now.
    // http://youmightnotneedjquery.com/#ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        function handleClick(event) {
            event.preventDefault();
            const params = new URLSearchParams(window.location.search);
            if (params.has('_popup')) {
                window.close(); // Close the popup.
            } else {
                window.history.back(); // Otherwise, go back.
            }
        }

        document.querySelectorAll('.cancel-link').forEach(function(el) {
            el.addEventListener('click', handleClick);
        });
    });
}
>>>>>>> 60ce39878a56086f7adbeba78a71bfb6c19649b8
