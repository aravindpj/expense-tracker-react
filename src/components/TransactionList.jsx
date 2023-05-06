import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


const TransactionList = () => {
    const {transaction}= useContext(GlobalContext)
    
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {
            // eslint-disable-next-line react/jsx-key
            transaction.map(data=>(<li className={data.amount > 0 ? "plus" : "minus"}>
            {data.text}<span>{data.amount}</span>
            <button className="delete-btn">x</button>
          </li>))
        }

      </ul>
    </div>
  );
};

export default TransactionList;
