// Mon custom hook. Mon hook peut utiliser d'autre hook (comme un useState ou un useEffect par exemple). Mais ici je n'en ai pas besoin.
const useKanyeQuote = () => {
    // Ma fonction de fetch sur l'API Kanye Quote
    const fetchKanyeQuote = async () => {
        const result = await fetch(
            'https://api.kanye.rest/',
        );
        return result.json();
    };

    // Je retourne ce qui pourra être récupéré par les composants qui utiliseront ce hook.
    return fetchKanyeQuote;
}

export default useKanyeQuote;
