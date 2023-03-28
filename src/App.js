import { useEffect, useState } from 'react';

import Tours from './components/Tours';
import Loading from './components/Loading';
import Tours from './components/Tours';

import './App.css';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    const updTours = tours.filter((tour) => tour.id !== id);
    setTours(updTours);
  };

  let displayTours;

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    displayTours = (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  } else {
    displayTours = (
      <main>
        <Tours tours={tours} onDelete={handleDelete} />
      </main>
    );
  }

  return displayTours;
}

export default App;
