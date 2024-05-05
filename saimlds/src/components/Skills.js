import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item" style={{transition:"all 300 ease-in",padding:"10px"}}>
                                <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714917681/Members%20pics/80961b97-6e8a-4d14-8f6d-583f168c3918_hek6ht.jpg" alt="Image" style={{borderRadius:"10px"}}/>
                                <h5 style={{textAlign:"center"}}>Web Development</h5>
                            </div>
                            <div className="item" style={{transition:"all 300 ease-in",padding:"10px"}}>
                                <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714917668/Members%20pics/15073d60-4c89-492f-824a-7683ccaf5665_qjq90e.jpg" style={{borderRadius:"10px"}} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item" style={{transition:"all 300 ease-in",padding:"10px"}}>
                                <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714917668/Members%20pics/15073d60-4c89-492f-824a-7683ccaf5665_qjq90e.jpg" style={{borderRadius:"10px"}} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item" style={{transition:"all 300 ease-in",padding:"10px"}}>
                                <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714917668/Members%20pics/15073d60-4c89-492f-824a-7683ccaf5665_qjq90e.jpg" style={{borderRadius:"10px"}} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
