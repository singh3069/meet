import VideoCallSVG from '../icons/video.svg'
import KeyboardSVG from '../icons/keyboard.svg'
import Modal from '../reusables/Modal'

function TextData() {
  return (
    <div className=" w-1/2 h-[88.6vh]  flex flex-col items-start pt-32 text-center">
    <div className=" flex items-left text-left pl-14 px-40 justify-centers flex-col ">
    <p className="text-4xl tracking-normal pb-2">Premium video meetings. <br></br> Now free for everyone.</p>
    <p className="text-lg pb-12 pr-4 pt-1">We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.</p>
    <div className='flex space-x-6'>
        <button className="flex flex-row p-3 rounded-md items-center text-white   bg-[#1a73e8]"><img src={VideoCallSVG} alt='vc SVG' width={18} height={18} className='mr-2 text-white '/>New meeting</button>
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
    <Modal/>
    <p className=' border-t border-black mt-10 pt-6'><a href='https://meet.google.com/about/redirect/landing-learn-more/?hl=en_GB' className='text-[#1a73e8] hover:border-b-2 border-[#1a73e8]'>Learn More</a> about Google Meet </p>
    </div>
    </div>
  )
}

export default TextData