; (function () {
  class rendering {
    constructor() {
      //取魅族手机区域的元素
      this.phone_center = $('#index-phone-center .clearfix');
      this.newtable = '';

    }
    init() {
      var that = this;
      $.ajax({
        // 链接php接收数据
        url: 'http://10.31.164.50/meizu/meizu/php/rendering.php',
        // 使接受的数据格式为json格式
        dataType: 'json',
      }).done(function (e) {
        // 取到手机元素里面的li标签赋值给phoneLi
        var phoneLi = that.phone_center.children()
        // 循环讲数据库里的数据渲染到li标签中
        $.each(e, function (i, v) {
          if(v.sid==1){
            $('.big1').append(`   <div class="section-item-box goods-box">
            <a class="box-img box-img-retina"
              href="http://10.31.164.50/meizu/meizu/src/details.html" target="_blank">
              <img class="goods-img lazy " 
              data-original="${v.url}" width="460";height="460";>
              <span class="box-info">
                <span class="goods-name">${v.phonemodel}</span>
                <span class="goods-desc">骁龙675 后置4800万</span>
                <span class="goods-price"> <i>￥</i>${v.price}<em></em><s></s></span>
              </span>
              <span class="product-sign red" data-color="red">直降</span>
            </a>
          </div>
            `
            )
            $(function() {
              $("img.lazy").lazyload();
              effect : "fadeIn"
              });
          }
          if(v.sid==2){
            $('.big2').append(`   <div class="section-item-box goods-box">
            <a class="box-img box-img-retina"
              href="http://10.31.164.50/meizu/meizu/src/details.html" target="_blank">
              <img class="goods-img lazy " 
              data-original="${v.url}" width="460";height="460";>
              <span class="box-info">
                <span class="goods-name">${v.phonemodel}</span>
                <span class="goods-desc">骁龙675 后置4800万</span>
                <span class="goods-price"> <i>￥</i>${v.price}<em></em><s></s></span>
              </span>
              <span class="product-sign red" data-color="red">直降</span>
            </a>
          </div>
            `
           
            )
            
            $(function() {
              $("img.lazy").lazyload();
              effect : "fadeIn"
              });
          }
          if(v.sid!=1&&v.sid!=2){
             that.newtable = `
                <div class="section-item-box goods-box">
                  <a class="box-img box-img-retina"
                    href="http://10.31.164.50/meizu/meizu/src/details.html" target="_blank">
                    <img class="goods-img lazy " 
                    data-original="${v.url}" width="230";height="230";>
                    <span class="box-info">
                      <span class="goods-name">${v.phonemodel}</span>
                      <span class="goods-desc">骁龙675 后置4800万</span>
                      <span class="goods-price"> <i>￥</i>${v.price}<em></em><s></s></span>
                    </span>
                    <span class="product-sign red" data-color="red">直降</span>
                  </a>
                </div>
                `
                $(function() {
                  $("img.lazy").lazyload();
                  effect : "fadeIn"
                  });
                  // html方法
                    $(phoneLi[i]).html(that.newtable);
          }
         
              
        

        })

      })

    };

  };

  new rendering().init();


}());