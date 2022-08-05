import ReactDOM from 'react-dom'
import './index.css'
import {App} from "./app.js"

const width = 500;
const height = 500;
ReactDOM.render(<App width={width} height={height}/>, document.getElementById('root'))