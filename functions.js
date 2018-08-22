$(document).ready(function(){
    $('#body img').click(function() {
        $(this).hide();
    });
    $('#footer button').click(function(){
        $('#body img').show();
    });  
});