import React, {Component} from 'react';
import Sentiment from 'sentiment';
import './App.css';

const sentiment = new Sentiment();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sentimentScore:null,
      generalSentiment:null

    };
    this.findsentiment=this.findsentiment.bind(this);
  }
findsentiment(event){
const result =sentiment.analyze(event.target.value)
this.setState({
  sentimentScore:result.score
});
if(result.score>0){
  this.setState({
    generalSentiment:'Positive'
  });
}
else if(result.score<0){
  this.setState({
    generalSentiment:'Negative'
  });

  }
  else{
    this.setState({
      generalSentiment:'Neutral'
    });
  }
}
  render(){
    return (
    <div className= "App">
      <h2>Text Sentiment Analysis</h2>
      <p>Enter text in real time analysis:</p>
      <textarea onChange={this.findsentiment}/>
      <p> Sentiment Score : {this.state.sentimentScore}</p>
      <p>General Sentiment: {this.state.generalSentiment}</p>
    </div>
    )
  }
}
export default App;
