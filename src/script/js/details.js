// 标题nav固定

!function () {
    class fixednav {
        constructor() {
            this.navfixed = $('#J_fastNav');
            this.header_top = $('#layoutHeader');
        }
        init() {
            var _this = this
            var height1 = this.header_top.outerHeight(true);

            $(window).scroll(function () {
                if (document.documentElement.scrollTop > height1) {
                    _this.navfixed.css({
                        position: 'fixed',
                        top: 0,
                        opacity: 0.8,
                        zIndex: 333
                    })
                } else {
                    _this.navfixed.css({
                        position: 'relative',
                        top: 'height1' + 'px'
                    })
                }

            })
        }


    }
    new fixednav().init()
}();


// 放大镜效果
!function () {
    class zoompic {
        constructor() {
            this.smallpic = $('.preview-booth');
            this.shrink1 = $('.shrink1');
            this.magnify1 = $('.magnifying_glass');
            this.bigpic = $('.magnifypic img');
            this.otherurl = $('.current img');
            console.log(this.otherurl)
        }
        init() {

            const _this = this;
            this.smallpic.hover(function () {

                _this.onshow()
                $(this).on('mousemove', function (ev) {
                    var ev = ev || window.event;
                    _this.mousemove(ev)
                })

            }, function () {
                _this.onhide()
            });


            // 点击小图时将图片地址换给小图
            this.otherurl.on('click', function () {
                console.log($(this).attr('src'));
                let $picurl =$(this).attr('src');
                console.log($picurl)
                _this.smallpic.find('img').attr('src', $picurl);
                _this.bigpic.attr('src', $picurl);
            })

        }

        onshow() {
            this.magnify1.show();
            this.spic_size();
            this.shrink1.show();
            this.bili = this.bigpic.outerWidth() / this.smallpic.outerWidth();

        }

        onhide() {
            this.shrink1.hide();
            this.magnify1.hide();
        }

        mousemove(ev) {
            let t = ev.pageY - this.smallpic.offset().top - this.shrink1.height() / 2;
            let l = ev.pageX - this.smallpic.offset().left - this.shrink1.width() / 2;
            if (l < 0) {
                l = 0
            }
            if (l > this.smallpic.outerWidth() - this.shrink1.outerWidth()) {
                l = this.smallpic.outerWidth() - this.shrink1.outerWidth();
            }
            if (t < 0) {
                t = 0
            }
            if (t > this.smallpic.outerWidth() - this.shrink1.outerWidth()) {
                t = this.smallpic.outerWidth() - this.shrink1.outerWidth();
            }
            this.shrink1.css({
                top: t + 'px',
                left: l + 'px'
            })

            // 大图跟随移动
            this.bigpic.css({
                top: -t * this.bili + 'px',
                left: -l * this.bili + 'px'
            })
        }

        // 计算小图大小
        spic_size() {
            var swidth = this.smallpic.outerWidth() * this.magnify1.outerWidth() / this.bigpic.outerWidth();
            var sheight = this.smallpic.outerHeight() * this.magnify1.outerHeight() / this.bigpic.outerHeight();
            this.shrink1.css({
                width: swidth + 'PX',
                height: sheight + 'PX'
            })
        }



        // 点击小图换路径
       
    }

    new zoompic().init();
}();



