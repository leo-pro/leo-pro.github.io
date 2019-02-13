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

