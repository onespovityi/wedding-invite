import cls from './index.module.css'
import { CountdownTimer } from './components/CountDownTimer/CountDownTimer'
import { WeddingDetails } from './components/WeddingDetails/WeddingDetails'
import { TimingDetails } from './components/TimingDetails/TimingDetails'
import { Location } from './components/Location/Location'
import { DressCode } from './components/DressCode/DressCode'
import { Contacts } from './components/Contacts/Contacts'
import { SeeYou } from './components/SeeYou/SeeYou'
import { Questions } from './components/Questions/Questions'
import ReactConfetti from 'react-confetti'
import { useState } from 'react'

function App() {
  const [isWeddingDay, setIsWeddingDay] = useState<boolean>(false);

  return (
    <div className={cls.wrap}>
      <WeddingDetails isWeddingDay={isWeddingDay} />
      <CountdownTimer isWeddingDay={isWeddingDay} setIsWeddingDay={setIsWeddingDay} />
      <TimingDetails />
      <Location />
      <DressCode />
      {!isWeddingDay && <Questions />}
      <Contacts />
      <SeeYou />
      {isWeddingDay && <ReactConfetti height={3100} numberOfPieces={500} />}
    </div>

  )
}

export default App
