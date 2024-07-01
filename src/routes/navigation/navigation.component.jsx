import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

function Navigation(){
    return(
        <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
        <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-link-container">
        <Link className="nav-link" to="/shop" style={{width: '50px', padding: '10px'}}>
        SHOP
        </Link>
        <Link className="nav-link" to='/sign-in' style={{width: '50px', padding: '10px'}}>
        SIGN IN
        </Link>
        </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation