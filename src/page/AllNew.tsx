import { useParams} from 'react-router-dom'
import { data_new } from '../data_new';
import './AllNew.css'

function AllNew() { 
    const {name} = useParams();
    const type = data_new[0].type_new[0].name
    console.log(type)
  return (
    <>
    <div className='Box'>
      {data_new.map((i) => {                     //map ลูปข้อมูลผ่าน data_new
       let type = i.type_new.filter((e)=>{      //ตัวแปร i จะไปลูปใน type_new แล้ว filter กรองออกมา(e) ตามเงื่อนไข
        if(name !== "ข่าวทั้งหมด"){
          return e.name === name
        }else{
          return e
        }
       }
      )
        return(
          <>
            <div >{type.map((news_category) => ( 

              <div key={news_category.id}>
                <h2 className='category-name'>{news_category.name}</h2>

                  <div>{news_category.news_type.map((item) => {
                      return (
                        <div>
                              <div className='container'>
                                <div key={item.id}>
                                    <h5 className='date'>{item.date}</h5>
                                    <h5 className='headline'>{item.headline}</h5>
                                    <h5 className='content'>{item.content}</h5>
                                    <h5 className='category'>ประเภทข่าว : {item.category}</h5>
                                </div>
                              </div>

                        </div>
                      )
                  })}
                  </div>

              </div>
                  ))
              } 

              
            </div> 
            
          </>
        )
        
      })}
      

    </div>    
    </>
  )
}

export default AllNew


 
