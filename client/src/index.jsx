import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super();
  }


  render() {

    return (
      <div>
        <div className='app'>
          <h1>Dangerzone.</h1>
          <p>by kenny loggins</p>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, 
  document.getElementById("app"));