import './App.css'
import Banalce from './components/Banalce'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import { useContext, useEffect } from 'react'
import { GlobalContext } from './context/GlobalContext'

function App() {
  const storedTransaction = localStorage.getItem('transaction');
  const {Addall} =  useContext(GlobalContext)
  
  useEffect(()=>{
    if (storedTransaction) {
      Addall(JSON.parse(storedTransaction).transaction)
    }
  },[storedTransaction])
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
