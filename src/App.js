import React, { useState } from 'react';
import './App.css';
import jsonData from './OpenDay.json'; // Import the JSON data

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(jsonData.topics); // Access the topics property

  const search = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setData(jsonData.topics); // Access the topics property
    } else {
      const filteredData = jsonData.topics.filter((item) => // Access the topics property
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={search}
      />
      <div>
          {data.map((item, index) => (
          <div key={index} className="item">
            {/* Display properties from the JSON object here */}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;