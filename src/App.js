import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App bg-gradient-to-br bg-pink">
      <div className="bg-gray w-11/12 h-full-vh mx-auto">{/* Wrapper */}
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
