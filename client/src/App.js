import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [file, setFile] = useState(null);
    const [colors, setColors] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log('Response:', res.data);
            setColors(res.data);
        } catch (err) {
            console.error('Error uploading file:', err);
        }
    };

    return (
        <div className="App">
            <h1>Urine Strip Analyzer</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {colors && (
                <div>
                    <h2>Colors:</h2>
                    <pre>{JSON.stringify(colors, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
