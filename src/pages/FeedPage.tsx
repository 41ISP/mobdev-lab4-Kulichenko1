import { useEffect } from "react";
import Button from "../components/Button";
import "../shared/api.ts";
import CatApi from "../shared/api.ts";
import { useState } from "react";
import { ICatBreed } from "../entities/catFacts/catFacts.rdo.ts";
import "./FeedPage.css"
import CatContainer from "../components/CatContainer/CatContainer.tsx";

const FeedPage = () => {
    const [id, setId] = useState();
    const [url, setUrl] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [images, setImages] = useState<ICatBreed[]>([])

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

        <div className="cats">
            {
                images.map((catsimgs) => (
                <CatContainer {...catsimgs}/>
                )
                )
            }
        </div>

    )

}

export default FeedPage;