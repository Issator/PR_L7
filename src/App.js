import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/post";
import Home from "./components/home";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
 return (
     <div className="container-fluid">
       <NavBar />
       <div className="container">
           <div className="content">
               <Switch>
                   <Route path="/posts" component={Posts} />
				   <Route path="/not-found" component={NotFound} />
                   <Route path="/" exact component={Home} />
				   <Redirect to="/not-found" />
               </Switch>
           </div>
       </div>
     </div>
 );
}

export default App;