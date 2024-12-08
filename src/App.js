import React, { useEffect, useState } from 'react';


import 'App.css';
import 'static/styles/style.css';
import { Routers } from 'routes';
import { Header } from 'pages/templates/Header';
import { useLocation } from 'react-router-dom';
import { Footer } from 'pages/templates/Footer';







const templTypes = {
  headerMain: "header-main"
}





function App() {

  const [ templ, setTempl ] = useState(templTypes.headerMain)

  const location = useLocation()

  useEffect(() => {
    
    switch (location.pathname) {
      case "/":
        setTempl(templTypes.headerMain)
        break;
      default:
        setTempl("")
        break;
    }


  }, [location])


  return (
    <div className="App">
      <Header templ={templ} />
      <main>
        <Routers setTempl={setTempl}/>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
