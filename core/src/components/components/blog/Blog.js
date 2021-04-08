import React from 'react';
import styles from './Blog.module.scss';
import Grid from './Grid';

function Blog() {
    return (
        <div className={ styles.Blog }>
            <div className={ styles.Grid }> 
                <Grid/>
            </div>
        </div>
    );
}

export default Blog;