import React, {useState, useEffect} from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Coins from "./components/Coins";
import Coin from './Routes/Coin';
import NavBar from './components/NavBar';
import './index.css';

function App() {

  const [coins, setCoins] = useState([]);
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoins(res.data)
      }).catch((error) => alert('error'))
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;