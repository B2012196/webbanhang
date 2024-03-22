import './login.css';

const Login = () => {
    return ( 
        <>
            <div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content modal-info">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body modal-spa">
                            <div class="login-grids">
                                <div class="login">
                                    <div class="login-bottom">
                                        <h3>Đăng Ký Tài Khoản Miễn Phí</h3>
                                        <form>
                                            <div class="sign-up">
                                                <h4>Email :</h4>
                                                <input type="text" value="Type here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Type here';}" required="" />
                                            </div>
                                            <div class="sign-up">
                                                <h4>Mật khẩu :</h4>
                                                <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required="" />

                                            </div>
                                            <div class="sign-up">
                                                <h4>Xác nhận mật khẩu :</h4>
                                                <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required="" />

                                            </div>
                                            <div class="sign-up">
                                                <input type="submit" value="ĐĂNG KÝ NGAY" />
                                            </div>

                                        </form>
                                    </div>
                                    
                                    <div class="login-right">
                                        <h3>ĐĂNG NHẬP VỚI TÀI KHOẢN CỦA BẠN</h3>
                                        <form>
                                            <div class="sign-in">
                                                <h4>Email :</h4>
                                                <input type="text" value="Type here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Type here';}" required="" />
                                            </div>
                                            <div class="sign-in">
                                                <h4>Mật khẩu :</h4>
                                                <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required="" />
                                                <a href="#">Quên mật khẩu?</a>
                                            </div>
                                            <div class="single-bottom">
                                                <input type="checkbox" id="brand" value="" />
                                                <label for="brand"><span></span>Ghi nhớ tài khoản</label>
                                            </div>
                                            <div class="sign-in">
                                                <input type="submit" value="SIGNIN" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <p>Bạn đồng ý với<a href="#"> Điều khoản và Điều kiện</a> cũng như <a href="#">Chính sách quyền riêng tư của chúng tôi</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;
