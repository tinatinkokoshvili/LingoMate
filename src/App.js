import React from 'react';
import './App.css';
import Homepage from '../src/pages/Homepage';
import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <main className={css(styles.container)}>
                <BrowserRouter>
                    <Switch>
                    <Route exact path="/" component={Homepage} />
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
