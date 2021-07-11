import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../util/Color';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';


function Body() {
    return(
        <div class={css(styles.container)}>
            <Logo />
            <div class={css(styles.rightJustify)}>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.buttons)} href=" ">Home</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.buttons)} href="about">About</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.buttons)} href="contact">Contact</a>
                </div>
                <div class={css(styles.buttons)}>
                    <Link to="/profile" class={css(styles.buttons)} href="userprofile" className="nav-links">Profile</Link>
                </div>
                <div class={css(styles.buttons)}>
                    <button class={css(styles.button)} onClick={() => alert('Hello, world!')}>
                    Login
                    </button>
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
        float: 'left',
        textAlign: 'center',
        padding: '14px 16px',
        font: '17px',
        paddingRight: 50,
    },
    button: { // Check how fonts work...
        background: Color.signupbutton,
        color: 'white',
        textAlign: 'center',
        width: 141,
        height: 49,
        borderWidth: 0,
        borderRadius: 30,
        font: '500 18px Nunito',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(0.97)',
        },
    },
    navText: { //Comeback and try to make it align... for now useless
        color: 'black',
        width: 50,
        height: 25,
        textAlign: 'center',
        font: '500 18px Nunito'
    },
    rightJustify: {
        justifyContent: 'flex-end',
        display: 'flex'
    }


});

export default Body;
