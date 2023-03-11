import { Component } from 'react';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';



class App extends Component {
  render(){
    return(
      <><Banner 
      titulo="Hola, soy un banner"
      />
      <Header />
      <Banner 
      titulo="Hola, soy otro banner"
      />
      <Body 
      const arreglo={[1,2,3,4]}
      />
      <Footer 
      etiqueta={<h3>Hola, estás en el final de la página</h3>}
      /></>
    )
  };
}

export default App;
