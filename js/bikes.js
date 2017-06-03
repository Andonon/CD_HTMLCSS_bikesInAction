"use strict";
    $(document).ready(function(){
        $("img").hover(function (){
            $(this).fadeOut(500,function(){
                var srcimg = $(this).attr("src");
                var altsrcimg = $(this).attr("corneringimage");
                $(this).attr("src", altsrcimg);
                $(this).attr("corneringimage", srcimg);                
            });
            $(this).fadeIn(500);
        }) 
    }); 