import { useEffect ,createElement} from "react";
import ReactDOMServer from 'react-dom/server';
import "./App.css";
import Person from "./components/Person";

function App() {
  useEffect(() => {
    const props = {name:"Krasney" , age:58 }
    const reactElem = createElement(Person,props);
    console.log(ReactDOMServer.renderToStaticMarkup(reactElem));
  });

  return (
    <div className="App">
      <h2>Check renderToStaticMarkup in the console</h2>
      <Person name="Nathan" age={58} />
    </div>
  );
}

export default App;
