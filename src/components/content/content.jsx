import React, { useState, useEffect } from 'react';
import { Switch, Col, Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './content.css'

const Content = () => {

    // F = True and C = False
    const [active, setActive] = useState(true);
    const [city, setCity] = useState('');
    const [degrees, setDegrees] = useState('');
    const [units, setUnits] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        // console.log(active)

        if (active) {
            setDegrees('F')
        } else {
            setDegrees('C')
        }
    }, [active]);

    const onChange = (checked) => {
        // console.log(`switch to ${checked}`);
        setActive(checked)

        // console.log('activado?', active)

        if (checked) {
            setDegrees('F')
        } else {
            setDegrees('C')
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // console.log('Enter presionado! Valor del input:', e.target.value);
            getWeather();
        }
    };

    const getWeather = () => {

        // console.log('Entro bien')
        // console.log('Degrees', degrees)

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
        <div className='content'>
            <Row justify="start" style={{ marginLeft: '4%', marginTop: '1%' }}>
                <Col span={1} className='degreesText'>
                    <h1>°C</h1>
                </Col>
                <Col span={2} className='switch'>
                    <Switch defaultChecked onChange={onChange} style={{ backgroundColor: active ? '#237804' : '#73d13d' }} />
                </Col>
                <Col span={1} className='degreesText'>
                    <h1>°F</h1>
                </Col>
            </Row>

            <Row justify="center" style={{ padding: '1%' }}>
                <Col span={8}>
                    <Input
                        size="large"
                        placeholder="Search City..."
                        prefix={<SearchOutlined style={{ color: 'grey' }} />}
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                        onKeyPress={handleKeyPress}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default Content