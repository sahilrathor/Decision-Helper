import { Button } from "antd";
import { useOptionsStore } from "../../stores/stores";

interface DecideButtonProps {
    id: string;
}

const DeleteOptionButtton: React.FC<DecideButtonProps> = ({id}) => {

    const options = useOptionsStore((state) => state.data)
    const setOptions = useOptionsStore((state) => state.setData)

    const onClick = () => {
        const newList = options.filter((option) => option.id !== id)
        setOptions(newList)
    }

    return (
        <Button onClick={onClick} type="primary">
            Delete
        </Button>
    )
}

export default DeleteOptionButtton
