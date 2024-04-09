import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState({});

  useEffect(function () {
    fetch('https://pokeapi.co/api/v2/pokdemon?limit=45&offset=0')
      .then((res) => {
        if (!res.ok) {
          throw new Error('something went wrong');
        }
        res.json();
      })
      .then((data) => {
        setError('');
        setResult(data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen bg-sky-100">
        <h1 className="text-center text-sky-900 font-bold text-[64px]">
          Loading...
          {console.log('rendered')}
        </h1>
      </div>
    );

  return (
    <div className="min-h-screen bg-sky-100">
      <h1 className="text-center text-sky-900 font-bold text-[64px]">
        {error ? <h1>{error.message}</h1> : 'Content'}
      </h1>
    </div>
  );
}

export default App;
