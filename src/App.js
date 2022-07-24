import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CardDetails from './pages/CardDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Countries />} />
                <Route path='/:countryCca3' element={<CardDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
