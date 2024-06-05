// import React from 'react'
import { Carousel } from "flowbite-react";

export default function CarouselItem() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true}>
      <img  className="h-auto max-w-full rounded-lg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OZXYAaU3aTljoS3azd_XHPC1EXAHCRtovA&s" alt="..." />
      <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-76_TDh8oW0k1yjSCdLS2TlJeu1hryK4Y1A&s" alt="..." />
      <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbC4xQGDlJbXITDOjmOO2wvXVVXIXPzN7deA&s" alt="..." />
      <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEFLeJP0eZyAMWPEyRtGAUrVkiSwIrNBkjQ&s" alt="..." />
      <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5phEy5_EymVxhM0AIP0qBg8ycBbBMDZeWJQ&s" alt="..." />
    </Carousel>
  </div>
  )
}
