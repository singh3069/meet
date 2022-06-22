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
    <div className=" w-1/2 h-[88.6vh]  flex flex-col items-start pt-32 text-center">
    <div className=" flex items-left text-left pl-14 px-40 justify-centers flex-col ">
    <p className="text-4xl tracking-normal pb-2">Premium video meetings. <br></br> Now free for everyone.</p>
    <p className="text-lg pb-12 pr-4 pt-1">We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.</p>
    <div className='flex space-x-6 relative'>
          <Dropdown />
        <div className='flex border w-62 rounded-md border-black items-center '>
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
    <p className=' border-t border-black mt-10 pt-6'><a href='https://meet.google.com/about/redirect/landing-learn-more/?hl=en_GB' className='text-[#1a73e8] hover:border-b-2 border-[#1a73e8]'>Learn More</a> about Google Meet </p>
    </div>
    </div>
  )
}

export default Textdata

export const Dropdown = () => {
  return (
    <Menu as='div' className='flex flex-col'>
      <Menu.Button className='flex flex-row p-3 rounded-md items-center text-white   bg-[#1a73e8]'>
        <img src={VideoCallSVG} alt='vc SVG' width={18} height={18} className='mr-2 text-white '/>New meeting
      </Menu.Button>
      <Menu.Items as='div' className='absolute -top-5 border bg-white shadow-xl z-10  box-content rounded-md'>
        <Menu.Item>
          {({ active }) => (
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
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}