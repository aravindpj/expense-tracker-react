import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"


const Transaction = () => {
  const [amount,setAmount]=useState(0) 
  const [text,setText]=useState('')
  const {AddTransaction}=useContext(GlobalContext)
  function handleSubmit(e){
    e.preventDefault()
    let obj={
      id:Math.floor(Math.random() * 100000),
      text,
      amount:+amount
      
    }

    AddTransaction(obj)

  }

  return (
    <div>
          <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Transaction