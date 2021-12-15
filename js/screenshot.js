$(document).ready(function () {

    function saveScreenshot(canvas) {
        var downloadLink = document.createElement('a');
        downloadLink.download = 'download.jpg';
        canvas.toBlob(function (blob) {
            downloadLink.href = URL.createObjectURL(blob)
            downloadLink.click();
        });
    }


    $(".download-btn").on("click", function (e) {
        e.preventDefault();
        html2canvas(document.querySelector(".download-container"), {
            scrollX: 0,
            scrollY: 0,
            windowWidth: 1920,
            windowHeight: 1080



        }).then(function (canvas) {
            var image = canvas.toDataURL('image/jpeg');
            document.getElementById("created-element").src = image;
            $(this).attr('href', image);
            saveScreenshot(canvas);
        });
    });
});