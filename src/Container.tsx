import FormContainer from "./FormContainer/FormContainer";
import ResultsContainer from "./ResultsContainer";

export default function Container() {
  return <>
   <div className="flex lg:flex-row flex-col w-[95%] h-[100%] md:w-[90%] md:h-[90%] lg:w-[1008px] lg:h-[606px] bg-[#FFFFFF] rounded-[30px]">
    <FormContainer />
    <ResultsContainer />
   </div>
  </>;
}
