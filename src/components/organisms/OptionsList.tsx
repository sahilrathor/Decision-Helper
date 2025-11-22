import OptionCard from '../molecules/OptionCard'
import { useOptionsStore } from '../../stores/stores'

const OptionsList = () => {
    const options = useOptionsStore((state) => state.data)
    return (
        <div>
            {options.map((option) => (
                <OptionCard key={option.id} id={option.id} label={option.label} weight={option.weight} />
            ))}
        </div>
    )
}

export default OptionsList
