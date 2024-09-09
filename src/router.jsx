import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Exercicio01 from './pages/ex1';
import Exercicio02 from './pages/ex2';
import Exercicio03 from './pages/ex3';
import Exercicio04 from './pages/ex4';
import Exercicio05 from './pages/ex5';
import Exercicio06 from './pages/ex6';
import Exercicio07 from './pages/ex7';
import Exercicio08 from './pages/ex8';
import Exercicio09 from './pages/ex9';
import Exercicio10 from './pages/ex10';
import Exercicio11 from './pages/ex11';
import Exercicio12 from './pages/ex12';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/ex1' element={<Exercicio01 />} />
              <Route path='/ex2' element={<Exercicio02 />} />
              <Route path='/ex3' element={<Exercicio03 />} />
              <Route path='/ex4' element={<Exercicio04 />} />
              <Route path='/ex5' element={<Exercicio05 />} />
              <Route path='/ex6' element={<Exercicio06 />} />
              <Route path='/ex7' element={<Exercicio07 />} />
              <Route path='/ex8' element={<Exercicio08 />} />
              <Route path='/ex9' element={<Exercicio09 />} />
              <Route path='/ex10' element={<Exercicio10 />} />
              <Route path='/ex11' element={<Exercicio11 />} />
              <Route path='/ex12' element={<Exercicio12 />} />
         </Routes>
      </BrowserRouter>

    )

}