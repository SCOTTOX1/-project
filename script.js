window.addEventListener("DOMContentLoaded", function(){

    var form = document.getElementById("my-form");

    var status = document.getElementById("status");

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = new FormData(form);

    });
});

    