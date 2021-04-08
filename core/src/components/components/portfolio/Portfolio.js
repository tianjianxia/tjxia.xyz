import React from 'react';
import styles from './Portfolio.module.scss';
import { Badge, Card, Progress } from 'antd';
import 'antd/dist/antd.css';
import resume from '../../../assets/resume.jpg';
import Grid from './Grid';

function Portfolio() {
    return (
        <div className={ styles.Portfolio }>
            <div className={ styles.Skill }>
                <div className={ styles.Sets }>Skill Sets</div>
                <div className={ styles.Progress }>
                    <div>Java Backend Developing</div>
                    <div><b>Keywords: </b>  </div>
                    <Progress percent={80} status="active" />
                </div>

                <div className={ styles.Progress }>
                    <div>React/React Native Frontend Developing</div>
                    <div><b>Keywords: </b>  </div>
                    <Progress percent={60} status="active" />
                </div>

                <div className={ styles.Progress }>
                    <div>Native Android Developing</div>
                    <div><b>Keywords: </b>  </div>
                    <Progress percent={60} status="active" />
                </div>

                <div className={ styles.Progress }>
                    <div>Automation Testing and Quality Assurance</div>
                    <div><b>Keywords: </b>  </div>
                    <Progress percent={40} status="active" />
                </div>
            </div>

            <div className={ styles.Resume }> 
                <div>Resume</div>
                <a href="https://www.overleaf.com/read/wkjnppqcprzz" target="_blank" rel="noopener noreferrer"><img alt="" src={ resume }/></a>
            </div>

            <div className={ styles.Grid }> 
                <div className={ styles.Work }>
                    <Badge.Ribbon text="Including freelance projects.">
                        <Card><h3>Working projects</h3></Card>
                    </Badge.Ribbon>
                </div>
                <Grid/>
            </div>
        </div>
    );
}

export default Portfolio;