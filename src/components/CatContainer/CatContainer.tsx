import { ICatBreed } from "../../entities/catFacts/catFacts.rdo"
import "./CatContainer.css"

const CatContainer = (catsimgs: ICatBreed) => {
    return <div className="cat-container">
        <img className="cat-container__image" src={catsimgs.url} />
    </div>
}

export default CatContainer