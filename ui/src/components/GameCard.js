const GameCard = ({ gameData }) => {
    const { name, price, genre:genres } = gameData;
    const genreList = genres.split(", ")
    return (
        <div className='game-card w-[350px] p-6 hover:shadow-md hover:shadow-black bg-gray-100 flex flex-col gap-4'>
            <h5 className='game-name font-extrabold'>{name}</h5>
            <h6 className='game-price font-thin'>£{price}</h6>
            <div className='game-genres flex flex-wrap gap-1'>
                {genreList.map((genre) => <span key={genre} className="p-1 font-semibold rounded-md bg-gray-400 ">{genre}</span>)}
            </div>
        </div>
    )
}

export default GameCard;