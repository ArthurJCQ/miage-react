import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { constants } from '../../constants';
import { ThemeContext } from '../../providers/Theme/context';
import useKanyeQuote from '../../hooks/useKanyeQuote';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';
import './style.css';
import SpotifyContext from '../../providers/Spotify/context';

const CatFactLayout = () => {
    // Hook me permettant d'accéder à des fonctions de routing
    const history = useHistory();
    // Hook me permettant de récupérer mon contexte de theme
    const theme = useContext(ThemeContext);
    // Hook me permettant de récupérer mon contexte spotify
    const { authenticate, logout, isAuthenticated } = useContext(SpotifyContext);

    // mon custom hook qui fetch sur l'API Kanye Quote
    const fetchKanyeQuote = useKanyeQuote();


    // hook d'état pour gérer un state de mon composant, ici un loading
    const [loading, setloading] = useState(false);
    // hook d'état pour gérer un state de mon composant, ici un disable de bouton
    const [disableButton, setdisableButton] = useState(false);
    
    const [quote, setQuote] = useState();

    // Après le clic sur un bouton, j'exécute cette fonction
    const fetchData = async () => {
        // Si je ne suis pas authentifié je ne vais pas plus loin
        if (!isAuthenticated) {
            console.log('Not authenticated !');
            return;
        }
        // Je mets mon state de loading à true pendant la récupération de données
        setloading(true);
        
        // Mon fetch est asynchrone, je mets un await. C'est mon custom hook qui me fournit cette fonction
        const result = await fetchKanyeQuote();
        
        // J'ai récupéré mes données, je passe le loading à false.
        setloading(false);
        setQuote(result.quote);
        // Grâce au history fournit par le hook useHistory, j'ai accès à cette fonction qui me facilite le changement de page.
        // Ici je décide en plus de passer un état à cette page; le résultat de mon fetch
        // Enfin, J'utilise une constante pour gérer mes routes. cf le fichier constants.js
        history.push({
            pathname: constants.PATHS.ABOUT,
            state: { quote: result.quote }
        });
    }

    // Ici je souhaite récupérer l'évènement d'un formulaire qui a été soumis.
    const handleSubmit = (event) => {
        // Certaines actions s'exécutent par défaut lors de la récupération d'évènement. le preventDefault les empêche de se déclencher.
        event.preventDefault();
        // Cette fonction ne fait rien de particulier.
        console.log("submit");
    };

    // Ce hook permet de gérer le cycle de vie de mon composant
    useEffect(() => {
        // Tout ce qui est appelé ici est exécuté au montage de mon composant.
        authenticate();

        // Je peux spécifier un return dans mon useEffect. Il sera appelé seulement lorsque je quitte mon composant.
        return () => logout();
        // Je peux mettre dans ce tableau les dépendances du useEffect. Le useEffect sera rééxécuté automatiquement si une de ces valeurs change.
    }, [authenticate, logout])

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div 
            className="layout" 
            style={{
                backgroundColor: theme.background,
                color: theme.textColor
            }}
        >
            <Button 
                onCLick={authenticate}
                text="Connexion" 
            />
            <Button 
                onCLick={logout}
                text="Déconnexion" 
            />
            <h1>Kanye Quote</h1>
            <ul>
                {/* J'utilise une constante pour gérer mes routes. cf le fichier constants.js */}
                <li><Link to={constants.PATHS.ABOUT}>About</Link></li>
            </ul>
            <Checkbox 
                checkChange={(event) => setdisableButton(event.target.checked)}
                label="Enable Button" 
            />
            <Button 
                loading={loading}
                onCLick={fetchData}
                text="New quote" 
                disabled={disableButton || !isAuthenticated}
            />
            <p>{quote}</p>
            { !isAuthenticated && (
                <p>Connectez vous pour pouvoir cliquer.</p>
            )}
            <Form submit={(e) => handleSubmit(e)}>
                <input name='input1' />
            </Form>
        </div>
    )
}

export default CatFactLayout;
