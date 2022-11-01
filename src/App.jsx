import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.sass";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import PostPage from "./pages/PostPage";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/post/:id" component={PostPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
