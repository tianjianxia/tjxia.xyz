import React, { Component } from 'react';
import styles from './Grid.module.scss';
import 'antd/dist/antd.css';
import Item from './Item';
import raw from 'raw.macro';

class Grid extends Component {
    render(){
        const map = raw(`../../../documents/blogs_map.json`);

        const obj = JSON.parse(map);

        let list = obj.map((item, index) => {
            return (<Item
                {...item}
            ></Item>)
        })
        
        return (
            <div className={ styles.Grid }>
                {list}
            </div>
        );
    }
}

export default Grid;