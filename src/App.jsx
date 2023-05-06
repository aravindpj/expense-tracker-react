import './App.css'
import Banalce from './components/Banalce'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'

function App() {

  return (
    <div>
        <Header/>
        <div className="container">
             <Banalce/>
             <IncomeExpense/>
             <TransactionList/>
             <AddTransaction/>
        </div>
    </div>
  )
}

export default App
