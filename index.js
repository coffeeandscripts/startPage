var showTime = function() {
    setInterval(function() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var day = d.getDate();
        if (day == 1) {
            day = day + "st";
        } else if (day == 2) {
            day = day + "nd";
        } else if (day == 3) {
            day = day + "rd";
        } else {
            day = day + "th";
        }
        var date = days[d.getDay()] + ", " + day + " of " + months[d.getMonth()] + " " + d.getFullYear();
        var seconds = d.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var minutes = d.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var hours = d.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        var time = hours + ":" + minutes + ":" + seconds;
        $('#mainTitleContentDate').html(date);
        $('#mainTitleContentTime').html(time);
    }, 500);
}

$(document).ready(showTime);

var fadeInMain = function() {
    $('#mainPage').hide();
    $('#mainPage').delay("800").fadeIn("slow");
}

$(document).ready(fadeInMain);
