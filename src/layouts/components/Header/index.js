import "./Header.css"
const Header  = () => {
    return (
        <>
            <div className="header">
                <div className="header_container">
                        <div className="container_content">Giao Hàng Nhanh Chóng</div>
                        <div className="container_content">Miễn Phí Vận Chuyển Đơn Hàng Nội Địa</div>
                        <div className="container_content"><a href="mailto:info@example.com">dld_cit2024@gmail.com</a></div>
                </div>
            </div>
            
            <div className="header-bot">
                <div className="container">
                    <div className="col-md-3 header-left">
                        <img className="img" src="" alt=""/>   
                    </div>
                    <div className="col-md-6 header-middle">
                        <form>
                            <div className="search">
                                <input />
                                {/* <input type="search" value="Tìm kiếm" onFocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" required="" /> */}
                            </div>
                            <div className="section_room">
                                <select id="country" onchange="change_country(this.value)" className="frm-field required">
                                    <option value="quanAo.html">Quần áo bảo hộ</option>
                                    <option value="null">Giày Bảo Hộ</option>     
                                    <option value="AX">Găng Tay Bảo Hộ</option>
                                    <option value="AX">Nón Bảo Hộ</option>
                                    <option value="AX">Mắt Kính Bảo Hộ</option>
                                </select>
                            </div>
                            <div className="sear-sub">
                                <input type="submit" value=" " />
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                    <div className="col-md-3 header-right footer-bottom">
                        <ul>
                            <li><a href="#" className="use1" data-toggle="modal" data-target="#myModal4"><span>ĐĂNG NHẬP</span></a>

                            </li>
                            <li>
                                <a className="fb" href="#" alt></a>
                            </li>
                            <li>
                                <a className="twi" href="#" alt></a>
                            </li>
                            <li>
                                <a className="insta" href="#" alt=""></a>
                            </li>
                            <li>
                                <a className="you" href="#"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
}

export default Header;