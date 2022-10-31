import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import PostPage from "./pages/PostPage";

const App = () => {
  

  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/post/:id" component={PostPage}/>
          </Switch>
    </Router>
  );
}

export default App;
