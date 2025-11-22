import { Card } from 'antd'
import DeleteOptionButtton from '../atoms/DeleteOptionButtton'
import AddOptionLabel from './AddOptionLabel'
import AddOptionWeight from './AddOptionWeight'
import type { OptionInterface } from '../../interfaces/optionInterface'
import { useState } from 'react'
import { useOptionsStore } from '../../stores/stores'

interface OptionCardProps {
    id: string;
    label: string;
    weight: number;
}

const OptionCard: React.FC<OptionCardProps> = ({ id, label, weight  }) => {

    const optionsStore = useOptionsStore((state) => state.data)
    const setOptionsStore = useOptionsStore((state) => state.setData)
    const [labelValue, setLabelValue] = useState<string>(label)
    const [weightValue, setWeightValue] = useState<number>(weight)

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLabelValue(event.target.value)
        setOptionsStore(
            optionsStore.map((option: OptionInterface) => {
                if (option.id === id) {
                    return { ...option, label: event.target.value }
                }
                return option
            })
        )
    }

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeightValue(Number(event.target.value))
        setOptionsStore(
            optionsStore.map((option: OptionInterface) => {
                if (option.id === id) {
                    return { ...option, weight: Number(event.target.value) }
                }
                return option
            })
        )
    }

    return (
        <Card title={label} size="small" bordered={false}>
            <AddOptionLabel onChange={handleLabelChange} value={labelValue} />
            <AddOptionWeight onChange={handleWeightChange} value={weightValue.toString()} />
            <DeleteOptionButtton id={id} />
        </Card>
    )
}

export default OptionCard
