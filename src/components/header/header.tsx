import QuestionSVG from '../../icons/questionMark.svg';
import ErrormessageSVG from '../../icons/smsFailed.svg'
import SettingsSVG from '../../icons/settings.svg'
import AppsSVG from '../../icons/apps.svg'
import UserSVG from '../../icons/user.svg'

function Header() {
      const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  return (
    <div className='flex justify-around items-center w-full'>
        <div className='w-1/3'>

            <p><a href="#">Meet</a>{date}</p>
            {/* <p>{current}</p> */}
        </div>
        <div className='flex items-center w-2/3 justify-end'>
            <div className='w-auto'><p>date</p></div>
            <div className='flex items-center w-1/12'>
                <img src={QuestionSVG} alt="" height={24} width={24} />
                <img src={ErrormessageSVG} alt="" height={24} width={24} />
                <img src={SettingsSVG} alt="" height={24} width={24} />
            </div>
            <div className='flex items-center w-1/12'>
                <img src={AppsSVG} alt=""  height={24} width={24}/>
                <img src={UserSVG} alt=""  height={24} width={24}/>
            </div>
        </div>
    </div>
  )
}

export default Header