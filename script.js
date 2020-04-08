let progress = 0

$("button").click(function() {
    let button_value = $(this).val();

    progress = +progress + +button_value

    $(".progress-bar").width(progress + "%")
    $(".progress-bar").text(progress + "%")

});