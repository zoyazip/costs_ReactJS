import React, {useState} from "react";
import "./CostForm.css";

const CostForm = (props) => {

    const [inputName, setInputName] = useState("");
    const nameChangeHandler = (e) => {
        setInputName(e.target.value);
    };

    const [inputAmount, setInputAmount] = useState("");
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);
    };

    const [inputDate, setInputDate] = useState("");
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData);
        setInputAmount("");
        setInputDate("");
        setInputName("");
    }

  

return(
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type= "text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type= "number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type= "date" min="2022-05-25" value={inputDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions"></div>
            <button type="submit">Добавить Расход</button>
            <button type="button" onClick={props.onCancel}>Отмена</button>
        </div>
        
    </form>
)
}
export default CostForm;