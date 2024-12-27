export const addTopFavorites = (favoriteId: number) => {
  const topFavorites = window.localStorage.getItem("topFavorites");
  if(!topFavorites) {
    return window.localStorage.setItem('topFavorites', ` ${favoriteId},`);
  }

  window.localStorage.setItem('topFavorites', `${topFavorites} ${favoriteId},`)
}

export const getTopFavorites = () => {
  return window.localStorage.getItem("topFavorites");
}

export const deleteTopFavorites = (favoriteId: number) => {
  const topFavorites = window.localStorage.getItem("topFavorites");

  if(topFavorites && favoriteId) {
    const updatedTopFavorites = topFavorites.replace(` ${favoriteId},`, "");
    window.localStorage.setItem('topFavorites', updatedTopFavorites);
  }
}