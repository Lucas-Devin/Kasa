import Card from "./Card";
import Banner from "./Banner.jsx";
import "../sass/Accueil.scss";
import data from "../data/data.json";


export default Accueil;

function Accueil() {
  
  return (
      <div>
          <Banner/>
            <div>
             <section className="cardcolumn">
              {data.map((location, index) => (
                  <Card location={location} key={index} />
             ))}
          </section>
            </div>
      </div>
  )
}