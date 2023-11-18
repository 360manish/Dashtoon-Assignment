import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ComicState from "../Context/comicState";
import ImageContext from "../Context/comicContext";
import DialogTitle from "@mui/material/DialogTitle";
import Navbar from "./Navbar";
import toast from "react-hot-toast";

export default function FormDialog() {
  const {open, setOpen, handleClose,handleClickOpen,  imgURLs, setImgURLs, inputValue, setInputValue, query} =
    React.useContext(ImageContext);
  const handleCreateComic = () => {
    handleClose();
    console.log("I am under handleCreateComic");
  };
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setInputValue(e.target.value)
    console.log("handle the change");
  };
  const handleSubmit = async  (e) => {
    e.preventDefault();
    handleClose()
    try {
        toast.loading("Loading..."); // Display loading toast
    
        const imgURL = await query(inputValue); // Assuming query returns a Promise
        setImgURLs([...imgURLs,imgURL])
        toast.dismiss(); // Dismiss loading toast
        toast.success("Image Fetched Successfully", { duration: 1000 }); // Display success toast
        setInputValue("")
      } catch (error) {
        toast.dismiss(); // Dismiss loading toast in case of an error
        toast.error("Error fetching image"); // Display an error toast
      }
    // toast.loading("loading")
    // const imgURL = await query(inputValue)
    // toast.dismiss()
    // toast.success("Image Fetched Successfully",{duration:1000})
    // setImgURLs([...imgURLs,imgURL])
    // console.log("handle submit function");
  };
  return (
    <React.Fragment>
      <Navbar onClick={handleClickOpen} />
      <Dialog className="w-lg" open={open} onClose={handleClose}>
        <DialogTitle>
          Enter the comic text <br></br>
          <span>At max 10 inputs can be selected</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "400px",
              }}
            >
              <form  className="">
                <div>
                  <label htmlFor="comic-1">Comic text :</label>
                  <textarea
                    type="text"
                    value={inputValue}
                    rows="5"
                    id="comic-1"
                    name="comic-1"
                    className="border border-gray-400 p-2 w-full"
                    onChange={handleChange}
                  />
                </div>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" onClick={handleSubmit} className="border-1px">
                    Create Comic
                  </Button>
                </DialogActions>
              </form>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
