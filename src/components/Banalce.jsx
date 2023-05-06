import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Banalce = () => {
    const {transaction}=useContext(GlobalContext)
    const total=transaction.map(data=>data.amount).reduce((amount,acu)=>acu+amount,0)
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Banalce;
