import React, { useState } from 'react';

const Home = () => {

    const [city, setCity] = useState('');
    const [degrees, setDegrees] = useState('');
    const [units, setUnits] = useState('');
    const [result, setResult] = useState(null);

    const getWeather = () => {

        if (degrees == 'C') {
            setUnits('C')
        } else {
            setUnits('F')
        }

        fetch(`http://127.0.0.1:5000/weather?city=${city}&degrees=${degrees}`)
            .then((response) =>
                response.json()
            )
            .then((data) => {
                setResult(data.result)
                console.log(data.result)
                // const clima = data.resultado.weather[0].main;
                // const descripcion = data.resultado.weather[0].description;
                // const temperatura = data.resultado.main.temp;
                // const ciudadNombre = data.resultado.name;

                // // Actualizar el estado con los datos procesados
                // setResult(`En ${ciudadNombre}: ${clima} - ${descripcion}, Temperatura: ${temperatura} °C`)
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>MY APP</h1>
            <p>City</p>
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
            />
            <p>Degrees (C/F)</p>
            <input
                type="text"
                value={degrees}
                onChange={e => setDegrees(e.target.value.toUpperCase())}
                required
            />
            <br />
            <br />
            <button onClick={getWeather}>Obtener Clima</button>
            {/* <p>{result}</p> */}
            {result && (
                <div>
                    <p>Información del Clima:</p>
                    <p>Descripción: {result.weather[0].description}</p>
                    <p>Temperatura: {result.main.temp} °{units}</p>
                    <p>Humedad: {result.main.humidity} %</p>
                    {/* Mostrar más propiedades del objeto JSON si es necesario */}

                    <img
                        src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
                        alt="Icono del clima"
                    />
                </div>
            )}
        </div>
    );
}

export default Home;