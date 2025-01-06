import { useParams, useSearchParams} from "react-router-dom";
import { data_new } from "../data_new";
import './DetailNew.css'



function DatailNew() {
  const {nametype,id} = useParams();  //useparams เพื่อดึงค่าที่ประกาศ ในonClick หนเา homepage
  const newtype = data_new[0].type_new.filter((i)=>i.name===nametype)[0].news_type.filter((item) => item.id === Number(id))[0] //รายละเอียดข่าว
  // console.log(newtype)
  const [searchParams] = useSearchParams(); 
  const Name = searchParams.get('Name');  //ประกาศชื่อผู้เข้าชม
  console.log(Name)

  return (
    <div> {/* เรียกใช้ชื่อผู้เข้าชม */}
      <div className="Name">ผู้เข้าชม : {Name}</div> 
    <div  key={newtype.id} className="newtype">    
      <h1>รายละเอียด{newtype.category}</h1>
      
      <div className="box-news">
          <div className="id">รหัสข่าว : {newtype.id}</div>
          <div>วันที่ลงข่าว : {newtype.date}</div>
          <div>เวลาที่ลงข่าว : {newtype.time}</div>
          <div>หัวข้อข่าว : {newtype.headline}</div>
          <div>เนื้อหาข่าว : {newtype.content}</div>
          <div>เนื้อหาข่าว : {newtype.category}</div>
          <div>ประเภทข่าว : {newtype.publisher}</div>
        </div> 
      
    </div>
    </div>
  )
}

export default DatailNew