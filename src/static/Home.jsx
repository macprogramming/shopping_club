import React from "react";
import Slider from "react-slick";
import CardMen from "./products/mens/Cardmens";
import Cardwomen from "./products/mens/Cardwomen";
import Cardbaby from "./products/mens/Cardbaby";
import MayLikeCard from "./products/MayLikeCard";
import NewsCard from "./products/NewsCard";
import Testimonial from "./Testimonial";
import img_jeans from '../img/jeans.png';
import carosal1 from '../img/carosal1.jpg';
import carosal2 from '../img/carosal2.jpg';
import carosal3 from '../img/carosal3.jpg';
import jacket1 from '../img/jacket1.jpeg';
import netSemi from '../img/women1.jpg';
import baby1 from '../img/baby1.jpg';
import testimonial1 from '../img/textimonial1.jpeg';
import news1 from '../img/news1.webp';
import Mens from "./products/mens/Mens";

const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const setting_testimonial = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var settings_mayLike = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      var settings_news = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
            <Mens />
            {/* <div className="container-fluid">
                <div className="row mx-5 my-2">
                    <div className="col-md-8 bg-dark">
                        <div className="row">
                            <div className="col-5 align-items-center d-flex">
                                <div className="text-white">
                                    <h5>Fashion Sale</h5>
                                    <h2>Minimal Menz Style</h2>
                                    <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    <button type="button" className="btn theme-btn-primary w-50"><i className="fa fa-caret-right"></i>&nbsp;Shop Now</button>
                                </div>
                            </div>
                            <div className="col-7 px-0">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={carosal1} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={carosal2} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={carosal3} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column" >
                            <div className="d-flex justify-content-between align-items-center theme-bg-primary mb-1" style={{height: '150px'}}>
                                <div className="mx-3 px-3">
                                    <h3>Iron&nbsp;Heart</h3>
                                    <p>Jeans</p>
                                    <button type="button" className="btn btn-sm theme-btn-secondary-outline">Shop Now</button>
                                </div>
                                <div className="img">
                                    <img src={img_jeans} className="img img-fluid w-100 p-5" alt="img" style={{height: '220px'}} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-1 bg-dark" style={{height: '150px'}}>
                                <div className="mx-3 px-3 text-white" >
                                    <h3>Red&nbsp;Wings</h3>
                                    <p>Jeans</p>
                                    <button type="button" className="btn btn-sm theme-btn-primary-outline">Shop Now</button>
                                </div>
                                <div className="img">
                                    <img src={img_jeans} className="img img-fluid w-100 p-5" alt="img" style={{height: '220px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 mx-5 my2">
                    <div className="col">
                        <div className="card my-1">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-home"></i>
                                    <h6>Fast And Free Delivery</h6>
                                </div>
                                <p className="m-0">Free delivery on all orders</p>
                                <a>know more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-home"></i>
                                    <h6>Fast And Free Delivery</h6>
                                </div>
                                <p className="m-0">Free delivery on all orders</p>
                                <a>know more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-home"></i>
                                    <h6>Fast And Free Delivery</h6>
                                </div>
                                <p className="m-0">Free delivery on all orders</p>
                                <a>know more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-home"></i>
                                    <h6>Fast And Free Delivery</h6>
                                </div>
                                <p className="m-0">Free delivery on all orders</p>
                                <a>know more...</a>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="row mx-5 my-2">
                    <div className="col-xs-12">
                        <div className="d-flex justify-content-between my-4">
                            <h4>Treading This Week</h4>
                            <div>
                                <nav class="nav nav-pills custom-nav-pills" id="pills-tab" role="tablist">
                                    <a class="nav-link active" id="pills-men-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Men</a>
                                    <a class="nav-link" id="pills-women-tab" data-bs-toggle="pill" href="#pills-women" role="tab" aria-controls="pills-profile" aria-selected="false">Women</a>
                                    <a class="nav-link" id="pills-baby-tab" data-bs-toggle="pill" href="#pills-baby" role="tab" aria-controls="pills-profile" aria-selected="false">Baby </a>                                    
                                </nav>
                            </div>
                        </div><hr />
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-men-tab">
                                <div className="row">
                                    <Slider {...settings}>
                                        <CardMen
                                            img = {jacket1}
                                            productName = "TACVASEN Men's Winter Jacket-Fleece Cotton Military Coat Thicken Casual Cargo Bomber Jacket"
                                            price = "$62.98"
                                            discountPrice = "$82.98"
                                            offPrice = "-23%"
                                         />
                                         <CardMen
                                            img = {jacket1}
                                            productName = "TACVASEN Men's Winter Jacket-Fleece Cotton Military Coat Thicken Casual Cargo Bomber Jacket"
                                            price = "$62.98"
                                            discountPrice = "$82.98"
                                            offPrice = "-23%"
                                         /> 
                                         <CardMen
                                            img = {jacket1}
                                            productName = "TACVASEN Men's Winter Jacket-Fleece Cotton Military Coat Thicken Casual Cargo Bomber Jacket"
                                            price = "$62.98"
                                            discountPrice = "$82.98"
                                            offPrice = "-23%"
                                         /> 
                                         <CardMen
                                            img = {jacket1}
                                            productName = "TACVASEN Men's Winter Jacket-Fleece Cotton Military Coat Thicken Casual Cargo Bomber Jacket"
                                            price = "$62.98"
                                            discountPrice = "$82.98"
                                            offPrice = "-23%"
                                         /> 
                                         <CardMen
                                            img = {jacket1}
                                            productName = "TACVASEN Men's Winter Jacket-Fleece Cotton Military Coat Thicken Casual Cargo Bomber Jacket"
                                            price = "$62.98"
                                            discountPrice = "$82.98"
                                            offPrice = "-23%"
                                         />                                        
                                    </Slider>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-women" role="tabpanel" aria-labelledby="pills-women-tab">
                                <div className="row">
                                    <Slider {...settings}>
                                        <Cardwomen
                                            img = {netSemi}
                                            productName = "Buy Fast Fashions Women's Net Semi"
                                            price = "$73.88"
                                            discountPrice = "$80.88"
                                            offPrice = "-23%"
                                        />
                                        <Cardwomen
                                            img = {netSemi}
                                            productName = "Buy Fast Fashions Women's Net Semi"
                                            price = "$73.88"
                                            discountPrice = "$80.88"
                                            offPrice = "-23%"
                                        />
                                        <Cardwomen
                                            img = {netSemi}
                                            productName = "Buy Fast Fashions Women's Net Semi"
                                            price = "$73.88"
                                            discountPrice = "$80.88"
                                            offPrice = "-23%"
                                        />
                                        <Cardwomen
                                            img = {netSemi}
                                            productName = "Buy Fast Fashions Women's Net Semi"
                                            price = "$73.88"
                                            discountPrice = "$80.88"
                                            offPrice = "-23%"
                                        />
                                        <Cardwomen
                                            img = {netSemi}
                                            productName = "Buy Fast Fashions Women's Net Semi"
                                            price = "$73.88"
                                            discountPrice = "$80.88"
                                            offPrice = "-23%"
                                        />
                                    </Slider>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-baby" role="tabpanel" aria-labelledby="pills-baby-tab">
                                <div className="row">
                                    <Slider {...settings}>
                                        <Cardbaby
                                            img = {baby1}
                                            productName = "Burt's Bees Baby Boys' Sleep and Play PJs, 100% Organic Cotton One-Piece Romper Jumpsuit Zip Front Pajamas"
                                            price = "$7.30"
                                            discountPrice = "$26.95"
                                            offPrice = "-23%"
                                        />
                                        <Cardbaby
                                            img = {baby1}
                                            productName = "Burt's Bees Baby Boys' Sleep and Play PJs, 100% Organic Cotton One-Piece Romper Jumpsuit Zip Front Pajamas"
                                            price = "$7.30"
                                            discountPrice = "$26.95"
                                            offPrice = "-23%"
                                        />
                                        <Cardbaby
                                            img = {baby1}
                                            productName = "Burt's Bees Baby Boys' Sleep and Play PJs, 100% Organic Cotton One-Piece Romper Jumpsuit Zip Front Pajamas"
                                            price = "$7.30"
                                            discountPrice = "$26.95"
                                            offPrice = "-23%"
                                        />
                                        <Cardbaby
                                            img = {baby1}
                                            productName = "Burt's Bees Baby Boys' Sleep and Play PJs, 100% Organic Cotton One-Piece Romper Jumpsuit Zip Front Pajamas"
                                            price = "$7.30"
                                            discountPrice = "$26.95"
                                            offPrice = "-23%"
                                        />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>          
            <div className="container-fluid theme-bg-secondary text-white py-4 my-5">
                <div className="row-fluid">
                    <div className="col-xs-12">
                        <div className="d-flex justify-content-center my-4">
                            <h4 className="my-3">Customer Testimonial</h4>
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="offset-md-3 col-md-6">
                        <Slider {...setting_testimonial}>
                            <Testimonial 
                                comment = "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
                                imgProfile = {testimonial1}
                            />
                            <Testimonial 
                                comment = "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
                                imgProfile = {testimonial1}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col-xs-12">
                        <div className="d-flex justify-content-center my-4">
                            <h4 className="my-3">You May Like</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings_mayLike}>
                        <MayLikeCard
                            img = {netSemi}
                            productName = "Buy Fast Fashions Women's Net Semi"
                            price = "$73.88"
                            discountPrice = "$80.88"
                            offPrice = "-23%"
                        />
                    </Slider>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="d-flex justify-content-center my-4">
                            <h4 className="my-3">Latest News</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings_news}>
                        <NewsCard
                            news_image = {news1}
                            tipsPara = "Fashio Tips"
                            news_heading = "What Curling Irons Are The Best Ones"
                            news_text = "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."                            
                        />
                        <NewsCard
                            news_image = {news1}
                            tipsPara = "Fashio Tips"
                            news_heading = "What Curling Irons Are The Best Ones"
                            news_text = "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."                            
                        />
                        <NewsCard
                            news_image = {news1}
                            tipsPara = "Fashio Tips"
                            news_heading = "What Curling Irons Are The Best Ones"
                            news_text = "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."                            
                        />
                        <NewsCard
                            news_image = {news1}
                            tipsPara = "Fashio Tips"
                            news_heading = "What Curling Irons Are The Best Ones"
                            news_text = "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."                            
                        />
                        <NewsCard
                            news_image = {news1}
                            tipsPara = "Fashio Tips"
                            news_heading = "What Curling Irons Are The Best Ones"
                            news_text = "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."                            
                        />
                    </Slider>
                </div>
            </div> */}
        </>
    )
}

export default Home;