import React from 'react'
import "./Dashboard.css"
import NavbarDB from "../components/NavbarDB";
function Dashboard() {
  return (
    <>
    <NavbarDB/>
      <div className="container">
           <div className="dashboard-section">
               <div className="content-container">
                <h2 className="title-dashboard">DASHBOARD</h2>
                 <h2 className="section-title">ABOUT THE PROJECT</h2>
                 <p className="description">This innovative agricultural technology project addresses critical challenges in post-harvest rice processing by 
                   developing an intelligent drying system that combines traditional grain preservation methods with modern 
                   Internet of Things (IoT) capabilities. The system aims to revolutionize how Filipino farmers manage rice 
                   drying operations, particularly during adverse weather conditions.</p>
                 <p className="description">This project aims to deliver a comprehensive solution that enhances rice grain quality, reduces post-harvest losses, 
                   and provides farmers with reliable drying capabilities independent of weather conditions. The system will contribute 
                   to improved food security and economic stability for Philippine rice farming communities while demonstrating the 
                   practical applications of IoT technology in agriculture.</p>
               </div>
           </div>
         </div>
         </>
  )
}

export default Dashboard