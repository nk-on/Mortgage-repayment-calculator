interface MortgageType {
    title:string
}
export default function MortgageType({title}:MortgageType){
    return (
        <div className="w-[100%] lg:h-[48px] h-[24px] border border-[#6B94A8] flex items-center gap-[30px] p-[10px] rounded-[5px]">
            <input type="radio" />
            <h1 className="text-[#133041] font-bold">{title}</h1>
        </div>
    )
}