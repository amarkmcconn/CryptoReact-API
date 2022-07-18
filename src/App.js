import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((res) => {
        setCoins(res.data)
        console.log(res.data[0])
      }).catch((error) => alert('error'))
  }, []);

  return (
    <>
    dick and balls
    </>
  );
}

export default App;
