import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login/index';

const App: FC = () => {
  const userData = useAppSelector((state: RootState) => state.user.data);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />

        { 
          userData 
          ? <Route path="/" component={ ChatRoom } /> 
          : <Route path="/login" component={ Login } />
        }   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
