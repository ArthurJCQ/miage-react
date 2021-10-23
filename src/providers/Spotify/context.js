import { createContext } from 'react';

// Je crée mon contexte en spécifiant quelles informations seront fournies par mon provider. cf provider.jsx
const SpotifyContext = createContext({
    isAuthenticated: false,
    logout: () => {},
    authenticate: async () => {},
});

export default SpotifyContext;
