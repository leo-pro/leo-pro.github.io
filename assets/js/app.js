// Scroll Animation

(function(){
    

    function animateScroll(element){
        var documentTop = $(document).scrollTop(),
            offset = $(window).height();

        if(documentTop >= offset){
            $(element).addClass('animate');
        }
        // console.log($(element).width());
        // console.log("height:" + offset);
        // console.log("offset: "+ documentTop);
    }


    $(document).scroll(function(){
        //animateScroll('.conteudo');
    });
}());

$('.menu-droppable').click(function(e){
    e.preventDefault();
    var el = $('.menu-droppable .fa').attr("class")
    if(el === "fa fa-bars"){
        $('.menu-droppable .fa').attr("class","fa fa-times")
    }
    else{
        $('.menu-droppable .fa').attr("class","fa fa-bars")
    }
    $('.fixed-nav-responsive').slideToggle();
})



$(document).scroll(function(){
    var documentTop = $(document).scrollTop(),
    offset = $(window).height();
    
    if(documentTop >= (offset * 0.60)){
        $('.menu-responsive').css("opacity","1.0");
    }
    else{
        $('.menu-responsive').css("opacity","0.0");
    }
})







