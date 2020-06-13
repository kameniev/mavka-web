import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Markdown from "./Markdown";
import "./index.css"

ReactDOM.render(
        <div>
            <App/>
        </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
