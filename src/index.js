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

  // addHyva = () => {
  //   this.setState((prevState) => ({
  //     hyva: prevState.hyva + 1,
  //     yhteensa: prevState.yhteensa + 1
  //   }));
  // }

  // addNeutraali = () => {
  //   this.setState((prevState) => ({
  //     neutraali: prevState.neutraali + 1,
  //     yhteensa: prevState.yhteensa + 1
  //   }));
  // }

  // addHuono = () => {
  //   this.setState((prevState) => ({
  //     huono: prevState.huono + 1,
  //     yhteensa: prevState.yhteensa + 1
  //   }));
  // }

  addRating = (rating) => () => {
      this.setState((prevState) => ({
        [rating]: prevState[rating] + 1,
        'yhteensa': prevState.yhteensa + 1
      }));
    }
  

  render () {
    return (
      <div>
        <h2>anna palautetta</h2>
        <div>
          <Button handleClick={this.addRating('hyva')} text="hyvä" />
          <Button handleClick={this.addRating('neutraali')} text="neutraali" />
          <Button handleClick={this.addRating('huono')} text="huono" />
        </div>
        <h2>statistiikka</h2>
        <div>
          {this.state.yhteensa > 0 ?  
            <Statistics 
              yhteensa={this.state.yhteensa} 
              hyva={this.state.hyva} 
              huono={this.state.huono} 
              neutraali={this.state.neutraali}
            />
            : 
            <p>yhtään palautetta ei annettu</p>
          }
          </div>
      </div>
    );
  }
} 

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Statistics = ({hyva, huono, neutraali, yhteensa}) => {

  const positiivisia = () => (100 * hyva / yhteensa).toFixed(2);
  const keskiarvo = () => ( (hyva - huono) / yhteensa).toFixed(2);

  return (
    <div>
      <table>
        <tbody>
          <Statistic teksti="hyvä" luku={hyva} />
          <Statistic teksti="neutraali" luku={neutraali} />
          <Statistic teksti="huono" luku={huono} />
          <Statistic teksti="keskiarvo" luku={keskiarvo()} />
          <Statistic teksti="positiivisia" luku={positiivisia()} />     
        </tbody>  
      </table>
    </div>
  );
}

const Statistic = ({teksti, luku}) => <tr><td>{teksti}</td><td>{luku}</td></tr>;

ReactDOM.render(<App />, document.getElementById('root'));

