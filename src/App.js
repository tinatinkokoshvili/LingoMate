import React from 'react';
import './App.css';
import Homepage from './screens/HomePage/Homepage';
import Profile from './screens/ProfilePage/Profile';
import NavBar from './components/NavBar';
import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <main className={css(styles.container)}>
                <BrowserRouter>
                <NavBar />
                    <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/profile" component={Profile} />
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        overflowX: 'hidden',
    },
});

export default App;
