import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CardsDetails from './pages/CardsDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Countries />} />
                <Route path='/:countryCcn3' element={<CardsDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
