  interface AddOptionLabelProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

  const AddOptionLabel = ({value, onChange}: AddOptionLabelProps) => {
    return (
      <div>
        <input type="text" placeholder="Label" value={value?? null} onChange={onChange} />
      </div>
    )
  }

  export default AddOptionLabel
