import { createContext, useState,useReducer } from "react";
import {calculateMonthlyPayment,calculateInterestOnly} from "./calculatePayment";
type Action =
  {type:string}

interface CalculatorContextProps {
    mortgageAmount: number;
    setMortgageAmount: (value: number) => void;
    interestAmount: number;
    setInterestAmount: (value: number) => void;
    yearsAmount: number;
    setYearsAmount: (value: number) => void;
    payment:{monthlyPayment:number};
    dispatch:React.ActionDispatch<[action: Action]>;
    setMortgageType:React.Dispatch<React.SetStateAction<string>>;
    mortgageType:string
}
export const CalculatorContext = createContext<CalculatorContextProps>({
    mortgageAmount:0,
    setMortgageAmount:()=>{},
    interestAmount:0,
    setInterestAmount:()=>{},
    yearsAmount:0,
    setYearsAmount:()=>{},
    payment:{ monthlyPayment: 0},
    dispatch:()=>{},
    setMortgageType:()=>{},
    mortgageType:''
});
export default function CalculatorProvider({children}){
    const [mortgageAmount,setMortgageAmount]  = useState <number>(0);
    const [interestAmount, setInterestAmount] = useState<number>(0);
    const [yearsAmount,setYearsAmount] = useState<number>(0);
    const [mortgageType,setMortgageType] = useState<string>('');
    const [payment, dispatch] = useReducer(CalculatePayment, { monthlyPayment: 0 });
    function CalculatePayment(state, action) {
        switch (action.type) {
          case "Repayment":
            return {
              monthlyPayment: calculateMonthlyPayment(
                mortgageAmount,
                interestAmount,
                yearsAmount
              ),
            };
          case "Interest only":
            return {monthlyPayment:calculateInterestOnly(mortgageAmount,interestAmount)}
          default:
            return state;
        }
    }
    return (
        <CalculatorContext.Provider value = {{
            mortgageAmount,
            setMortgageAmount,
            interestAmount,
            setInterestAmount,
            yearsAmount,
            setYearsAmount,
            payment,
            dispatch,
            setMortgageType,
            mortgageType
        }}>
         {children}
        </CalculatorContext.Provider>
    )
}