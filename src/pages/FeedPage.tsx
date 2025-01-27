import { useEffect } from "react";
import Button from "../components/Button";
import "../shared/api.ts";
import CatApi from "../shared/api.ts";
import { useState } from "react";
import { ICatImage } from "../entities/catFacts/catFacts.rdo.ts";

const FeedPage = () => {
    const [id, setId] = useState();
    const [url, setUrl] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [images, setImages] = useState<ICatImage[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const catsimgs = await CatApi.fetchdata()
            catsimgs && setImages(catsimgs);
        }
        fetchData()
    }, [])

    const onClick = () => {
        console.log()
    }

    return (
        
        <div className="feedform">
            <Button onClick={onClick}></Button>
        const ListItems = catsimgs.map((catsimgs) => 
                <li>{catsimgs}</li>
        </div>
        
    )

}

export default FeedPage;