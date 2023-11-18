import Button from "@mui/material/Button";
export default function Navbar(props){

    return (
        <div className="flex justify-between item-center">
            <div className="mt-5 ml-5 mr-5 text-white font-bold text-5xl">Comic Generator</div>
            <div className="mt-5 ml-5 mr-5">
            <button className="text-white border-red border-2 bg-red-800 rounded" variant="outlined" onClick={props.onClick}>
                <div className="text-white font-bold text-xl px-2 py-2">Create Comic</div>
            </button>
            </div>
        </div>
    )
}