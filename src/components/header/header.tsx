import QuestionSVG from '../../icons/questionMark.svg';
import ErrormessageSVG from '../../icons/smsFailed.svg'
import SettingsSVG from '../../icons/settings.svg'
import AppsSVG from '../../icons/apps.svg'
import UserSVG from '../../icons/user.svg'

function Header() {
      const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  return (
    <div className='flex justify-around items-center w-full p-2.5'>
        <div className='w-1/2  pl-3'>

            <div className='flex  space-x-1'><img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" alt="logo" /><a href="#" className='cursor-pointer top-2'
            style={{
                fontSize:'22px'
            }}
            >Meet</a></div>
        </div>
        <div className='flex items-center w-1/2 justify-end pl-3'>
            <div className='w-auto'><p>{date}</p></div>
            <div className='flex items-center justify-center space-x-1 lg:w-40'>
                <div className='m-0 p-2.5 rounded-full hover:bg-gray-300'>
                <img src={QuestionSVG} alt="" height={24} width={24} className='cursor-pointer ' />
                </div>
                <div className='m-0 p-2.5 rounded-full hover:bg-gray-300'>
                <img src={ErrormessageSVG} alt="" height={24} width={24} className='cursor-pointer' />
                </div>

                <div className='m-0 p-2.5 rounded-full hover:bg-gray-300'>
                <img src={SettingsSVG} alt="" height={24} width={24} className='cursor-pointer' />
                </div>

            </div>
            <div className='flex items-center w-32  justify-center space-x-1'>
                <div className='m-0 p-2.5 rounded-full hover:bg-gray-300'>

                <img src={AppsSVG} alt=""  height={24} width={24} className='cursor-pointer'/>
                </div>
                <div className='m-0 p-2.5 rounded-full hover:bg-gray-300'>
                <img src={UserSVG} alt=""  height={24} width={24} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header