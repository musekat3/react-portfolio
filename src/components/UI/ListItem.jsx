import React from 'react';
import ListItem from './ListItem';

function App() {
 const items = ['About', 'Contact', 'Homepeage', 'Portfolio', 'Resume'];

 return (
   <ul>
     {items.map((item, index) => (
       <ListItem key={index} item={item} />
     ))}
   </ul>
 );
}

export default App;