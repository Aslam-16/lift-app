import "./footer.scss";

const Footer = () => (
   <>
        <div class="footer-container container-fluid">
            <div className="container pt-24">
                <div className="row">
                    <div className="col-lg-4 text-white">
                        <h4 class="text-white mb-3">Contact</h4>
                        <div className="phone-number-section">
                            <a href="tel:+91 9791949933" className="text-white">
                                Call Now
                            </a>
                            <p>+91 9791949933</p>
                        </div>
                        <div className="email-section">
                            <a href="mailto:jayavel2000eee@gmail.com" className="text-white">
                                Mail to
                            </a>
                            <p>jayavel2000eee@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4 class="text-white mb-3">Address</h4>
                        <div>
                            142, Rere, Kandk
                            Panruti, Cuddalore dt.
                        </div>
                        <a target="blank" href="https://www.google.com/maps/dir//Chidambaram,+Tamil+Nadu/@11.4071262,79.6500456,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a54c23aa1bce10b:0xe1a29e91a8ec81aa!2m2!1d79.6912455!2d11.4070449?entry=ttu">Get Direction</a>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">startlift.com</a>, All Right Reserved.

                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn footer-container">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Contact</h4>
                        <a href="tel:+91 9791949933" className="phone-number-section d-flex">
                            Call Now
                        </a>
                        <p>+91 9791949933</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <a href="https://www.google.com/maps/dir//Chidambaram,+Tamil+Nadu/@11.4071262,79.6500456,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a54c23aa1bce10b:0xe1a29e91a8ec81aa!2m2!1d79.6912455!2d11.4070449?entry=ttu" target="_blank">Get Directions</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Gallery</h4>

                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Newsletter</h4>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">startlift.com</a>, All Right Reserved.

                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  */}
   </> 
);

export default Footer;
