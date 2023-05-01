import st from './App.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Main from './pages/main/main'

function App() {
  return (
    <div className={st.app}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
