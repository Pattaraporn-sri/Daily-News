import './NotFound.css'
import Image from './img/not-found.png'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className='box-not'>
        <div className='not-found'>
            <img src={Image} className='img'/>
        </div>
        <div className='button'>
            <button onClick={() => navigate("/layout/homepage")} className='button-back'>
                กลับสู่หน้าหลัก
            </button>
        </div>
    </div>
  )
}

export default NotFound