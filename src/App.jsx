
import { Suspense } from 'react'
import './App.css'
import DaisyFooter from './Components/DaisyNav/DaisyFooter'
import Daisynav from './Components/DaisyNav/Daisynav'
import PricingOptions from './Components/DaisyNav/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json())

console.log(pricingPromise);

function App() {
 

  return (
   <>
      <Daisynav/>

      <Suspense>
          <PricingOptions pricingPromise={pricingPromise} />
      </Suspense>
      <DaisyFooter/>
   </>
  )
}

export default App
