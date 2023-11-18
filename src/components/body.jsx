import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Assets/img-4.webp";
import img2 from "../Assets/img-5.jpg";
import img3 from "../Assets/img-6.webp";
import img4 from "../Assets/img1.webp";
import img5 from "../Assets/img-2.webp";
import img6 from "../Assets/img-3.webp";
import bgImage from "../Assets/bg-image.webp"
export default function Body() {
  const imagePath = "/Assets/bg-image.jpg";
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-white font-bold text-3xl">Welcome to the comic generator!</h1>
        <h3 className="text-center text-white text-3xl">Create your comic by clicking on the CREATE COMIC button. Have fun!</h3>
      </div>
      <div className="flex justify-between mt-20 mr-10 ml-10">
        <div>
          <img src={img1} className="w-96 h-96"></img>
        </div>
        <div>
          <img src={img2} className="w-96 h-96"></img>
        </div>
        <div>
          <img src={img3} className="w-96 h-96"></img>
        </div>
      </div>
      <div className="flex justify-between mt-20 mr-10 ml-10">
        <div>
          <img src={img4} className="w-96 h-96"></img>
        </div>
        <div>
          <img src={img5} className="w-96 h-96"></img>
        </div>
        <div>
          <img src={img6} className="w-96 h-96"></img>
        </div>
      </div>
    </div>
  );
}
