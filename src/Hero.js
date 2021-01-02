import './App.css'
import macarons from './macarons.jpg'

const Hero = () => {
    // const hero= require('./macarons.jpg')
    return (
      <div className="hero-background">
        <img src={macarons}></img>
      </div>
    );
}
 
export default Hero;