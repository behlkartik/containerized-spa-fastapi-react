import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import GameCard from './GameCard';
import AddGame from './AddGame';

const Body = () => {
    const [games, setGames] = useState(null);
    const fetchData = async () => {
        try {
            console.log(process.env.GAMESHOP_BACKEND_BASE_URL);
            const response = await fetch(`${process.env.GAMESHOP_BACKEND_BASE_URL}/v1/games`, {
                'headers': {
                    'Accept': 'application/json'
                }
            });
            const games = await response.json();
            setGames(games);
        } catch(e) {
            console.error('Failed to fetch resource', e.message, e.code);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return !games ? 
    <Shimmer /> : 
    (
        <>
            <AddGame />
            <div className="games-container flex flex-wrap gap-8 m-8">
                {games.map((game) => <GameCard key={game.name} gameData={game}/>)}
            </div>
        </>
    )
}

export default Body;