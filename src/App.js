import React, {useState, useEffect} from "react";
import axios from "axios";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";

function App() {

  const [coins, setCoins] = useState([]);
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoins(res.data)
        console.log(res.data[0])
      }).catch((error) => alert('error'))
  }, []);

  return (
    <>
    <NavBar />
    <Coins coins={coins} />
    </>
  );
}

export default App;
