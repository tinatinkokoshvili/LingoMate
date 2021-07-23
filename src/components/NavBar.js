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
                    <a class={css(styles.navText)} href=" ">Home</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.navText)} href="about">About</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.navText)} href="contact">Contact</a>
                </div>
                <div class={css(styles.buttons)}>
                    <a class={css(styles.navText)} href="contact">Login</a>
                </div>
                <div class={css(styles.buttons)}>
                    <Link to="/profile" class={css(styles.buttons)} href="userprofile" className="nav-links">Profile</Link>
                </div>
                <div class={css(styles.buttons)}>
                    <button class={css(styles.button)} onClick={() => alert('Hello, world!')}>
                    Sign Up
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
        width: '100%',
    },
    buttons: {
        textAlign: 'center',
        font: '17px',
        paddingRight: 50,
        color: Color.white,
    },
    button: {
        background: Color.signupbutton,
        color: 'white',
        textAlign: 'center',
        width: 141,
        height: 49,
        borderWidth: 0,
        borderRadius: 30,
        font: '18px Nunito',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(0.97)',
        },
    },
    navText: {
        color: 'black',
        width: 50,
        height: 25,
        textAlign: 'center',
        font: '18px Nunito',
        padding: '14px 16px',
        float: 'left',
        textDecoration: 'none',
        ':hover': {
            color: 'white',
        },
    },
    rightJustify: {
        justifyContent: 'flex-end',
        display: 'flex'
    }


});

export default Body;
