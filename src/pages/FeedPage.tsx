import { useEffect } from "react";
import Button from "../components/Button";
import "../shared/api.ts";
import CatApi from "../shared/api.ts";
import { useState } from "react";

const FeedPage = () => {
function MyComponent() {
    const [id, setId] = useState();
    const [url, setUrl] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
}
    useEffect(() => {

        
    }, [])

    const onClick = () => {
        console.log(CatApi.fetchdata())
    }

    return(
        <div className="feedform">
            <Button onClick={onClick}></Button>
        </div>
    )
    
}

export default FeedPage;