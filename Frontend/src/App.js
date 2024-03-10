import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div class="h-[100%] px-[20%] pt-[5%] pb-[2%] ">
        <div class="border-2 rounded-lg border-gray-300 h-70vh">
          <Routes>
            <Route path="/" exact Component={NotesListPage} />
            <Route path="/note/:id" Component={NotePage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
