$(function () {

    $(".create-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: false
        };
        $.ajax("/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
            }
        );
    });
})