import { Carousel } from "@material-tailwind/react";
 
function CarouselDefault() {
  return (
    <Carousel className="w-[700px] h-[570px]">
      <img
        src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault