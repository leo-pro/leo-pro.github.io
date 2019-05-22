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
        animateScroll('.conteudo');
    });
}());

$('.menu-droppable').click(function(e){
    e.preventDefault();

    $('.fixed-nav-responsive').slideDown();
    $('.menu-droppable .fa').removeClass('fa-bars');
    $('.menu-droppable .fa').addClass('fa-times');
})

$('.menu-droppable .fa .fa-times').click(function(e){
    e.preventDefault();

    $('.fixed-nav-responsive').slideUp();
    $('.menu-droppable .fa').removeClass('fa-times');
    $('.menu-droppable .fa').addClass('fa-bars');
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

// var height = $(window).height();
// var top = $(window).offset.top;

// console.log("Nice!");
// console.log("height: " + height);
// console.log("Top: " + top);







