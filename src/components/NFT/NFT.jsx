import React from 'react';
import Slider from 'react-slick';
import './nft.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pauSmall from '../../assets/pauSmall.png';
import opensea from '../../assets/opensea_banner.jpg';
import superrare from '../../assets/superare_banner.jpg';
import rarible from '../../assets/rarible_banner.jpg';

const NFT = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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

    <div class="followed_carousel_container">

        <Slider {...settings}>
          <div>
                    <div className="carousel_item">
                        <img src={opensea} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Opensea</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={superrare} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>SuperRare</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={rarible} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Rarible</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={opensea} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Opensea</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                      <div className="carousel_item">
                        <img src={superrare} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>SuperRare</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                      <div className="carousel_item">
                        <img src={rarible} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Rarible</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                     <div className="carousel_item">
                        <img src={superrare} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>SuperRare</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
          <div>
                    <div className="carousel_item">
                        <img src={opensea} className="carousel_item_img" alt="toplist1"/>
                        <img src={pauSmall} className="carousel_item_creator" alt="toplist1"/>
                        <h3>Opensea</h3>
                        <a href="#"><button className="btn1">Marketplace</button></a>
                    </div>
          </div>
        </Slider>
      </div>
   
  )

}

export default NFT