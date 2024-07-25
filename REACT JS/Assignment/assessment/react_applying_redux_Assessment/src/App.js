import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Accordion from './Accordion';

const items = [
  { title: 'What is your return policy?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'How do I track my order?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Can I purchase items again?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Accordion</h1>
        <Accordion items={items} />
      </div>
    </Provider>
  );
}

export default App;
