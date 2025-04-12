import { createContext, useState,useReducer } from "react";
import {CalculatePayment} from "./calculatePayment";
type Action =
  {type:string,payload:{mortgageAmount: number;
    interestAmount: number; 
    yearsAmount: number}}

interface CalculatorContextProps {
    mortgageAmount: number;
    setMortgageAmount: (value: number ) => void;
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
export default function CalculatorProvider({children}:{children:React.ReactNode}){
    const [mortgageAmount,setMortgageAmount]  = useState<number>(0);
    const [interestAmount, setInterestAmount] = useState<number>(0);
    const [yearsAmount,setYearsAmount] = useState<number>(0);
    const [mortgageType,setMortgageType] = useState<string>('');
    const [payment, dispatch] = useReducer(CalculatePayment, { monthlyPayment: 0 });

   
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