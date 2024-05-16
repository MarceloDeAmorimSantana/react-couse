
import "./App.css"

import Banner from "./components/Banner"

import all from "./assets/images/svg/all-covered-svgrepo-com.svg"
import machine from "./assets/images/svg/machine-vision-svgrepo-com.svg"
import mail from "./assets/images/svg/mail-reception-svgrepo-com.svg"
import page from "./assets/images/svg/page-analysis-svgrepo-com.svg"
import safe from "./assets/images/svg/safe-and-stable-svgrepo-com.svg"
import touch from "./assets/images/svg/touch-click-svgrepo-com.svg"


function App() {
  return (
    <body>
      <div className="Card">
        <h1>React Course</h1>
        <p>Front-End Javascript</p>
      </div> 

      <Banner title="all" descrição="descrição" image={all}/>
      <Banner title="machine" descrição="descrição" image={machine}/>
      <Banner title="mail" descrição="descrição" image={mail}/>
      <Banner title="page" descrição="descrição" image={page}/>
      <Banner title="safe" descrição="descrição" image={safe}/>
      <Banner title="touch" descrição="descrição" image={touch}/>


    </body>  
  )
}

export default App;


