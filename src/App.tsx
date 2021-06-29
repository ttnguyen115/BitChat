import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login/index';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ ChatRoom } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
