import './App.css';

import { Home } from './pages/Home';
import { Musica } from './pages/Musica';
import { Cidade } from './pages/Cidade';
import { Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='container-nav'>
          <nav className='nav-bar'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/Musica'>Música</Link>
            <Link className='link' to='/Cidade'>Cidade</Link>
          </nav>
      </header>
      <main>
        <Switch>
          <Route  path='/Musica' component={Musica} />
          <Route  path='/Cidade' component={Cidade} />
          <Route  path='/' component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
