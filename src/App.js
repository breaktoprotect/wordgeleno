import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import NavBar from "./components/navbar";

function App() {
    return (
        <div className="App bg-dark">
            <NavBar />
            <Main />
        </div>
    );
}

export default App;
