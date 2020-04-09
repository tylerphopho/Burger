$(document).ready(function(){

    $(function(){
        $(".create-form").on("submit", function(event){
            event.preventDefault();
    
            var newBurger = {
                name: $("#burg")
                .val()
                .trim()
            };
            if ($("#burg").val() === ""){
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
    
        $(".eat").on("click", function(event){
            event.preventDefault();
    
            let id = $(this).attr("data-id");
    
            console.log(id);
            $.ajax("/api/eat/" + id, {
                type: "PUT"
            }).then(function(resp){
                console.log(resp);
                location.reload();
            });
        });
    
        $(".remove").on("click", function(event){
            event.preventDefault();
    
            let id = $(this).attr("data-id");
    
            console.log(id);
            $.ajax("/api/remove/" + id, {
                type: "DELETE"
            }).then(function(resp){
                console.log(resp)
                location.reload();
            });
        });
    });
});