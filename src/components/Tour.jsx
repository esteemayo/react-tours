import { useState } from 'react';

const Tour = ({ id, name, info, image, price, onDelete }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substr(0, 200)}...
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
