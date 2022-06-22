import VideoCallSVG from '../icons/video.svg'
import KeyboardSVG from '../icons/keyboard.svg'
import CalendarSVG from '../icons/calendar.svg'
import PlusSVG from '../icons/plus.svg'
import LinkSVG from '../icons/link.svg'
import { Menu } from '@headlessui/react'
// import Modal from '../reusables/Modal'

const DROP_DOWN_DATA = [
  {
    img:LinkSVG,
    discription:'Create a meeting for later',
  },
  {
    img:PlusSVG,
    discription:'Start an instant meeting',
  },
  {
    img:CalendarSVG,
    discription:'Schedule in Google Calendar',
  }
]


function Textdata() {

  return (
    <div className=" lg:w-1/2 lg:h-[88.6vh]  flex flex-col items-center md:items-start md:pt-32 text-center">
    <div className=" flex md:items-left md:text-left md:pl-14 md:px-40 justify-centers flex-col ">
      <div className='px-6 md:px-0'>
      <p className="text-5xl   tracking-normal pb-2">Premium video meetings. <br></br> Now free for everyone.</p>
    <p className="text-lg pb-6 md:pb-12 pr-4 pt-3 text-[#5f6368]">We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.</p>
      </div>
    
    <div className='md:flex md:space-x-6 relative'>
          <Dropdown />
        <div className='flex border w-62 mt-5 lg:mt-0 lg:py-0 mx-6 lg:mx-0 py-2 rounded-md border-black items-center '>
          <img src={KeyboardSVG} alt="keyboard"
            style={{
                width: '28px',
                height: '28px',
            }}
            className='mx-4'
            />
        <input className="outline-none" placeholder='Enter a code or link'/>
        </div>
    </div>
    <p className=' border-t border-[#dadce0] mt-10 pt-6'><a href='https://meet.google.com/about/redirect/landing-learn-more/?hl=en_GB' className='text-[#1a73e8] hidden lg:block hover:border-b-2 border-[#1a73e8]'>Learn More</a> <span className=' text-[#5f6368] hidden lg:block'> about Google Meet</span> </p>
    </div>
    </div>
  )
}

export default Textdata

export const Dropdown = () => {
  return (
    <Menu as='div' className='mx-6 lg:mx-0 mb-3.5 lg:mb-0 lg:flex  flex-col'>
      <Menu.Button className='flex flex-row p-3 rounded-md items-center text-white   bg-[#1a73e8]'>
        <img src={VideoCallSVG} alt='vc SVG' width={18} height={18} className='mr-2 text-white '/>New meeting
      </Menu.Button>
      <Menu.Items as='div' className='absolute -top-5 border bg-white shadow-xl z-10  box-content rounded-md'>
        <Menu.Item>
          
            <div className='space-y-3'>
              {
                DROP_DOWN_DATA.map((item, index) => {
                  return (
                    <div key={index} className='py-1' >
                      <div className='flex space-x-3 items-center p-3 cursor-pointer hover:bg-gray-100'>
                        <img src={item.img} alt="abc" width={18} height={18}/>
                        <span>{item.discription}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}