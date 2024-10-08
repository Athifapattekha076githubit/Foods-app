import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function CheifCard({cheif}) {
    return (
        <div className="cheif-card">
            <img src={cheif.img} alt="" />
            <div className="cheif-card-info">
                <h3 className="cheif-card-name">{cheif.name}</h3>
                <p className="cheif-recipe-count">Recipes: <b>{cheif.recipesCount}</b></p>
                <p className="cheif-cuisine">Cuisine: <b>{cheif.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}