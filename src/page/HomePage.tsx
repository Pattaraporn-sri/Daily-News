import {useNavigate, useSearchParams } from 'react-router-dom'
import './HomePage.css'
import { data_new } from '../data_new'


function HomePage() { 
  const navigate = useNavigate();
  const [searchParams, ] = useSearchParams();
  const Id = searchParams.get('id');
  console.log(Id)

  return (
    <>
    <div className='Box'>
    {data_new.map((i) => 
      <div>
        <div className='title'>{i.title}</div>
        <div className='sub-title'>{i.sub_title}</div>
      </div>
    )}

      {data_new[0].type_new.map((e) => 
        <div>
            
          <h3 className='type-new-name'>ประเภทข่าว : {e.name}</h3>
          
          <div>
          {e.news_type.filter((f) =>{
            return f.id === 1 || f.id === 2
          }) 
            .map((a) => 
           // เพิ่ม Name=Yayee บน path 
          <div className='box-container' onClick={() => navigate(`/layout/detail/${a.category}/${a.id}/?Name=yayee`)}> 
  
            <div className='time'> {a.date}</div>
            <div className='headline-text'> {a.headline}</div>
            <div className='content'> {a.content}</div>
            <div className='category'> ประเภทข่าว : {a.category}</div> 
          </div>
          )}
        
          </div>
        </div>
      )
    }
  </div>     
  </>
  )
}

export default HomePage
