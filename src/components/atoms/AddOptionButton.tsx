import { Button } from "antd";
import { useOptionsStore } from "../../stores/stores";
import { UniqueID } from "../../utils/common";

const AddOptionButton = () => {
    const options = useOptionsStore((state) => state.data)
    const setOptions = useOptionsStore((state) => state.setData)

    const onClick = () => {
        const newOption = { id: UniqueID(), label: `Option ${options.length + 1}`, weight: 1 }
        try {
            setOptions([...options, newOption])
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Button onClick={onClick} type="primary">
            Add Option
        </Button>
    )
}

export default AddOptionButton
