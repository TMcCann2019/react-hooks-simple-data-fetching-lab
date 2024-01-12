// create your App component here
import React, {useEffect, useState} from'react';

function App() {
    const [img, setImg] = useState('');

    useEffect(() => {
        let url = 'https://dog.ceo/api/breeds/image/random'
        fetch(url)
         .then(res => res.json())
         .then(data => setImg(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {img ? (
                    <img src={img} alt="A Random Dog" />
                    ) : (
                    <p>Loading...</p>
                )}
            </header>
        </div>
    );
}

export default App;