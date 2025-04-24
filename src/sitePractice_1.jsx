
import logo from "./intro-section-with-dropdown-navigation-main/images/logo.svg"
import arrowUp from "./intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg"
import arrowDown from "./intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg"
import databiz from "./intro-section-with-dropdown-navigation-main/images/client-databiz.svg"
import audiophile from "./intro-section-with-dropdown-navigation-main/images/client-audiophile.svg"
import meet from "./intro-section-with-dropdown-navigation-main/images/client-meet.svg"
import maker from "./intro-section-with-dropdown-navigation-main/images/client-maker.svg"
import mainImg from "./intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png"

import Todo from "./intro-section-with-dropdown-navigation-main/images/icon-todo.svg"
import Calendar from "./intro-section-with-dropdown-navigation-main/images/icon-calendar.svg"
import Reminders from "./intro-section-with-dropdown-navigation-main/images/icon-reminders.svg"
import Planning from "./intro-section-with-dropdown-navigation-main/images/icon-planning.svg"

import "./site1.css"
import { useState } from "react"

function SitePractice(){
  const [isFeatureOpen , setIsFeatureOpen] = useState(false)
  const [isCompanyOpen , setIsCompanyOpen] = useState(false)


 const handleOpenFeature = () => {
    if(isFeatureOpen === true){
      setIsFeatureOpen(false)
    } else setIsFeatureOpen(true)
  }
  const handleOpenCompany = () => {
    if(isCompanyOpen === true){
      setIsCompanyOpen(false)
    } else setIsCompanyOpen(true)
  }
  return(
    <>

    {/*네비게이션 바*/}
      <nav style={{position : "fixed" , top : 0, width : "90%" , height : "60px" , marginLeft : "30px", marginTop : "15px", 
        display : "flex"  , alignItems : "center" , justifyContent : "space-between" , padding : "0 40px 0 40px" , zIndex : "1000" }}>
      <div style={{display : "flex" , alignItems : "center", gap : "60px", userSelect: "none"}}>
    <img src={logo} alt="logo" style={{height:"27px"}}></img>
    <div style={{ display : "flex" , gap : "30px"}}>
    <div style={{cursor : "pointer"}} onClick={handleOpenFeature}>
      <div className= "About">Features <img src={isFeatureOpen ? arrowUp : arrowDown}/></div>
      <div className={`dropdown-wrapper ${isFeatureOpen ? "open" : ""}`}>
        <div className="dropdown">
          <div style={{display:"flex" , alignItems : "center"}}><img src={Todo} style={{marginRight : "9px"}}/>Todo List</div>
          <div style={{display:"flex" , alignItems : "center"}}><img src={Calendar} style={{marginRight : "8px"}}/> Calendar</div>
          <div style={{display:"flex" , alignItems : "center"}}><img src={Reminders} style={{marginRight : "10px"}}/>Reminders</div>
          <div style={{display:"flex" , alignItems : "center"}}><img src={Planning} style={{marginRight : "7px"}}/>Planning</div>
        </div>
      </div>
     </div>
     <div style={{cursor : "pointer"}} onClick={handleOpenCompany}>
      <div className= "About" >Company <img src={isCompanyOpen ? arrowUp : arrowDown}/></div>
      <div className={`dropdown-company-wrapper ${isCompanyOpen ? "open" : ""}`}>
        <div className="dropdown-company">
          <div>History</div>
          <div>Our Team</div>
          <div>Blog</div>
        </div>
      </div>
     </div>

      <div>Careers</div>
      <div className="About">About</div>
    </div>
      </div>

    <div style={{ display : "flex" , gap : "30px", fontSize:"15px" , cursor : "pointer"  , alignItems : "center" , userSelect: "none"}}>
      <div className="LetsBlack" >Login</div>
      <div className="LetsBlack" style={{padding: "6px 14px" , border : "1px solid black" , borderRadius : "8px"}}>
        Register
      </div>
    </div>
      </nav>

{/*네비게이션바 끝 */}


<div className ="ContentText" style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>
  <div style={{marginLeft:"250px" , marginRight : "200px"}}>
  <div style={{ marginTop : "200px" }}>
      <p className="epilogue-content" style={{fontSize : "80px" , fontWeight : 700 ,}}>Make <br/> remote work</p>
      </div>

      <div className="epilogue-text" style={{ marginTop : "50px", fontSize:"19px", color : "hsl(0, 0%, 41%)"}}>
        Get your team in stnc, no matter your location.<br/>
        Streamline processes, create team rituals, and <br/>watch productivity soar.
      </div>

      <div className = "LearnMoreButton">Learn more</div>

<div style={{ marginTop : "150px" , display:"flex" , alignItems : "center" , justifyContent : "start" ,gap : "50px" }}>
        <img src={databiz}></img>
        <img src={audiophile}></img>
        <img src={meet}></img>
        <img src={maker}></img>
      </div>
  </div>
 

      <img  style={{width :"550px", marginTop : "150px", marginRight :"500px"}} src = {mainImg}/>
</div>
        
    </>
  )

}

export default SitePractice;