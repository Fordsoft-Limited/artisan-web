import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

import  mainRoutes  from "./routes/Router";
const App = () => {
  // const routing = useRoutes(Themeroutes);
  const routing = useRoutes([...Themeroutes, ...mainRoutes]);
  return <>
    <div className="dark">{routing}</div>
    
  </>;
};

export default App;
