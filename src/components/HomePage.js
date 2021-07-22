import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavBar from '../components/NavBar';
import Color from '../util/Color';

import BlueBG from '../assets/Homepage/BlueBG.svg';
import RedBG from '../assets/Homepage/RedBG.svg';
import People from '../assets/Homepage/people.svg';
import Reading from '../assets/Homepage/reading.svg';


function HomePage() {
    return (
    <div>
        <NavBar />
        <div className={css(styles.container)}>
        <img src={BlueBG} alt="" className={css(styles.BlueBG)} />
        <div className={css(styles.picAlignment)}>
            <img src={People} alt="" className={css(styles.People)} />
            <div className={css(styles.textAlignment)}>
                <p className={css(styles.text)}>Get matched with a peer and start learning a  new language today.</p>
                <button className={css(styles.button)} onClick={() => { alert('You clicked the button!');}}>
                    Get Matches
                </button>
            </div>
        </div>
        </div>


        <p className={css(styles.aboutUS)}>About Us</p>


        <div className={css(styles.container)}>
            <img src={RedBG} alt="" className={css(styles.RedBG)} />
            <div>
            <div className={css(styles.picBAlignment)}>
                <img src={Reading} alt="" className={css(styles.readingBook)} />
            </div>
            <div className={css(styles.picCAlignment)}>
                <div className={css(styles.textBorder)}>
                    <p className={css(styles.textBox)}>
                    Ever want to learn a new language but never had the time or the money? Maybe you want real world experience?
                    </p>
                    <p className={css(styles.textBox)}>
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
                    </p>
                    <p className={css(styles.textBox)}>
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
                    </p>
                </div>
            </div>
            </div>
        </div>

    </div>
    );
}

const styles = StyleSheet.create({
    BlueBG: {
        width: '80%',
        height: '150%',
        position: 'relative',
        top: '0',
    },
    RedBG: {
        width: '80%',
        height: '100%',
        paddingLeft: '50%',
    },
    container: {
        position: 'relative',
        textAlign: 'left',
    },
    picAlignment: {
        position: 'absolute',
        top: '10px',
        left: '8px',
    },
    People: {
        width: '65%',
        height: '40%',
        paddingLeft: '2%',
    },
    textAlignment: {
        position: 'absolute',
        bottom: '-280px',
        left: '8px',
        paddingLeft: '25%',
        width: '50%',
        paddingBottom: '-10%'
    },
    text: {
        font: '45px Asap Condensed',
        color: '#fff',
    },
    button: {
        background: Color.getstartedbutton,
        color: 'white',
        textAlign: 'center',
        width: '40%',
        height: 98,
        borderWidth: 0,
        borderRadius: 30,
        font: '35px Rubik',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(0.97)',
        },
    },

    aboutUS: {
        font: '50px Hermeneus One',
        color: Color.black,
        textAlign: 'center',
    },


    picBAlignment: {
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
    },
    picCAlignment: {
        position: 'absolute',
        top: '40%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
    },
    readingBook: {
    },
    textBox: {
        font: '23px Poppins',
        color: Color.black,
    },
    textBorder: {
        border: '2px solid #000',
        borderRadius: '5px',
        paddingLeft: '6%',
        paddingRight: '2%',
        width: '567px',
        height: '466px',
        background: '#fff',
    },
});

export default HomePage;