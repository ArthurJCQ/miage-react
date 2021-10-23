import { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { ThemeContext } from "../../providers/Theme/context";
import { constants } from "../../constants";

const About = () => {
    // Me permet de récupérer ce que me fourni le router (cf documentation). Ici je veux l'état fourni lors du history.push()
    const location = useLocation();
    const theme = useContext(ThemeContext);

    return (
        <div 
            className="layout" 
            style={{
                backgroundColor: theme.background,
                color: theme.textColor
            }}
        >
            <h1>About</h1>
            {/* =>  location.state?.quote est équivalent à : location.state && location.state.quote   =>  Ainsi je vérifie plus simplement si quote est défini */}
            { location.state?.quote && (
                <p>{location.state.quote}</p>
            )}
            {/* J'utilise une constante pour gérer mes routes. cf le fichier constants.js */}
            <Link to={constants.PATHS.HOME}>Home</Link>
        </div>
    );
}

export default About;
