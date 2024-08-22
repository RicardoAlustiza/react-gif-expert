import { GifCardComponent } from './GifCardComponent/GifCardComponent';
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const GifGridComponent = ({ category }) => {

    /* Custom hook */
    const { images, isLoading } = useFetchGifs(category)
  
    return (
        <div>
            <h3>{category}</h3>

            {isLoading && <p>Loading...</p>}
            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifCardComponent key={img.id} {...img} />
                    ))
                }
            </div>
        </div>
  );
};