// RAFCE
import React, { useState, useEffect } from 'react';
import { Button, Breadcrumb, Layout, Menu, Space } from 'antd';
import logo from '../../assets/img/Frame1.png';
import './home.css';
import Content from '../content/content.jsx';

const { Header, Footer } = Layout;

const Home = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
            setCurrentDate(new Date());
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(timerID);
    }, []);

    return (
        // <div>
        //     <h1 className="bg-blue-500 text-white p-5">MY APP</h1>
        //     <h1>MY APP</h1>

            // <p>City</p>
            // <input
            //     type="text"
            //     value={city}
            //     onChange={e => setCity(e.target.value)}
            //     required
            // />
            // <p>Degrees (C/F)</p>
            // <Button type="primary">¡Hola, Ant Design!</Button>
            // <input
            //     type="text"
            //     value={degrees}
            //     onChange={e => setDegrees(e.target.value.toUpperCase())}
            //     required
            // />
            // <br />
            // <br />
            // <button onClick={getWeather}>Obtener Clima</button>
        //     {/* <p>{result}</p> */}
        //     {result && (
        //         <div>
        //             <p>Información del Clima:</p>
        //             <p>Descripción: {result.weather[0].description}</p>
        //             <p>Temperatura: {result.main.temp} °{units}</p>
        //             <p>Humedad: {result.main.humidity} %</p>
        //             {/* Mostrar más propiedades del objeto JSON si es necesario */}

        //             <img
        //                 src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
        //                 alt="Icono del clima"
        //             />
        //         </div>
        //     )}
        // </div>
        <Layout className="layout">
            <Header>
                <img src={logo} alt="" className="logo" />
                <Space align="end" style={{ color: 'white' }}>
                    {currentTime.toLocaleTimeString()}
                </Space>

                <Space className='date'>
                    <h1>Today: {currentDate.toLocaleDateString()}</h1>
                </Space>
            </Header>
            <Content/>
            {/* <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ background: 'black' }}>
                    Content
                </div>
            </Content> */}
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;