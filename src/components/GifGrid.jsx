import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )//si esta en true muestra el h2
            }
          <div className="card-grid">
                  {
                      images.map( ( image ) => (
                          <GifItem 
                              key={ image.id } 
                              { ...image }//esto se usa para esparcir las propieades del image y no tener que ir poniendolas una a una
                              //title={image.title}..
                          />
                      ))
                  }
                
            </div>
    </>
  )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}