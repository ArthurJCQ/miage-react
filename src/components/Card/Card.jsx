import logo from '../../logo.svg';
import './style.css';

function Card({color}) {
    return (
        <div className="card" style={{backgroundColor: color}}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Card;
