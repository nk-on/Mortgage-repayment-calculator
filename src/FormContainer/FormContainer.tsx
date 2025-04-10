import MortgageAmountInput from "./MortgageAmountInput";
import Input from "./Input";
import MortgageType from "./MortgageType";
import { useContext, useState } from "react";
import { CalculatorContext } from "../CalculatorContext";
import mortgageTypes from "./MortgageTypes";
export default function FormContainer() {
  const {
    mortgageType,
    dispatch,
    mortgageAmount,
    interestAmount,
    yearsAmount,
  } = useContext(CalculatorContext);
  const [mortgageAmountError,setMortgageAmountError] = useState(false);
  const [InterestAmountError,setInterestAmountError] = useState(false);
  const [yearsAmountError,setYearsAmountError] = useState(false);
  const [mortgageTypeError,setMortgageTypeError] = useState(false);
  return (
    <div className="flex flex-col lg:items-start items-center justify-between p-[30px] gap-[10px]  lg:h-[100%] h-[65%] bg-[#fff] text-[#4E6E7E] lg:rounded-tl-[50px] lg:rounded-bl-[50px] lg:p-[30px] ">
      <div className="w-[90%] lg:flex  justify-between items-center">
        <h1 className="text-[#133041] font-medium text-[25px]">Mortgage Calculator</h1>
        <p className=" underline">Clear All</p>
      </div>
      <form className="flex flex-col gap-[30px] h-[78%] justify-start w-[80%]">
        <MortgageAmountInput error = {mortgageAmountError} setError = {setMortgageAmountError} />
        <div className="w-[100%] flex lg:flex-row flex-col gap-[50px]">
          <Input key={0} title={"Mortgage term"} symbol={"years"} error = {yearsAmountError} setError = {setYearsAmountError}   />
          <Input key={1} title={"Intrest rate"} symbol={"%"} error = {InterestAmountError} setError = {setInterestAmountError} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2>Motrgage type</h2>
          <div className="flex flex-col gap-[10px]">
            {mortgageTypes.map((element) => (
              <MortgageType
                key={element.id}
                title={element.title}
                id={element.id}
                checked={element.checked}
                setMortgageTypeError = {setMortgageTypeError}
              />
            ))}
            {mortgageTypeError && <p className="text-[#D73328]">This field is required</p>}
          </div>
        </div>
      </form>
      <button
        className="bg-[#D8DB2F] flex justify-between items-center text-[#000] font-bold lg:h-[56px] h-[18px] p-[30px] rounded-[50px] w-[70%]"
        onClick={() => {
          if(mortgageAmount === 0 || yearsAmount === 0 || interestAmount === 0 || mortgageType === ""){
            if(mortgageAmount === 0){
              setMortgageAmountError(true);
            }
            if(yearsAmount === 0){
              setYearsAmountError(true);
            }
            if(interestAmount === 0){
              setInterestAmountError(true)
            }
            if(mortgageType === ""){
              setMortgageTypeError(true);
            }
          }
          dispatch({ type: mortgageType });
        }}
      >
        <span>
          <img src="src/assets/icon-calculator.svg" />
        </span>
        Calculate Repayments
      </button>
    </div>
  );
}
