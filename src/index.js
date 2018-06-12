import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  hyva = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1
    }));
  }

  neutraali = () => {
    this.setState((prevState) => ({
      neutraali: prevState.neutraali + 1
    }));
  }

  huono = () => {
    this.setState((prevState) => ({
      huono: prevState.huono + 1
    }));
  }

  render () {
    return (
      <div>
        <h2>anna palautetta</h2>
        <div>
          <button onClick={this.hyva}>hyvä</button>
          <button onClick={this.neutraali}>neutraali</button>
          <button onClick={this.huono}>huono</button>
        </div>
        <h2>statistiikka</h2>
        <div>
          <p>hyvä {this.state.hyva}</p>
          <p>neutraali {this.state.neutraali}</p>
          <p>huono {this.state.huono}</p>
        </div>
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('root'));

