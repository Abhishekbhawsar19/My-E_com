import { NavLink } from "react-router-dom";
import styled from "styled-components";

import image  from "../hero.jpg"
import btn_Image from "./button.png";

const HeroSection = () => {


  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
        
            <section >
 
        <h4 style={{ fontSize:"2rem",  paddingBottom: 15}}>Trade-in-offer </h4>
        <h2>Super value deals</h2>
        <h1 style={{color: "#088178"}}>On all products</h1>
        <p >Save more with coupons & up to 70% off!</p>
        <button style={{
          width: '26vh',
          height: '6vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
         backgroundImage: `url(${btn_Image} )`,
           backgroundColor: "transparent",
           color: "#088178",
           border: 0,
           padding: "14 80 14 65",
           cursor: "pointer",
           fontWeight: 700,

           fontSize: 15,
        }}>Shop Now </button>
     </section>
           
          </div>
          {/* our homepage image 
          */}
           <div className="hero-section-image">
            <figure>
            <img src={image} alt="" className="img-style" />
            </figure>
    
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;