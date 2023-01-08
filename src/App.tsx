import {useEffect} from "react"
import './App.css';
import axios from "axios";

function App() {

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    axios.get(url).then((response) => {
      console.log(response.data)
    })
  }, [])
  
  

  return (
    <div className="App">
      Hiyaa
    </div>
  );
}

export default App;
