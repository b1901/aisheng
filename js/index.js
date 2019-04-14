$(window).ready(function() {
    // var winHei = $(window).height();
    // $(".mdi-bg").css("height",winHei+"px");
    
    var top= 20;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if(scrollTop>top){
            if($("#carousel-example-generic").attr("class").indexOf("mdi-fixed")==-1){
                $("#carousel-example-generic").toggleClass("mdi-fixed mdi-index").css("margin-top","-"+top+"px");
                $(".navbar-fixed-top").css("position","fixed").css("top","0px");
                $("#main").css("margin-top",($("#carousel-example-generic .carousel-inner").height()-top)+"px");
            }
        }else{
            $(".navbar-fixed-top").css("position","absolute").css("top","");
            $("#main").css("margin-top","");
            $("#carousel-example-generic").removeClass("mdi-fixed mdi-index").css("margin-top","0");
        }
    });
});
