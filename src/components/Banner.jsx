/* eslint-disable react/prop-types */
import Source_1 from '../background1.png';
import Source_2 from '../background3.png';
import PropTypes from "prop-types"

const bannerImages = {
    "/": {
        image: Source_1,
        text: "Chez vous, partout et ailleurs",
    },
    "/propos": {
        image: Source_2,
        text: "",
    },
}

export default function Banner({ location }) {
    const currentPath = location.pathname
    const { image, text } = bannerImages[currentPath]

    return (
        <section
            className={`banner ${currentPath === "/" ? "" : "heightAboutBanner"}`}>
            <img src={image}
                alt="Bannière" />
            {currentPath === "/" && <h1>{text}</h1>}
        </section>
    )
}

Banner.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}