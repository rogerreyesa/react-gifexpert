import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from './hooks/useFetchGifs';
import { GridItem } from './GridItem';

export const GifGrid = ( { category }) => {

    // const [imagenes, setImagenes] = useState([]);

    // useEffect(() => {
    //     getGifs( category ).then( gifs => setImagenes(gifs));
    // }, [ category ]);

    // console.log(imagenes)

    const {data:images, loading} = useFetchGifs( category );
    // console.log(loading);
    // console.log(dataGifs);


    return (
        <>
        <h3 className='animate__animated animate__fadeIn'> { category } </h3>
        <div className='card-grid'>

         {/* { loading ? <p>Loading...</p> : ''} */}
         {/* otra mejor opcion es */}
         { loading && <p className='animate__animated animate__flash'>Loading...</p>}

          {/* <ol>            
              {                
                 imagenes.map( img => (
                    <li key = {img.id}> { img.title }</li>
                 )) 
              }
          </ol> */}
          {/* {
            imagenes.map( img => (
                <GridItem 
                key= {img.id}
                {...img} /> // con esta instruccion se envian todo los valores del obj como props
            ))
          }           */}

          {
              images.map( gif => (
                <GridItem 
                key= {gif.id}
                {...gif} />
            ))
          }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

