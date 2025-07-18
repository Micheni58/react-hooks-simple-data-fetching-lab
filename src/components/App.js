// create your App component here
import React, {useEffect,useState} from "react";
import { data } from "../mocks/data";

function App(){
    const [image, setImage] = useState(null);
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImage(data.message))
        console.log(data.message)
    },[])

    if(!image){
         return <h2>Loading...</h2>
    }
       
    return(
        <>
        <h1>App component</h1>
        <img src={image} alt="A Random Dog"/>
        </>
    )
}
export default App;