/* eslint-disable no-unused-vars */
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import Block from './components/Block'

function App() {
  // const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

  return (
    // <h1>App</h1>
    <div className='app'>
      {/* <FontAwesomeIcon icon={faDroplet} /> */}
      <Block card='card'/>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  )
}

export default App


/*
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Castro");

  const api_key = "4a84acaf481f1d9ea2f93508c9f77572";

  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const searchData = await response.json();
    setData(searchData);
    setLocation("");
  };

*/