$(document).ready(function () {
    //state default radio ':checked' property there:
    $("input:radio:first").prop("checked", true);

    $("#self-biting input:radio").click(function () {
        alert("clicked");
    });
    $("#partner-biting input:radio").click(function () {
        alert("clicked");
    });
    $("#radio3 input:radio").click(function () {
        alert("clicked");
    });

    // overwrite radio ':checked' property there (if exists in localStorage) :
    $('input[type=radio]').each(function () {
        var state = JSON.parse(localStorage.getItem('r_' + this.id));

        if (state) this.checked = state.checked;
    });
});

var ele = document.getElementsByName("Choose");
for (var i = 0; i < ele.length; i++)
    ele[i].checked = false;


$(window).bind('unload', function () {
    $('input[type=radio]').each(function () {
        localStorage.setItem(
            'r_' + this.id, JSON.stringify({
                checked: this.checked
            })
        );
    });
});