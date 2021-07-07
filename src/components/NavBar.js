import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../util/Color';
import { ReactComponent as Logo } from '../assets/logo.svg';


function Body(props) {
    return(
        <div class={css(styles.container)}>
            <Logo />
            <div class={css(styles.rightJustify)}>
                <div class={css(styles.buttons)}>
                    <a href=" ">Home</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a href="about">About</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a href="contact">Contact</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a href="login">Log in</a>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        background: Color.navbar,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 103,
    },
    buttons: {
        color: Color.black,
        float: 'left',
        textAlign: 'center',
        padding: '14px 16px',
        font: '17px',
        paddingRight: 50,
    },
    rightJustify: {
        justifyContent: 'flex-end',
        display: 'flex'
    }

});

export default Body;
