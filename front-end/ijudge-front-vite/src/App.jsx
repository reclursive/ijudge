import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/header'
import { Hero } from './hero-section/hero'
import { JudgesByGender } from './gender-stats/judges-by-gender'
import { JudgesForReelection } from './judges-for-reelection/jfr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    {/* <Hero /> */}
    <JudgesForReelection />
      <div>
        <p>
            As a citizen of PA you have the power to elect judges that reflect your values which could have an enormous impact on your life. Judges are elected in partisan elections and re-elected in non-partisan elections every 6 to 10 years. Appellate court and Courts of Common Pleas judges have a 10 year term, and Magisterial and Philadelphia Municipal Court judges have a 6 year term. (Referencing<a href="https://github.com/pm0kjp/pa-judicial-data?tab=readme-ov-file#judges-are-elected-but-voters-dont-know-squat" target="_blank"> PA Judicial Data by Joy </a>. The issue is that voters receive very little information about judicial elections and might know even less about the judges themselves.
        </p>
        <p>
            Judges are supposed to be impartial and unbiased, but in reality they might not be. The intent of this project is to showcase case data from the <a href="https://ujsportal.pacourts.us/" target="_blank">Pennsylvania Criminal Justice Database</a> on how different Philadelphia judges sentence individuals based on different charges and how that may vary based on their demographic information.
        </p>
    </div>
    <JudgesByGender />
    </>
  )
}

export default App
