import { Link } from "react-router-dom";
import './recipe-card.styles.scss'

const RecipeCard = () => {
    return( 
        <Link>
            <img src={image} alt={`$`}/>
            <div>
                <span>{name}</span>
            </div>
        </Link>
    )
}

export default RecipeCard;