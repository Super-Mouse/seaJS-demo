define(function (require) {
    console.log("a")
    if (true){
        require('./b.js');
    }else {
        require('./c.js');
    }
    var h2 = document.getElementById("h2");
    h2.onclick = function (ev) {
        require(['./d.js'], function () {
            console.log('callback')
        });
    }
})