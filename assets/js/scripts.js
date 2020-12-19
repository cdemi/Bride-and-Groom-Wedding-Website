var weddingDate = moment($("#hero #counter").text());

$("#hero #counter").countdown(weddingDate.toDate(), {
    elapse: true,
    //precision: 60000
}).on('update.countdown', function (event) {
    if (event.elapsed) {
        if (event.offset.totalDays>=31)
            $(this).html(event.strftime('Married for<br/>' + event.strftime('%-m month%!m %-W week%!W %-d day%!d')));
        else if (event.offset.totalDays>=7)
            $(this).html(event.strftime('Married for<br/>' + event.strftime('%-W week%!W %-d day%!d')));
        else if (event.offset.totalDays>=3)
            $(this).html(event.strftime('Married for<br/>' + event.strftime('%-d day%!d %-H hour%!H')));
        else if (event.offset.totalHours>=1)
            $(this).html(event.strftime('Married for<br/>' + event.strftime('%-I hour%!I')));
        else
            $(this).html(event.strftime('Married for<br/>' + event.strftime('%-N minute%!N')));
        $("#rsvpButton").hide();
    }
    else {
        $("#rsvpButton").show();
        //$(this).html(event.strftime('%-D day%!D'));
        if (event.offset.totalDays>0)
            $(this).html(event.strftime('%-D day%!D %-H hour%!H'));
        else if (event.offset.totalHours>0)
            $(this).html(event.strftime('%-H hour%!H'));
        else
            $(this).html(event.strftime('%-N minute%!N'));
        //var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        //$(this).html(event.strftime(totalHours.toLocaleString() + ' hours'));
    }
}).countdown('start');

$("#hero #counter").show();
