import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/:id?" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
