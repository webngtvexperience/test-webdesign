$("#male").click(function(){
    $("#female").removeClass("btn-active");
    if(!$(this).hasClass('btn-active')){
        $(this).addClass("btn-active");
    }
})

$("#female").click(function(){
    $("#male").removeClass("btn-active");
    if(!$(this).hasClass('btn-active')){
        $(this).addClass("btn-active");
    }
})