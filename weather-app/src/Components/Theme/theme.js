import './theme.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTheme } from '../../Store/themeSlice'

function Theme(props) {

    const { updatedTheme } = props
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    updatedTheme(theme)


    return (
        <div className="theme">
            <h3>Theme</h3>
            <button className='dark-btn' onClick={() => dispatch(updateTheme('linear-gradient(#742A65, #6C2765, #7C2A53, #402479, #1A2684)'))}>Dark Theme</button>
            <button className='light-btn' onClick={() => dispatch(updateTheme('linear-gradient(#849AC9, #8E9FCA, #C1B3C9, #DBBDC5, #E5C2C0)'))}>Light Theme</button>
        </div>
    )
}

export default Theme


