$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burg")
            .val()
            .trim()
        };
        if ($("#burg").val()=== ""){
            alert("Add the burger");
        } else {
            $.ajax("/api/add", {
                type: "POST",
                data: newBurger
            }).then(function(){
                console.log("Added new burger!");
                location.reload();
            });
        }
    });
})