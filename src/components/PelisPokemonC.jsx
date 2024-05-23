import axios from "axios";
import {useState,useEffect} from "react";

export const PelisPokemonC = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "005f152d55e7afa4502e5b43687088de";
    const IMG_URL = `https://image.tmdb.org/t/p/original`;
    
    const [pelisP, setPelisP] = useState([]);
    const [seriesP, setSeriesP] = useState([]);
    
    const fetchMovies = async (searchP) =>{
        const {data: {results},
    } = await axios.get(`${API_URL}/search/movie?query=pokemon&language=es`, {
        params: {
            api_key: API_KEY,
            query: searchP,
        },
    });

    setPelisP(results)
    }

    useEffect(()=>{
        fetchMovies();
    }, [])

const fetchSeries = async (searchP) =>{
    const {data: {results},
} = await axios.get(`${API_URL}/search/tv?query=pokemon&language=es`, {
    params: {
        api_key: API_KEY,
        query: searchP,
    },
});
setSeriesP(results)
console.log(results)
}

useEffect(()=>{
    fetchSeries();
}, [])


return (
        <>

        <div>
            <h2 className="text-center mb-5 mt-5 shadow p-3 bg-body rounded"> 👀 Mira todo lo Relacionado a Pokemon en el Cine ... 📽</h2>
            
        </div>
        <div className="container mt-3">
            <div className="row">
                {pelisP.map((peli)=>(
                    <div key={peli.id} className="col-md-4 mb-3">
                        <img className="pelisImg" src={`${IMG_URL + peli.poster_path}`} alt= {peli.title}/>
                        <h6 className="text-center shadow p-3 mt-3 bg-body rounded" >{peli.title}</h6>
                        <p className="text-center shadow p-1 mb-1 bg-body rounded"> Fecha de Estreno: {peli.release_date}</p>
                        <p className="text-center shadow p-1 mb-1 bg-body rounded" > {peli.overview} </p>
                    </div>
                ))}
            </div>
        </div>

        <div>
        <h2 className="text-center mb-5 mt-5 shadow p-3 bg-body rounded"> 👀 Mira todo lo Relacionado a Pokemon en la TV ... 📺</h2>
        
    </div>
    <div className="container mt-3">
        <div className="row">
            {seriesP.map((serie)=>(
                
                <div key={serie.id} className="col-md-4 mb-3">
                    <img className="pelisImg" src={`${IMG_URL + serie.poster_path}`} alt= {serie.name}/>
                    <h6 className="text-center shadow p-3 mt-3 bg-body rounded" >{serie.name}</h6>
                    <p className="text-center shadow p-1 mb-1 bg-body rounded"> Fecha de Estreno: {serie.first_air_date}</p>
                    <p className="text-center shadow p-1 mb-1 bg-body rounded" > {serie.overview} </p>
                </div>
            ))}
        </div>
    </div>

        </>
    );
}




