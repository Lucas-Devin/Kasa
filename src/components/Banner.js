import '../App.css';
import background1 from '../background1.png';

function Banner() {
  return (
      <div className="App-banner">
        <img className="background" src={background1} alt="background" />
        <h1 className="Banner"> Chez vous, partout et ailleurs </h1>
      </div>
  );
}



export default Banner;
