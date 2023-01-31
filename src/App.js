// import logo from './logo.svg';
import { Button, DatePicker } from 'antd/dist/antd';

import './App.css';

const { RangePicker } = DatePicker;

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
            <Button type="primary">哈哈哈</Button>
            <RangePicker showTime />
        </div>
    );
}

export default App;
