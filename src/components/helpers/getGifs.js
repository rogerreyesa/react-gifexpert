// Se agrega getGifs como una funcion JS, al ser asincrona devolvera un promesa
// la cual se puede recibir en el invocador, en eset caso GifGrid.js
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FqP9qpmYf5MzzGCTmCkTbFwO17IWGq1r&q=${ encodeURI( category ) }&limit=5`;
    const gifsResponse = await fetch( url );
    const { data } = await gifsResponse.json();

    const gifs = data.map( gif =>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url

        }
    })
    // console.log(gifs);
    // setImagenes(gifs);
    // Esta funcion al ser async, devuelve una promesa con la coleccion de los gifs obtenidos
    return gifs;
}