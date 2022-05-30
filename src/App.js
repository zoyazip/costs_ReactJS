import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 4, 24),
    description : "Холодильник",
    amount: 999.99
  },
  {
    id: "c2",
    date: new Date(2022, 2, 18),
    description : "MacBook",
    amount: 1499.00
  },
  {
    id: "c3",
    date: new Date(2022, 1, 1),
    description : "iPhone 12",
    amount: 799.99
  }
];



const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  }


  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  )
}

export default App;
