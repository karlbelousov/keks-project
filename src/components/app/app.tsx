import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoutes } from '../../const';

function App(): JSX.Element {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
