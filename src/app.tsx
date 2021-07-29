import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface AppProps { }

@hot(module)
class App extends React.Component<AppProps> {
  render() {
    return <div>App</div>;
  }
}

export default App;