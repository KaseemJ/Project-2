$(document).ready(function(){

    $("delete-post").on("click", function(){
        var item_id= $(this).data("id")
        console.log(item_id)
        $.ajax({
            url: "/items/"+ item_id,
            method: "DELETE"
        }).then(function(){
            alert("Item id: "+ item_id+ " deleted")
            location.reload()
        })
    })









})