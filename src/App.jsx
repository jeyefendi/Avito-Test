import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.scss';
import Header from './components/Header/Header';
import FeedPage from './pages/Feed/FeedPage';
import PostPage from './pages/Post/PostPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route exact path='/post/:id' component={PostPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
