import { useTranslation } from 'react-i18next'
import './Options.css'
import { useNavigate } from 'react-router-dom'
import arrowDown from '../assets/icons/arrow_downward.svg'

export default function OptionsPage() {
  const { t } = useTranslation()
  const nav = useNavigate()

  return (
    <>
      <button onClick={() => nav('/')}>
        <img src={arrowDown}></img>
      </button>
      <div className='element-continer'>
        <div className='card'>
          <h1>{t('key.games')}</h1>
          <p>{t('key.gamesDescription')}</p>
          <div>
            <button>{t('key.games')}</button>
          </div>
        </div>
        <div className='card'>
          <h1>{t('key.awards')}</h1>
          <p>{t('key.awardsDescription')}</p>
          <div>
            <button>{t('key.awards')}</button>
          </div>
        </div>
      </div>
    </>
  )
}
