import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<NoteListPage />} />
        <Route path='/note/:id' element={<NotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
