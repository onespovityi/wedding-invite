import cls from './index.module.css'
import { CountdownTimer } from './components/CountDownTimer/CountDownTimer'
import { WeddingDetails } from './components/WeddingDetails/WeddingDetails'
import { TimingDetails } from './components/TimingDetails/TimingDetails'
import { Location } from './components/Location/Location'
import { DressCode } from './components/DressCode/DressCode'
// import { Contacts } from './components/Contacts/Contacts'
import { SeeYou } from './components/SeeYou/SeeYou'

function App() {

  return (
    <div className={cls.wrap}>
      <WeddingDetails />
      <CountdownTimer />
      <TimingDetails />
      <Location />
      <DressCode />
      {/* <Contacts /> */}
      <SeeYou />
    </div>

  )
}

export default App
