export default function MortgageAmountInput(){
    return (
        <div className="w-[100%]">
          <h2 className="text-[#4E6E7E]">Mortgage Amount</h2> 
          <div className="flex  border border-[#6B94A8] rounded-[5px]">
            <div className="w-[44px] h-[48px] flex justify-center items-center bg-[rgb(228,244,253)] rounded-tl-[5px] rounded-bl-[5px]">£</div>
            <input type="text" className="w-[90%] h-[48px] rounded-tr-[5px] rounded-br-[5px]" />
          </div>
        </div>
    )
}