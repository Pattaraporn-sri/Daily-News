import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import images from './img/image-router.png'

function MainPage(){
    const navigate = useNavigate();
     return (
        <div className='box'>
            <div className='box-img'>
                <img className='img' src={images}/>
            </div>
            <div className='text-btn'>
                <div className='text'>
                        ogs Daily News
                </div>
                <div className='btn'>
                    <button onClick={() => navigate("/layout/homepage",
                        {state:{
                            name: "HomePage"
                        }}
                    )} className='btn-tab'>
                        เข้าสู่เว็บไซต์
                    </button>
                </div> 
            </div>
         </div>
    );
}
export default MainPage