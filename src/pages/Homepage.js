import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HomePage from '../components/HomePage';

function Homepage(){
    return(
        <div className={css(styles.container)}>
            <HomePage/>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    minHeight: '100vh',
    },
    
});


export default Homepage;

