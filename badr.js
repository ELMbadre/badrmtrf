window.requestAnimFrame = function() {
    window.requestAnimationFrame ||

        window.webkitRequestAnimationFrame ||

        window.mozRequestAnimationFrame ||

        window.oRequestAnimationFrame ||

        window.msRequestAnimationFrame ||

        function(callback) {

            window.setTimeout(callback);

        }

}