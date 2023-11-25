import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

function HomeCarousel() {
  return (
    <Carousel data-bs-theme="dark" style={{paddingTop: "70px"}}>
      <Carousel.Item>
        <img
          style={{
            width: "70%",
            margin: "0 auto",
            display:
              "block",
            position:
              "relative",
            top: "50%" ,
          }}
          className="d-block w-70"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption style={{display:"flex",  justifyContent:"center"}}>
          <div
            style={{
              width: "70%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px"
            }}
          >
            <h5 style={{ color: "white" }}>"Coming together is a beginning; keeping together is progress; working together is success."</h5>
            <p style={{ color: "white" }}>
            - Henry Ford
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            width: "70%",
            margin: "0 auto",
            display:
              "block",
            position:
              "relative",
            top: "50%",
          }}
          className="d-block w-70"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption style={{display:"flex",  justifyContent:"center"}}>
          <div
            style={{
              width: "70%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
            }}
          >
            <h5 style={{ color: "white" }}>"Talent wins games, but teamwork and intelligence win championships."</h5>
            <p style={{ color: "white" }}>
            - Michael Jordan
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            width: "70%",
            margin: "0 auto",
            display:
              "block",
            position:
              "relative",
            top: "50%",
          }}
          className="d-block w-70"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption style={{display:"flex",  justifyContent:"center"}}>
          <div
            style={{
              width: "70%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
            }}
          >
            <h5 style={{ color: "white" }}>"It is literally true that you can succeed best and quickest by helping others to succeed."</h5>
            <p style={{ color: "white" }}>
            - Napoleon Hill
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
