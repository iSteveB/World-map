import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsDetails from './pages/CardsDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:countryCcn3' element={<CardsDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
