import { useEffect ,createElement} from "react";
import ReactDOMServer from 'react-dom/server';
import "./App.css";
import Person from "./components/Person";

const props = {firstName:'Nathan', lastName:"Krasney"}
function App() {
  useEffect(() => {
    const reactElem = createElement(Person,props);
    console.log(ReactDOMServer.renderToStaticMarkup(reactElem));
  });

  return (
    <div className="App">
      <h2>Check renderToStaticMarkup in the console</h2>
      <Person {...props} />
    </div>
  );
}

export default App;
