const AddGame = () => {
    const addGame = async (e) => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.price.value, e.target.genre.value);
        try {
            const response = await fetch(`${process.env.GAMESHOP_BACKEND_BASE_URL}/v1/games`, {
                                        'method': 'POST',
                                        'headers': {
                                            'Content-Type': 'application/json'
                                        },
                                        'body': JSON.stringify({
                                            name: e.target?.name?.value,
                                            price: parseFloat(e.target?.price?.value),
                                            genre: e.target.genre.value
                                        })
                                    });
            console.log(response);
        } catch (e) {
            console.error("Failed to add game", e);
        }
        
    }
    return (
    <form className="max-w-sm mx-auto" onSubmit={addGame} action="">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Game title</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="God of War" required />
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
                <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="£1.0" required />
            </div>
            <div className="mb-5">
                <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Genres</label>
                <input type="text" id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Action, Horror, Fantasy" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </form>
    )
}

export default AddGame;