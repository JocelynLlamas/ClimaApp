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
            <Content />

            <Footer style={{ textAlign: 'center', backgroundColor:'#1E1E1E', color:'white' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;