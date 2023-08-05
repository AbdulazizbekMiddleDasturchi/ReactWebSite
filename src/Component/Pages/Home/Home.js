import { useContext, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Share from "./Assets/Share.png";
import Compare from "./Assets/Compare.png";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai"
import Rasm1 from "./Assets/Rasm1.png";
import Rasm2 from "./Assets/Rasm2.png";
import Rasm3 from "./Assets/Rasm3.png";
import { NavLink } from 'react-router-dom';
import Carusel1 from "./Assets/Carusel1.png";
import Carusel2 from "./Assets/Carusel2.png";
import Carusel3 from "./Assets/Carusel3.png";
import RasmM1 from "./Assets/Rectangle 36.png";
import RasmM2 from "./Assets/Rectangle 37.png";
import RasmM3 from "./Assets/Rectangle 38.png";
import RasmM4 from "./Assets/Rectangle 39.png";
import RasmM5 from "./Assets/Rectangle 40.png";
import RasmM6 from "./Assets/Rectangle 41.png";
import RasmM8 from "./Assets/Rectangle 43.png";
import RasmM9 from "./Assets/Rectangle 44.png";
import RasmM10 from "./Assets/Rectangle 45.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextAbdulazizbek } from '../../Context/Context';
export default function Home({ product }) {
  const { cardData, setCardData, handleLike, handleCart, } = useContext(ContextAbdulazizbek);
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", background: "grey", borderRadius: "50%", width: "19px", paddingLeft: "-15px", height: "18px" }} onClick={onClick} />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow className="Next" />,
    prevArrow: <Arrow className="Back" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div>
      <div className='HomeBackground-Image'>
        <div className='HomeDivDiv1'>
          <div className='HomeDivDiv2'>
            <span className='HomeDivSpan'>New Arrival</span>
            <div className='HomeDivDivH1'>
              <h1 className='HomeDivH1'>Discover Our New Collection</h1>
            </div>
            <div className='HomeDivDivP'>
              <p className='HomeDivP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div>
              <NavLink to="Shop">
                <button className='HomeButton'>BUY Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='HomeDiv2'>
        <div className='HomeDiv2Div2'>
          <h3>Browse The Range</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='HomeDiv2Div2-CardS'>
            <div className='HomeCard'>
              <img src={Rasm1} alt="" />
              <p>Dining</p>
            </div>
            <div className='HomeCard'>
              <img src={Rasm2} alt="" />
              <p>Living</p>
            </div>
            <div className='HomeCard'>
              <img src={Rasm3} alt="" />
              <p>Bedroom</p>
            </div>
          </div>
        </div>
      </div>
      <div className='HomeDIv3'>
        <div className='HomeDIv3Div3'>
          <h3>Our Products</h3>
          <div className='HomeDiv3Div3CardS'>
            {
              cardData.map((value) => {
                return (
                  <div key={value.id}>
                    <div style={{ marginBottom: "300px" }} className='HomeDiv3Div3CardSCard'>
                      <img src={value.img} alt="" />
                      <h3>{value.name1}</h3>
                      <p>{value.name2}</p>
                      <div className='HomeDiv3Div3CardSCardDiv'>
                        <h3>{value.name3}</h3>
                        <del>{value.name4}</del>
                      </div>
                    </div>
                    <div className='ADD'>
                      <button className='ADDBUTOON' onClick={()=>handleCart()}>Add to cart</button> {/* */}
                      <div className='HDD'>
                        <img src={Share} alt="" />
                        <p>Share</p>
                        <img src={Compare} alt="" />
                        <p>Compare</p>
                        <span onClick={() => handleLike(value.id)}>{value.like ? <AiTwotoneLike color='red' fontSize={20} /> : <AiOutlineLike fontSize={20} />}</span>{/* */}
                        <p>Like</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='HomeDiv3Div3CardSDivButtonDiv'>
            <NavLink to="/Shop">
              <button className='HomeDiv3Div3CardSDivButtonDivButoon'>Show More</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#FCF8F3", width: "100%", height: "500px", marginBottom: "200px" }} className='HomeDiv4'>
        <div className='HomeDiv4Div4'>
          <div className='HomeDiv4Div4Div4Div1'>
            <h1> 50+ Beautiful rooms inspiration</h1>
          </div>
          <div className='HomeDiv4Div4Div4Div2'>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
          <div>
            <NavLink to="/Shop">
              <button className='HomeDiv4Div4Div4DivButton'>Explore More</button>
            </NavLink>
          </div>
        </div>
        <div className='HomeDiv4Div4Div4Div3'>
          <img src={Carusel1} alt="" />
          <div style={{ marginLeft: "380px", width: "400px", marginTop: "-455px", height: "200px", gap: "10px" }}>
            <Slider {...settings}>
              <div className='HelloHello'>
                <img height={400} width={300} src={Carusel2} alt="" />
              </div>
              <div style={{ paddingLeft: "200px" }} className='HelloHello'>
                <img height={400} src={Carusel3} alt="" />
              </div>
              <div className='HelloHello'>
                <h1>3</h1>
              </div>
              <div className='HelloHello'>
                <h1>4</h1>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <p style={{ textAlign: "center", color: "#616161", fontWeight: "600", fontSize: "20px" }}>Share your setup with</p>
        <h3 style={{ textAlign: "center", color: "#3A3A3A", fontWeight: "700", fontSize: "40px" }}>#FuniroFurniture</h3>
        <div>
          <img style={{ margin: "0px 8px 8px 8px" }} src={RasmM1} alt="" />
          <img style={{ margin: "0px 8px 8px 8px", width: "443px" }} src={RasmM3} alt="" />
          <img style={{ margin: "0px 8px -198px 8px", marginTop: "200px" }} src={RasmM5} alt="" />
          <img style={{ margin: "0px 8px 8px 8px", }} src={RasmM8} alt="" />
          <img style={{ margin: "0px 8px 8px 0px", }} src={RasmM10} alt="" />
          <img style={{ margin: "0px 8px 0px 8px", }} src={RasmM2} alt="" />
          <img style={{ margin: "0px 318px 88px 8px", width: "335px" }} src={RasmM4} alt="" />
          <img style={{ margin: "0px 8px 89px 8px", }} src={RasmM6} alt="" />
          <img style={{ margin: "0px 8px 138.5px 8px", }} src={RasmM9} alt="" />
        </div>
      </div>
    </div>
  )
}