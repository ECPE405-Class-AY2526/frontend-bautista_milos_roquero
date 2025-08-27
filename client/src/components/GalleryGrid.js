import React from 'react'

function GalleryGrid() {
  return (
    <div className="container">
      <div className="gallery-header">
        <h2 className="gallery-title">GALLERY</h2>
         <p className= "gallery-description">This is the gallery showcase</p>
      </div>

      <div className="gallery-grid" id="galleryGrid">
        <div className="gallery-item">
        <img src= "" alt=""/>
        <div class="gallery-overlay">
          <div class="overlay-title">Social Media</div>
          <div class="overlay-description">Instagram interface design</div>
           </div>
         </div>

         <div className="gallery-item">
        <img src= "" alt=""/>
        <div class="gallery-overlay">
          <div class="overlay-title">Social Media</div>
          <div class="overlay-description">Instagram interface design</div>
           </div>
         </div>

         <div className="gallery-item">
        <img src= "" alt=""/>
        <div class="gallery-overlay">
          <div class="overlay-title">Social Media</div>
          <div class="overlay-description">Instagram interface design</div>
           </div>
         </div>

         <div className="gallery-item">
        <img src= "" alt=""/>
        <div class="gallery-overlay">
          <div class="overlay-title">Social Media</div>
          <div class="overlay-description">Instagram interface design</div>
           </div>
         </div>
         
      </div>
    </div>
  )
}

export default GalleryGrid