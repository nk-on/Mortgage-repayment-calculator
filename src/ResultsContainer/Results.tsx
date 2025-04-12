import { useContext } from "react";
import { CalculatorContext } from "../CalculatorContext";
export default function Results() {
  const {payment,yearsAmount} = useContext(CalculatorContext)
  return (
    <>
      <div className="flex flex-col  gap-[50px]">
        <h2 className="text-[#fff] font-bold text-[24px]">Your Results</h2>
        <p className="text-[#9ABED5]">
          Your results are shown below based on the information you provided. To adjust
          the results, edit the form and click “calculate repayments” again.
        </p>
      </div>
      <div
        className=" flex flex-col gap-[50px] p-[30px] w-[90%] lg:h-[250px] min-h-[40%] shadow-[0px_-10px_0px_0px_rgba(216,219,47,1)] rounded-[7px] mt-[70px]"
        style={{ background: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex flex-col gap-[20px] relative">
          <p className="text-[#9ABED5]">Your Monthly repayment</p>
          <h1 className="text-[#D8DB2F]  font-bold absolute top-[30px] text-[35px]">
            £{payment.monthlyPayment}
          </h1>
        </div>
        <div className="w-[90%] h-[1px] bg-[#9ABED540] relative top-[30px]"></div>
        <div>
          <p className="text-[#9ABED5]">Total you will repay</p>
          <h1 className="text-[#fff] font-bold">
            £{payment.monthlyPayment * yearsAmount * 12}
          </h1>
        </div>
      </div>
    </>
  );
}
