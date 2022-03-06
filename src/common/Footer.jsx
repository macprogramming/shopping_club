import React from 'react'

const Footer = () => {
    return(
        <>
            <div className="container-fluid theme-bg-primary mt-5">
                <div className="row">
                    <footer className="my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>Subscribe Newsletter</h4>
                                    <p>Subscribe newsletter to get 5% on all product</p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <form className="d-flex w-100 justify-content-center">
                                        <input type="text" class="form-control form-control-sm" placeholder="Enter Your Email" />                                
                                        <button type="button" class="btn btn-md">Subscribe</button>
                                    </form>
                                </div>
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center social-media-icon">
                                        <a><i className="fa fa-facebook"></i></a>
                                        <a><i className="fa fa-google"></i></a>
                                        <a><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </footer>
                </div> 
            </div>
            <div className="container-fluid theme-bg-secondary py-5">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3 text-white d-flex justify-content-center align-items-center">
                            <i className="fa fa-home px-2"></i>
                            <h3>Fashion Tapari</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 text-white text-start">
                            <h6>Shop Men</h6>
                            <ul className="list-unstyled text-muted mt-md-4">
                                <li><a>Clothing Fashion</a></li>
                                <li><a>Winter</a></li>
                                <li><a>Summer</a></li>
                                <li><a>Formal</a></li>
                                <li><a>Casual</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                    <div class="p-3 text-white text-start">
                            <h6>Shop Women</h6>
                            <ul className="list-unstyled text-muted mt-md-4">
                                <li><a>Clothing Fashion</a></li>
                                <li><a>Winter</a></li>
                                <li><a>Summer</a></li>
                                <li><a>Formal</a></li>
                                <li><a>Casual</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                    <div class="p-3 text-white text-start">
                            <h6>Baby Collection</h6>
                            <ul className="list-unstyled text-muted mt-md-4">
                                <li><a>Clothing Fashion</a></li>
                                <li><a>Winter</a></li>
                                <li><a>Summer</a></li>
                                <li><a>Formal</a></li>
                                <li><a>Casual</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                    <div class="p-3 text-white text-start">
                            <h6>Quick Links</h6>
                            <ul className="list-unstyled text-muted mt-md-4">
                                <li><a>Track Your Order</a></li>
                                <li><a>Support</a></li>
                                <li><a>FAQs</a></li>
                                <li><a>Carrier</a></li>
                                <li><a>About</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="container-fluid theme-bg-primary">
                <div className="row">
                    <div className="py-1 align-items-center d-flex justify-content-center">
                        <p>Fashion Tapary @copyright2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;