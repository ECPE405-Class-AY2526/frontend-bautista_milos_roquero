import React from 'react'

function GalleryGrid() {
  return (<>
    <div class="gallery-container">
        <div class="gallery-header">
            <h1>Image Gallery</h1>
            <p>Explore our curated collection of stunning visuals and moments captured in time</p>
        </div>
        <div class="gallery-grid" id="galleryGrid">
        </div>

        <div class="load-more">
            <button class="load-more-btn" id="loadMoreBtn">Load More</button>
        </div>
    </div>

    <div class="lightbox" id="lightbox">
        <div class="lightbox-content">
            <button class="lightbox-close" id="lightboxClose">
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <button class="lightbox-nav lightbox-prev" id="lightboxPrev">
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <button class="lightbox-nav lightbox-next" id="lightboxNext">
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <img class="lightbox-image" id="lightboxImage" src="" alt=""/>
            <div class="lightbox-info" id="lightboxInfo">
                <h3 id="lightboxTitle"></h3>
                <p id="lightboxDescription"></p>
            </div>
        </div>
    </div>
   </>
  )
}

export default GalleryGrid