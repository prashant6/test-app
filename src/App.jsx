import { useState } from 'react'
import './App.css'
import Validation1 from './form-validation/vanialla-validation/Validation1'
import Promises from './promises/Promises'
import ReactHookFormValidation from './form-validation/react-hook-form/ReactHookFormValidation'

function App() {

  return (
    <>
      {/* <Promises /> */}

    {/* below validation is done by only javascript */}
      <Validation1 />

      {/* below validation is done by react-hook-form library */}
      {/* <ReactHookFormValidation /> */}
    </>
  )
}

export default App
