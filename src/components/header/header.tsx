import QuestionSVG from '../../icons/questionMark.svg';
import ErrormessageSVG from '../../icons/smsFailed.svg'
import SettingsSVG from '../../icons/settings.svg'
import AppsSVG from '../../icons/apps.svg'
import UserSVG from '../../icons/user.svg'

function Header() {
      const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  return (
    <div className='flex justify-around items-center w-full p-5 '>
        <div className='w-1/2  pl-3'>

            <p className=''><a href="#" className='cursor-pointer'>Meet</a></p>
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