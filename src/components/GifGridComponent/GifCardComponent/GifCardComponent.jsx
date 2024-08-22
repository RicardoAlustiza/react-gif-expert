import React from 'react'

export const GifCardComponent = ({images}) => {
  return (
    <div className='card-grid'>
        {
            images.map(img => (
            <div key={img.id} className='card' >
                <img src={img.url} alt={img.title} />
                <p>{img.title}</p>
            </div>
            ))
        }
    </div>
  )
}
