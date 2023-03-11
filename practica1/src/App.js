import { Component } from 'react';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';



class App extends Component {
  render(){
    return(
      <><Banner /><Header /><Banner /><Body /><Footer /></>
    )
  };
}

export default App;
