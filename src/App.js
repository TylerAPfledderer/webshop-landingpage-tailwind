import Header from "./components/Header";
import Main from "./components/Main";

import './App.css';

function App() {
  return (
    <div className="App bg-gradient-to-br bg-pink">
      <div className="bg-gray h-full-vh mx-auto">{/* Wrapper */}
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
