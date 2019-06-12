// 标题nav固定

!function () {
    class fixednav {
        constructor() {
            this.navfixed = $('#J_fastNav');
            this.header_top = $('#layoutHeader');

        }
        init() {
            var _this = this
            var height1=this.header_top.outerHeight(true);
            console.log(height1)
            $(window).scroll(function () {
                
                if (document.documentElement.scrollTop > height1) { 
                     console.log(1)
                    _this.navfixed.css({
                        position: 'fixed'+'!important',
                        top:0,
                        position:0.5,
                        zIndex:333
                    })
                }else{
                    _this.navfixed.css({
                        top:'height1'+'px'
                    })
                }

            })
        }


    }
    new fixednav().init()
}();