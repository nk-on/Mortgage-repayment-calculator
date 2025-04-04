import { createContext, useState } from "react";
interface CalculatorContextProps {
    mortgageAmount: number | null;
    setMortgageAmount: (value: number | null) => void;
    interestAmount: number | null;
    setInterestAmount: (value: number | null) => void;
    yearsAmount: number | null;
    setYearsAmount: (value: number | null) => void;
}
export const CalculatorContext = createContext<CalculatorContextProps>({
    mortgageAmount:null,
    setMortgageAmount:()=>{},
    interestAmount:null,
    setInterestAmount:()=>{},
    yearsAmount:null ,
    setYearsAmount:()=>{}
});
export default function CalculatorProvider({children}){
    const [mortgageAmount,setMortgageAmount]  = useState <number | null>(null);
    const [interestAmount, setInterestAmount] = useState<number | null>(null);
    const [yearsAmount,setYearsAmount] = useState<number | null>(null);
    return (
        <CalculatorContext.Provider value = {{
            mortgageAmount,
            setMortgageAmount,
            interestAmount,
            setInterestAmount,
            yearsAmount,
            setYearsAmount
        }}>
         {children}
        </CalculatorContext.Provider>
    )
}