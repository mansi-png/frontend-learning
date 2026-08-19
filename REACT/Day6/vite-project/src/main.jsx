import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import List from './List.jsx'

// console.log(<h1>Hello, Coder  </h1>);
// const element=document.createElement('h1');
// element.textContent='Hello, Vite!';

// console.dir(element);

{/* <App>
    <Header>
        <Counter></Counter>
    </Header>
    <Main>
        <h1>Hello aap kese ho</h1>
        <Clock></Clock>
    </Main>
    <Footer></Footer>
</App> */}


createRoot(document.getElementById('root')).render(
 
  <List></List>
  
)
