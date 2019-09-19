var weddingDate = moment($("#hero #counter").text());

$("#hero #counter").countdown(weddingDate.toDate(), {
    elapse: true,
    //precision: 60000
}).on('update.countdown', function (event) {
    if (event.elapsed) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime('Married for<br/>' + event.strftime('%-m months %-W weeks %-d days')));
        $("#rsvpButton").hide();
    }
    else {
        $("#rsvpButton").show();
        //$(this).html(event.strftime('%-D day%!D'));
        $(this).html(event.strftime('%-D days %-H hours'));
        //var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        //$(this).html(event.strftime(totalHours.toLocaleString() + ' hours'));
    }
}).countdown('start');

$("#hero #counter").show();