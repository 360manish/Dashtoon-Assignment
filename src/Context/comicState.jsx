import ImageContext from "./comicContext";
import React, { useState } from "react";
import toast from "react-hot-toast";
export default function ComicState({ children }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [imgURLs, setImgURLs] = useState([])
  const handleClickOpen = () => {
    if(imgURLs.length===10){
      toast.error("You have already feteched 10 images"); 
        return
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateComic = () => {
    handleClose();
    console.log("I am under handleCreateComic");
  };
  const query = async (data) =>{
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({inputs:data}),
      }
    );
    const result = await response.blob();
    const url = URL.createObjectURL(result);
    return url;
  }
  const contextValue = {
    open,
    inputValue,
    setInputValue,
    setOpen,
    handleClose,
    handleCreateComic,
    handleClickOpen,
    query,
    imgURLs,
    setImgURLs
  };
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}
