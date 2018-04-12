$(document).ready(function() {
    $(".accordion div").hide(); 
    
    $("main section a").css( {
        color: '#314D70',
        textDecoration: 'none'
        
    }).hover(function() {
        $(this).css("text-decoration", "underline");
        
    }, function() {
        $(this).css("text-decoration", "none");
        
    }).click(function(e){
        e.preventDefault();
        $(".accordion div").hide();
        
        $(this).next('div').show();
        
    });
     
});
