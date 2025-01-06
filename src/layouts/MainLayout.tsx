
import { Link, Outlet} from "react-router-dom";
import './MainLayout.css'

const MainLayout = () => {
    return(
        <>
        <div>
         <nav className="nav">
            <ul className="nav-a">
            <Link to="/">
                <img  className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
            </Link>
            <Link to="/layout/homepage" className="link-text">หน้าหลัก</Link>
            <Link to="/layout/allnewpage/ข่าวทั้งหมด" className="link-text">ข่าวทั้งหมด</Link>
            <Link to="/layout/allnewpage/ข่าวกีฬา"className="link-text">ข่าวกีฬา</Link>
            <Link to="/layout/allnewpage/ข่าวการเมือง" className="link-text">ข่าวการเมือง</Link>
            <Link to="/layout/allnewpage/ข่าวดารา"className="link-text">ข่าวดารา</Link>
            <Link to="/layout/allnewpage/ข่าวทั่วไป"className="link-text">ข่าวทั่วไป</Link>

            </ul>
        </nav>
        </div>
        <Outlet/>
        </>    
    )
}
export default MainLayout