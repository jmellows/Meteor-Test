Template.video.rendered = function(){

var iframe = $('#player1')[0];
var player = $f(iframe);

    player.addEvent("ready", function () {
        
        player.addEvent("play", function () {
            mixpanel.track("Video started");
        });

        player.addEvent("pause", function () {
            mixpanel.track("Video paused");
        });

        /*player.addEvent("playProgress", function (data) {
            var time = data;
            console.log(time);
        });*/

        player.addEvent("finish", function () {
		mixpanel.track("Video finished");
        });
    });
};
//backup
/*var iframe = $('#player1')[0];
var player = $f(iframe);

    player.addEvent("ready", function () {
        
        player.addEvent("play", function () {
            mixpanel.track("Video started");
        });

        player.addEvent("pause", function () {
            mixpanel.track("Video paused");
        });

        player.addEvent("playProgress", function (data) {
            var time = data;
            console.log(time);
        });

        player.addEvent("finish", function () {
		mixpanel.track("Video finished");
        });
    });
*/
