import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const IncomeExpense = () => {
    const {transaction}=useContext(GlobalContext)
    const income=transaction.map(data=>data.amount).filter(amount=>amount>0).reduce((amount,acu)=>acu+amount,0)
    const expence=transaction.map(data=>data.amount).filter(amount=>amount<0).reduce((amount,acu)=>acu+amount,0)
    console.log(income)
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-${Math.abs(expence)}</p>
    </div>
  </div>
  )
}

export default IncomeExpense