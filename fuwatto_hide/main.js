$(function () {
    $(".p01").click(function(){
        $(this).parents(".pt01").animate({ opacity: "hide" }, "slow");
    });
});