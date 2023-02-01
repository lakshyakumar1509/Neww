import logo from './logo.svg';
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Menu from './components/menu';
import Payby from './components/payby'
import Cash from './components/cash';
import Paybyd from './components/paybyd';
import Paybyn from './components/paybyn';

const App = ()=>
{
  return (
	<>
	<Routes>
		<Route exact path="/" element ={<Menu/>}/>
		<Route path="back" element ={<Menu/>}/>
		<Route path="pay" element ={<Payby/>}/>
		<Route path="/cod" element ={<Cash/>}/>
		<Route path="/dc" element ={<Paybyd/>}/>
		<Route path="/nb" element ={<Paybyn/>}/>
	</Routes>
	</>
    )
  }
export default App;
