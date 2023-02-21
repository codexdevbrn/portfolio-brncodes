import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Tecnologies from '../pages/Tecnologies';

import { AnimatePresence } from 'framer-motion';

function AppRoutes(){
    return (
        <>
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='techs' element={<Tecnologies/>} /> 
                <Route path='about' element={<About/>}/>   
            </Routes>
        </AnimatePresence>
        </>
    );
}
export default AppRoutes;