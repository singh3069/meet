import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Keyboard } from "swiper";

function Slider() {
   
    
  return (
    <div className=' w-1/2 h-[88.6vh] flex '>
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt="pic01"  />
            <p>Get alink that you can share</p>
            <p>Click New meeting to get a link that you can send</p>
            <p>to people that you want to meet with</p>
        </SwiperSlide>
        </div>
        
        <SwiperSlide>
          <img src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg" alt="pic02" />
          <p>See everyone together</p>
          <p>To see more people at the same time, go to Change</p>
          <p>layout in the More options menu</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg" alt="pic04" />
          <p>Plan ahead</p>
          <p>Click New meeting to schedule meetings in Google</p>
          <p>Calender and send invitations to participants</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-rows">
            <img src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg" alt="pic04" />
            <p>Your meeting is safe</p>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
   
  )
}

export default Slider