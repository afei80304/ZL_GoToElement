$("*").each(function () {
    $(this).click(function () { 
        var target = $(this).attr("data-goto-target");

        if(target != undefined){

            var duration = $(this).attr("data-goto-duration");
            //上方位置=目標屬性.位移.上方
            var top = $(target).offset().top;
            //先停止所有動畫，再執行動畫({捲動上方:上方位置}，時間)
            $("html, body").stop().animate({scrollTop: top},parseInt(duration));
        }
    }); 
});
//當捲動滾輪時停止動畫
//jQuery事件: mousewheel 滑鼠滾動
$(window).on("mousewheel",function(){
    $("*").each(function(){
        $(this).stop();
    });
});