$(document).ready(function(){
    $('#fullpage').fullpage({
        //Navigation
        lockAnchors: false,
        anchors:['about','skills','works','experience'],
        menu: '#menu',
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        //showActiveTooltip: true,
        //design
        sectionsColor : ['#76b852','#ced7df','#323b43','#ced7df'],

        scrollOverflow: true,
        //scrollOverflowOptions: null

    });
});
$(document).ready(function(){
    $("#workList").find("li").mousemove(function(){
        $(this).find(".title-over").css({"opacity":".6"});
        $(this).find(".title").css({"opacity":"1"});
    });
    $("#workList").find("li").mouseleave(function(){
        $(this).find(".title-over").css({"opacity":"0"});
        $(this).find(".title").css({"opacity":"0"});
    });
});
$(document).ready(function(){
    var $screenWidth=$(".container").width();
    if($screenWidth<400){
        var $tpHeight=$("#topbar").height()+10;
        $(".jingli").css({"padding-top":$tpHeight});
    }

});
