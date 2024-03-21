const Banner = () => {
    return ( 
    <>
        <div class="ban-top">
            <div class="container">
                <div class="top_nav_left">
                    <nav class="navbar navbar-default" />
                        <div class="container-fluid">
                            
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                            </div>
                            
                            <div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav menu__list">
                                    <li class="active menu__item menu__item--current"><a class="menu__link" href="index.html">Trang Chủ<span class="sr-only">(current)</span></a></li>
                                    <li class=" menu__item "><a class="menu__link" href="quanAo.html">Quần-Áo Bảo Hộ</a></li>
                                    <li class=" menu__item"><a class="menu__link" href="gangTay.html">Găng Tay Bảo Hộ</a></li>
                                    <li class=" menu__item"><a class="menu__link" href="giay.html">Giày Bảo Hộ</a></li>
                                    <li class=" menu__item"><a class="menu__link" href="mu.html">Mũ Bảo Hộ</a></li>
                                    <li class=" menu__item "><a class="menu__link" href="contact.html">Liên Hệ</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div class="top_nav_right">
                    <div class="cart box_1">
                        <a href="checkout.html">
                            <h3>
                                <div class="total">
                                    <i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>
                                    <span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> sản phẩm)</div>
    
                            </h3>
                        </a>
                        {/* <p><a href="javascript:;" class="simpleCart_empty">Giỏ Hàng</a></p> */}
    
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div> 

        <div class="banner-grid">
        <div id="visual">
            <div class="slide-visual">
                
                <ul class="slide-group">
                    {/* <li><img class="img-responsive" src="images/ba1.jpg" alt="Dummy Image" /></li>
                    <li><img class="img-responsive" src="images/ba2.jpg" alt="Dummy Image" /></li>
                    <li><img class="img-responsive" src="images/ba3.jpg" alt="Dummy Image" /></li> */}
                </ul>

                
                <div class="script-wrap">
                    <ul class="script-group">
                        {/* <li>
                            <div class="inner-script"><img class="img-responsive" src="images/baa1.jpg" alt="Dummy Image" /></div>
                        </li>
                        <li>
                            <div class="inner-script"><img class="img-responsive" src="images/baa2.jpg" alt="Dummy Image" /></div>
                        </li>
                        <li>
                            <div class="inner-script"><img class="img-responsive" src="images/baa3.jpg" alt="Dummy Image" /></div>
                        </li> */}
                    </ul>
                    <div class="slide-controller">
                        {/* <a href="#" class="btn-prev"><img src="images/btn_prev.png" alt="Prev Slide" /></a>
                        <a href="#" class="btn-play"><img src="images/btn_play.png" alt="Start Slide" /></a>
                        <a href="#" class="btn-pause"><img src="images/btn_pause.png" alt="Pause Slide" /></a>
                        <a href="#" class="btn-next"><img src="images/btn_next.png" alt="Next Slide" /></a> */}
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    </>
    );
}
 
export default Banner;