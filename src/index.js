import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { BrowserRouter as Router } from 'react-router-dom'
import Main from "./components/Main"
import './firebaseConfig'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('root')
);
