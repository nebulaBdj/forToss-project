import { ChangeEvent, Dispatch } from "react";

interface Props {
    option : Option[];
    setOptionName: Dispatch<React.SetStateAction<string>>;
    setOptionView: Dispatch<React.SetStateAction<boolean>>;
} 

export default function DetailOption({option, setOptionName, setOptionView}:Props){

    const changeOption = (event : ChangeEvent<HTMLSelectElement>) => {
        
        const selectOption = event.target.value;
        setOptionName(selectOption);
        setOptionView(false)
    }

    return (
        <select onChange={changeOption}>
                {option.map((option)=>{
                    return (
                    <option key={option.id} value={option.optionName} >
                        {option.optionName}
                        {option.additionalFee > 0 &&`(+${option.additionalFee})`}
                    </option>
                )
            })}
        </select>
    )
}