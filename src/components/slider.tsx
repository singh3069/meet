import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Keyboard } from "swiper";

const sliderContent =[
  {
    img:'https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg',
    heading:'Get alink that you can share',
    discription1:'Click New meeting to get a link that you can send',
    discription2:'to people that you want to meet with'
  },
  {
    img:'https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg',
    heading:'See everyone together',
    discription1:'To see more people at the same time, go to Change',
    discription2:'layout in the More options menu'
  },
  {
    img:'https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg',
    heading:'Plan ahead',
    discription1:'Click New meeting to schedule meetings in Google',
    discription2:'Calender and send invitations to participants'
  },
  {
    img:'https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg',
    heading:'Your meeting is safe',
    discription1:'',
    discription2:''
  },
]


function slider() {
  return (
    <div className=' w-full md:w-1/2  flex m-0 lg:my-24 lg:mx-auto  '>
      
        <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper w-full lg:w-1/2 right-0 lg:right-10 lg:pt-24 pt-0"
      >
        {
          sliderContent.map((item,index)=>{
            return(
              <SwiperSlide className="flex flex-rows" key={index}>
              <img src={item.img} alt="pic01"  />
            <p className="text-2xl font-normal ">{item.heading}</p>
            <p className="text-sm ">{item.discription1}</p>
            <p className="text-sm">{item.discription2}</p>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </>
    </div>
   
  )
}

export default slider