import { useEffect } from 'react';
import IntroduceMe from './introduceMe';
import SitePractice_2 from './sitePractice_2'
import {BrowserRouter as  Router ,Routes ,Route,  } from 'react-router';
import SitePractice from './sitePractice_1';


function App() {

  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={ <IntroduceMe/>}/>
    <Route path ='/IntroduceMe' element={ <SitePractice_2 />}/>
    <Route path='/SitePractice_1' element={<SitePractice/>}/>
  </Routes>
</Router>
    </>
  );
}

export default App;
