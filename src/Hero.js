import './App.css'
import macarons from './macarons.jpg'

const Hero = () => {
    return (
      <div className="hero-background">
        <img src={macarons}></img>
        <div className="text-container">
        <h1>Big Momma's</h1>
        </div>
      </div>
    );
}
 
export default Hero;