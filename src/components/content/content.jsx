import React, {useState} from 'react';
import { Switch, Col, Row } from 'antd';
import './content.css'

const Content = () => {

    // F = True and C = False
    const [active, setActive] = useState(true);
    
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setActive(checked)
    };

    return (
        <div className='content'>
            <Row justify="start" style={{marginLeft:'4%', marginTop:'1%'}}>
                <Col span={1} className='degreesText'>
                    <h1>°C</h1>
                </Col>
                <Col span={2} className='switch'>
                    <Switch defaultChecked onChange={onChange} style={{backgroundColor: active ? '#237804' : '#73d13d'}}/>
                </Col>
                <Col span={1} className='degreesText'>
                    <h1>°F</h1>
                </Col>
            </Row>

            <Row>
                <Col span={24}>col</Col>
            </Row>

        </div>
    )
}

export default Content