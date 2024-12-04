import banner1 from './images/banner1.jpg'
import banner2 from './images/banner2.jpg'
import banner3 from './images/banner3.jpg'
import banner4 from './images/banner4.jpg'


const Banner = () => {
  return (
    <div id="slideChangeImages">
    <figure>
      <img src={banner1} alt="Banner 1" />
      <img src={banner2} alt="Banner 2" />
      <img src={banner3} alt="Banner 3" />
      <img src={banner4} alt="Banner 4" />
    </figure>
  </div>
  )
}

export default Banner
