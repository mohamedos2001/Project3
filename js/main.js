
 var myButtion = document.getElementById('goup');

window.onscroll = function () { 

    'use strict';

    if(window.pageYOffset >= 400) {

       myButtion.style.display = 'block';
    }else{
        myButtion.style.display = 'none';


    }
};
myButtion.onclick = function() {

'use strict';

window.scrollTo(0,0);

};
