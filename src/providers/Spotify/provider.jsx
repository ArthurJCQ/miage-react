import React, { useCallback } from  'react';
import { useState } from "react"
import SpotifyContext from "./context"

const SpotifyProvider = ({children}) => {
    // Je peux utiliser des hooks dans mon contexte.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Ma fonction qui me permet de connecter à mon API et de récupérer mon token
    const authenticate = useCallback(async () => {
        const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: `grant_type=client_credentials`,
        }).then(res => res.json())

        // Un token est une donnée sensible qui doit être uniquement connue par le client (le navigateur), je le stocke donc dans le localStorage du browser
        localStorage.setItem('access_token', access_token);
        setIsAuthenticated(true);
    }, []);

    // Fonction pour se déconnecter de l'API Spotify. C'est grâce au token récupéré plus tôt que je peux faire mes requêtes, j'ai donc juste à le supprimer.
    const logout = useCallback(() => {
        localStorage.setItem('access_token', null);
        // Je n'oublie pas de mettre à jour le state de mon contexte.
        setIsAuthenticated(false);
    }, []);

    return (
        <SpotifyContext.Provider value={{ authenticate, logout, isAuthenticated}}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyProvider;
