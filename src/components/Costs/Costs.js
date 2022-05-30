import React, {useState} from "react";
import "../UI/Costs.css";

import Card from "./Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostSDiagram from "./CostsDiagram"

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    });


    return(
        <div>
            <Card className="costs">
            <CostsFilter year = {selectedYear} onChangeYear = {yearChangeHandler}/>
            <CostSDiagram costs={filteredCosts}/>
            <CostList costs = {filteredCosts}/>
            </Card>
        </div>
    );
}
export default Costs;