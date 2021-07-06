import React from "react";
import { StyleSheet, css } from 'aphrodite';
// import Color from 'src/util/Color';

// import lingomate from '../src/assets/logo.svg'


function Body(props) {

    return(
        <div className={css(styles.container)}>
            <p>hi</p>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 40,
        margin: '15px 10px',
        transition: 'transform 450ms',
        // color: Color.navbar,
    }
});

export default Body;

