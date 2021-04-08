import React from 'react';
import Logo from '../../Logo';
import styles from './Home.module.scss';
import 'antd/dist/antd.css'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

function Home() {
    return (
        <div className={ styles.Home }>
            <Logo/>
            <div className={styles.Top}>
                <div className={styles.title}><b>TJ (Tianjian) Xia</b></div>
                <div className={styles.spec}><a href="https://en.wikipedia.org/wiki/Nanjing" target="_blank" rel="noopener noreferrer">Original Nankinese.</a></div>
                <div className={styles.spec}><a href="https://www.syracuse.edu/" target="_blank" rel="noopener noreferrer">Graduated from Syracuse University.</a></div>
                <div>Computer Engineer. &#128187;</div>
                <div>NBA fan. &#127936;</div>
                <div className={styles.Last}>Most importantly, a funny guy. &#128568;</div>
            </div>
            
            <div className={styles.Timeline}>
                <Timeline mode="alternate">
                    <Timeline.Item>TJ was born 1995-08-24</Timeline.Item>
                    <Timeline.Item color="green">Graduated from undergrad and became a computer engineer 2018-06-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        Established this site 2019-08-26
                    </Timeline.Item>
                    <Timeline.Item color="red">Intern at ADP LLC 2020-06-27</Timeline.Item>
                    <Timeline.Item>Updated this site with new UI and dynamic blog post features 2020-09-10</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        To be continue...
                    </Timeline.Item>
                </Timeline>
            </div>
            
        </div>

        
    );
}

export default Home;