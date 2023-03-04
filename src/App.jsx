import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import React from 'react'


import "./styles/components/app.sass";

function App() {
  

  return (
    <div id="portifolio">
      <h1>Hélio de Souza</h1>
      <Sidebar />
      <MainContent />
    </div>
      
        
  );
}

export default App
