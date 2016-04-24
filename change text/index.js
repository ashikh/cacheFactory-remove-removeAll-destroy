(function () {
    var changeLink = $('#change-link'),
        hLink = $('.hlink');
function modifyLink() {
        changeLink.on('click', function () {
        hLink.html('<a href="www.jquery.com">jQuery Documentation</a>');
        });
    }

    $(function () {
        modifyLink();
    });
}());