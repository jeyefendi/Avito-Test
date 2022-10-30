import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import PostPage from "./pages/PostPage";

function App() {
  

  return (
    <Router>
        <Header />
          <Switch>
            <Route path="/" exact><Feed/></Route>
            <Route path="/post/:id" exact><PostPage/></Route>
          </Switch>
    </Router>
  );
}

export default App;
