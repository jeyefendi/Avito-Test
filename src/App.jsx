import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import StoryPage from "./pages/StoryPage";

const App = () => {
  

  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/story/:id" component={StoryPage}/>
          </Switch>
    </Router>
  );
}

export default App;
