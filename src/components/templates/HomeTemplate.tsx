import AddOptionButton from '../atoms/AddOptionButton'
import OptionsList from '../organisms/OptionsList'
import DecideButton from '../atoms/DecideButton'

const HomeTemplate = () => {
    return (
        <div >
            <h1>Decision Helper</h1>
            <p>Decision Helper is a web application that helps you make decisions by providing you with a list of options and their weights.</p>
            <AddOptionButton />
            <OptionsList />
            <DecideButton />
        </div>
    )
}

export default HomeTemplate
