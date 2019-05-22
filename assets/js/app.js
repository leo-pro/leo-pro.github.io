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



$(document).scroll(function(){
    var documentTop = $(document).scrollTop(),
    offset = $(window).height();
    
    if(documentTop >= (offset * 0.60)){
        $('.fixed-menu').css("opacity","1.0");
    }
    else{
        $('.fixed-menu').css("opacity","0.0");
    }
})

// var height = $(window).height();
// var top = $(window).offset.top;

// console.log("Nice!");
// console.log("height: " + height);
// console.log("Top: " + top);







