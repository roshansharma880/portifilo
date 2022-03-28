new WOW().init();


        // mixitup 
        $(document).ready(function () {
            var mixier = mixitup(".portfolio_item");
        });
        var typed = new Typed('.animationText', {
          strings: [
              "Developer",
              "programmer",
              "designer"
          ],
          typeSpeed:80,
          backSpeed:80,
          loop:true
        });

        $(".counter_num").counterUp({
            delay: 10,
            time:1000
        })

        $(window).scroll(function(){
            if($(this).scrollTop()>200){
                $(".scroll_class").addClass("strickyy") 
            }
            else{
                $(".scroll_class").removeClass("strickyy")
            }
        })
        $(window).scroll(function(){
            if($(this).scrollTop()>250){
                
                $(".scroll_box").show();
            }
            else{
                $(".scroll_box").hide();  
            }
        })
        setTimeout(()=> {
            $("#loader").hide()
            $("#main").show()
        },3000)