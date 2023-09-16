let myFavorites = [];

const postFav = async (item) => {
    myFavorites.push(item)

    return myFavorites;
}

const deleteFav = async (id) => {
    myFavorites = myFavorites.filter((item) => item.id !== id);

    return myFavorites;
}

module.exports = {
    postFav,
    deleteFav,
}