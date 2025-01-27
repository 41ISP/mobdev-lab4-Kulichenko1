import { ICatBreed } from "../../entities/catFacts/catFacts.rdo"

const ImageContainer = ({image}: {image: ICatBreed[]}) => {
    return (
        <div className="facts-container">
            {image.map((el) => (<img src={el.url}/>))}
        </div>
    )
}

export default ImageContainer