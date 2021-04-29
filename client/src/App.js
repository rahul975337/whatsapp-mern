import "./App.css";
import Chats from "./components/Chats";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;
