import {useNavigate} from 'react-router-dom'

import './directory-item.style.scss'

const DirectoryItem = ({ category }) => {
    const { imageUrl ,title,route} = category

    const navigate = useNavigate()
    const onNaigeteHandler = ()=>{navigate(route)}

    return (
        <div className="directory-container" onClick={onNaigeteHandler}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="directory-body-container">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default DirectoryItem