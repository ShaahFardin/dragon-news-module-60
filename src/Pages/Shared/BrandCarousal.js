import Carousel from "react-bootstrap/Carousel";

function BrandCarousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/grizzly-bears-forest-scene_1308-113216.jpg?w=1380&t=st=1666177584~exp=1666178184~hmac=5a7698daa71a8921ccd4aaaf22e6cb99f827a5459889b6074a97178912e118ec"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/grizzly-bears-forest-scene_1308-113216.jpg?w=1380&t=st=1666177584~exp=1666178184~hmac=5a7698daa71a8921ccd4aaaf22e6cb99f827a5459889b6074a97178912e118ec"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousal;
