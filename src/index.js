import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      yhteensa: 0
    }
  }

  addHyva = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1,
      yhteensa: prevState.yhteensa + 1
    }));
  }

  addNeutraali = () => {
    this.setState((prevState) => ({
      neutraali: prevState.neutraali + 1,
      yhteensa: prevState.yhteensa + 1
    }));
  }

  addHuono = () => {
    this.setState((prevState) => ({
      huono: prevState.huono + 1,
      yhteensa: prevState.yhteensa + 1
    }));
  }

  keskiarvo = () => this.state.yhteensa > 0 ? ( (this.state.hyva - this.state.huono) / this.state.yhteensa).toFixed(2) : 0;

  positiivisia = () => this.state.yhteensa > 0 ? (100 * this.state.hyva / this.state.yhteensa).toFixed(2) : 0 ;
    
  render () {
    return (
      <div>
        <h2>anna palautetta</h2>
        <div>
          <Button toimi={this.addHyva} text="hyvä" />
          <Button toimi={this.addNeutraali} text="neutraali" />
          <Button toimi={this.addHuono} text="huono" />
        </div>
        <h2>statistiikka</h2>
          {this.state.yhteensa > 0 ?  
            <div>
              <Statistics keskiarvo={this.keskiarvo} positiivisia={this.positiivisia} hyva={this.state.hyva} huono={this.state.huono} neutraali={this.state.neutraali}/>
            </div> :
            null
          }
      </div>
    );
  }
} 

const Button = (props) => <button onClick={props.toimi}>{props.text}</button>;

const Statistics = (props) => {
  return (
    <div>
      <Statistic teksti="hyvä" luku={props.hyva} />
      <Statistic teksti="neutraali" luku={props.neutraali} />
      <Statistic teksti="huono" luku={props.huono} />
      <Statistic teksti="keskiarvo" luku={props.keskiarvo()} />
      <Statistic teksti="positiivisia" luku={props.positiivisia()} />
    </div>
  );
}

const Statistic = (props) => {
  return (
    <p>
      {props.teksti} {props.luku}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

