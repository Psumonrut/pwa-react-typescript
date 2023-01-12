import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './Page/Homes';
import AboutUser from './Page/AboutUser';
import { DBConfig } from './DataConfig/DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
    return (
   <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homes />} />
              <Route path="/home" element={<Homes />} />
              <Route path="regis" element={<AboutUser />} />
          </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
