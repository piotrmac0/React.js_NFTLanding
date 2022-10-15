import React, { Component } from 'react';
import Slider from 'react-slick';           /* Slider / Carousel from React Slick installed by npm */
import './carousel.scss';                   /* import Slick modules/files */  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import toplist_img1 from '../../assets/toplist_img1.png';
import toplist_creator1 from '../../assets/toplist_creator1.png';
import toplist_img2 from '../../assets/toplist_img2.png';
import toplist_creator2 from '../../assets/toplist_creator2.png';
import toplist_img3 from '../../assets/toplist_img3.png';
import toplist_creator3 from '../../assets/toplist_creator3.png';
import toplist_img4 from '../../assets/toplist_img4.png';
import toplist_creator4 from '../../assets/toplist_creator4.png';


const Carousel = () => {
     /* Slick Slider settings */                          
    var settings = {          
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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

  return (

<>

    <div class="carousel_container">

        <h2 className="carousel_title"> Explore on different marketplaces </h2>

        <Slider {...settings}>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img1} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator1} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img2} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator2} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img3} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator3} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                     <div className="carousel_item">
                        <img src={toplist_img4} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator4} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img1} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator1} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img2} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator2} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img3} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator3} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={toplist_img4} className="carousel_item_img" alt="toplist1"/>
                        <img src={toplist_creator4} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Hibnastiar</h3>
                        <h4>27.3K <p>Artwork</p></h4>
                        <a href="#"><button className="btn1">Followed</button></a>
                    </div>
          </div>
        </Slider>
      </div>
   </>
  )

}

export default Carousel