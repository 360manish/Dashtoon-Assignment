import Button from "@mui/material/Button";
export default function Navbar(props){

    return (
        <div className="flex justify-between item-center">
            <div className="mt-5 ml-5 mr-5 text-white font-bold text-5xl">Comic Generator</div>
            <div className="mt-5 ml-5 mr-5">
            <Button className="text-white" variant="outlined" onClick={props.onClick}>
                Create Comic
            </Button>
            </div>
        </div>
    )
}