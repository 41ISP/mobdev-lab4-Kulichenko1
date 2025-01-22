import { ICatImage } from "../../entities/catFacts/catFacts.rdo"

const ImageContainer = ({image}: {image: ICatImage[]}) => {
    return (
        <div className="facts-container">
            {image.map((el) => (<img src={el.url}/>))}
        </div>
    )
}

export default ImageContainer