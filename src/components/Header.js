import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header style={{ height: "480px", overflow: 'hidden' }}>
            <nav className="nav">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user-icon"
                    />
                </Link>
                <div>ConnectEd App</div>
            </nav>
           <img style={{width:"100%"}} src="https://cdn.create.vista.com/api/media/small/175221866/stock-photo-friends" alt="placeholder"/>
        </header>
    )
}


export default Header