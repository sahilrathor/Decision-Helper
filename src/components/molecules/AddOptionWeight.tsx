interface AddOptionWeightProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const AddOptionWeight = ({onChange, value}: AddOptionWeightProps) => {
  return (
    <div>
      <input type="number" placeholder="Weight" value={value?? null} onChange={onChange} />
    </div>
  )
}

export default AddOptionWeight
