import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Feed />
      <div className="container">
        <Switch>
          <Route path="/" exact />
          <Route component={PostPage} path="/post" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
