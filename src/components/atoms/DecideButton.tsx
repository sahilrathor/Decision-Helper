import { Button } from "antd";
import { useOptionsStore } from "../../stores/stores";

const DecideButton = () => {
    const options = useOptionsStore((state) => state.data)

    const onClick = () => {
        const randomOptionId = options[Math.floor(Math.random() * options.length)]
        console.log(randomOptionId)
    }
    
    return (
        <Button onClick={onClick} type="primary">
            Decide
        </Button>
    )
}

export default DecideButton
