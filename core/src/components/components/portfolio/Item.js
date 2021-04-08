import React, { Component } from 'react';
import styles from './Item.module.scss';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import raw from "raw.macro";
import ReactMarkdown from 'react-markdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Item extends Component {

    state = {
        visible: false
    }
    
    setVisible = () => this.setState({visible: true})
    setInvisible = () => this.setState({visible: false})

    render(){
        
        const { title } = this.props;
        const { description } = this.props;
        const { fileName } = this.props;
        
        const rawData = raw(`../../../documents/portfolios/${fileName}.md`);

        return (
            <div className={ styles.Item }>
                <Card title={ title } extra={<Button variant="info" onClick={ this.setVisible }>More</Button>} style={{ width: 300 }}>
                    <p>{ description }</p>
                </Card>
                <Modal show={this.state.visible} onHide={this.setInvisible} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{ title }</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
                        <ReactMarkdown>
                            { rawData }
                        </ReactMarkdown>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={ this.setInvisible }>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Item;