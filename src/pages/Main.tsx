import { useTranslation } from 'react-i18next'
import mjdaLogo from '../assets/mjda.png'
import arrowDown from '../assets/icons/arrow_downward.svg'

import WordSplitter from '../components/WordSplitter'
import './Main.css'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
  const { t } = useTranslation()
  const nav = useNavigate()

  return (
    <>
      <div className='card title-card'>
        <div className='title-container'>
          <img src={mjdaLogo} className='main-logo' />
          <h1>
            <WordSplitter text={t('main.welcome')} wordsPerLine={2} />
          </h1>
        </div>
        <h2>{t('main.description')}</h2>
      </div>
      <button onClick={() => nav('options')}>
        <img src={arrowDown}></img>
      </button>
    </>
  )
}
