import logo from './logo.svg';
import './App.css';
import Header from './compoents/Header';
import Balance from './compoents/Balance';
import AccountSummary from './compoents/AccountSummary';
import TransationHistory from './compoents/TransationHistory';
import AddTransaction from './compoents/AddTransaction';

function App() {
  return (
    <div className="conatiner">
      <Header/>
        <Balance/>
        <AccountSummary/>
        <TransationHistory/>
        <AddTransaction/>
      
    </div>
  );
}

export default App;
