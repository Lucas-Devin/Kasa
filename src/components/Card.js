/* eslint-disable react/react-in-jsx-scope */
import "../sass/Card.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default Card;

 function Card({ location }) {
  return (
      <Link className="lien" to={"/fiche-logement/" + location.id} key={"" + location.id}>
          <article className="Card">
            <div className="shadow"></div>
              <img className="photo" src={location.cover}
                  alt={location.title} />
              <h2  >{location.title}</h2>
          </article>
      </Link>
  )
}

Card.propTypes = {
  location: PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
  }).isRequired
}