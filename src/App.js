import Header from "./components/Header";
import Main from "./components/Main";

import './App.css';

function App() {
  return (
    <div className="App bg-gradient-to-br from-pink-base to-peach xl:py-4.5">
      <div className="bg-gray mx-auto max-w-8xl">{/* Wrapper */}
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
