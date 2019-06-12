;(function () {
    class index {
        constructor() {
            this.headernav = $('.layout-header-nav-item');
            this.secondmenu = $('#meizu-header-sub-hd1');
            this.secondmenu_1=$('.meizu-header-sub-wrap');
            this.secondmenupic=$('#meizu-header-sub-hd1 .meizu-header-sub-wrap .meizu-header-sub-ul-on li')
            
            console.log(this.secondmenupic)
        }
        init() {
        //    下拉菜单效果
            var _this=this
            this.headernav.hover(function () {
                _this.secondmenu.show();
                _this.secondmenu.css({
                    height:0,
                });
                _this.secondmenu.stop(true,true).animate({
                   height:280+'px',
                },200);
                _this.secondmenu_1.show()
                    
            },function(){
               _this.secondmenu.css({
                   height:0,
               });
               _this.secondmenu.hide();
               _this.secondmenu_1.hide()
            })
            // 划过图片时也显示
            this.secondmenu_1.hover(function(){
                _this.secondmenu.show();
                _this.secondmenu.css({
                    height:280+'px',
                });
                _this.secondmenu_1.show()
            },function(){
                _this.secondmenu.css({
                    height:0,
                });
                _this.secondmenu.hide();
                _this.secondmenu_1.hide()
            })


            // 划过图片时图片变透明
            

            this.secondmenupic.hover(function(){
                $(this).siblings().css({
                    opacity:0.5
                })
            },function(){
                _this.secondmenupic.css({
                    opacity:1
                })
            })

        }


    }

    new index().init();
}());


// 轮播图
!function(){
      class banner {
            constructor() {
                this.swiper_banner = $('#mz-index-banner .swiper-wrapper');
                this.pagination_btn = $('.pagination span');
                this.banner_pic = $('.bannerPic');
                this.$num = 0;
            }
            init() {
                var time = setInterval(function(){
                   that.onright();
                },3000)

                var that = this;
                this.pagination_btn.on("click", function () {//点击对应显示
                    that.$num = $(this).index();
                    that.onbtn()
                })

                
            

            }
            //跳转图片的方法
            onright(){
                this.$num++;
                    if(this.$num>this.banner_pic.length-1){//索引大于图片的长度则跳回第一张图片
                        this.$num=0;
                    }
                    this.onbtn();
            }

            onbtn(){
                    this.pagination_btn.eq(this.$num).addClass('variant-1').siblings().removeClass('variant-1');
                    this.banner_pic.eq(this.$num).animate({
                        opacity: 1
                    }).siblings().animate({
                        opacity: 0
                    });
            }

        }
        new banner().init();
}();

// user用户下拉效果
!function(){
   class user{
       constructor(){
        this.user=$('#layoutHeaderUser');
        this.user_dropdown=$('#_unlogin .meizu-header-user-dropdown');
        console.log(this.user_dropdown);
       }
       init(){
           var that=this;
        this.user.hover(function(){
            that.user_dropdown.show();
            
        },function(){
            that.user_dropdown.hide()
        });
        that.user_dropdown.hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })

       }
   }
   new user().init();

}();


// 楼梯效果

;(function(){
    class louti{
        constructor(){
            this.loutinav=$('#loutinav');
            this.navlast=$('.last');
            this.loutinav_li=$('#loutinav ul li');
            this.mian_s=$('h3');
            this.num=0;
            console.log(this.mian_s)
            console.log(2)
        }
        init(){
            var that=this
            $(window).scroll(function(){
                var $top=document.documentElement.scrollTop;
                if($top>750){
                    that.loutinav.show();
                }else{
                    that.loutinav.hide();
                }
                
               that.mian_s.each(function(index,element){
                    var loucengtop=$(element).offset().top+$(element).outerHeight()/2;
                    if(loucengtop>$top){
                       that.loutinav_li.not('.last').removeClass('activenav');
                       that.loutinav_li.not('.last').eq(index).addClass('activenav');
                        return false;//触发一次就停止
                    }
                });
                
            })

            this.navlast.on('click',function(){
                that.onlast();
            })

            this.loutinav_li.on('click',function(){
                that.num=$(this).index();
                console.log(that.num);
                that.onlouti_li();
            })
        }

        onlast(){
            $('html,body').animate({
                scrollTop:0
            })
            
        }


        onlouti_li(){
            var $top=document.documentElement.scrollTop;
            console.log(this.mian_s.eq(this.num).offset().top)
            this.loutinav_li.eq(this.num).addClass('active').siblings().removeClass('active');
            $top=this.mian_s.eq(this.num).offset().top;
            $('html,body').animate({
                scrollTop:$top
            })
           
        }

        

    }
    new louti().init();

}())