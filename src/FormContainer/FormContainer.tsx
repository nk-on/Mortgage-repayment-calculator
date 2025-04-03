import MortgageAmountInput from "./MortgageAmountInput";
import Input from "./Input";
import MortgageType from "./MortgageType";
export default function FormContainer() {
  return (
    <div className="flex flex-col lg:items-start items-center justify-between p-[30px] gap-[10px]  lg:h-[100%] h-[50%] bg-[#fff] text-[#4E6E7E] lg:rounded-tl-[50px] lg:rounded-bl-[50px] lg:p-[30px] ">
      <div className="w-[90%] lg:flex  justify-between items-center">
        <h1 className="text-[#133041] font-medium text-[25px]">Mortgage Calculator</h1>
        <p className=" underline">Clear All</p>
      </div>
      <form className="flex flex-col gap-[30px] h-[100%] justify-start w-[100%]">
        <MortgageAmountInput />
        <div className="w-[100%] flex lg:flex-row flex-col gap-[50px]">
          <Input title = {"Mortgage term"} symbol = {"years"} />
          <Input title = {"Intrest rate"} symbol = {"%"} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2>Motrgage type</h2>
          <div className="flex flex-col gap-[10px]">
            <MortgageType title="Repayment" />
            <MortgageType title="Intrest only" />
          </div>
        </div>
      </form>
      <button className="bg-[#D8DB2F] flex justify-between items-center text-[#000] font-bold h-[56px] p-[30px] rounded-[50px] w-[70%]"><span><img src="src/assets/icon-calculator.svg" /></span>Calculate Repayments</button>
    </div>
  );
}
