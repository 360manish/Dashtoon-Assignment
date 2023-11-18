import img1 from "../Assets/img-4.webp";
import img2 from "../Assets/img-5.jpg";
import img3 from "../Assets/img-6.webp";
import img4 from "../Assets/img1.webp";
import img5 from "../Assets/img-2.webp";
import img6 from "../Assets/img-3.webp";
import React, { useContext } from "react";
import ImageContext from "../Context/comicContext";
export default function ComicStrip(){
    const tempURLs=[img1,img2,img3,img4,img5,img6]
    const {imgURLs} = useContext(ImageContext)
    if(imgURLs.length === 0){
        console.log("imgURLs array is empty")
        return 
    }
    return(
      <div>
        <div className="text-center text-white text-2xl font-bold">Your comic strip</div>
        <div>You only have {10-imgURLs.length} comics left</div>
        <div className="grid grid-cols-3">
      {/* Using map() to render a list of items */}
      {imgURLs.map((item, index) => (
        <div key={index} className="px-5 py-5 pt-5 pr-5">
          <img src={item} className="w-96 h-96"/>
        </div>
      ))}
    </div>
    </div>
    )
}