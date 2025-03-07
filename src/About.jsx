import AosAnimation from "./AosAnimtation";
import "./Header.css";
function About() {
  return (
    <div className="bg-success-subtle d-flex flex-column min-vh-100">
      <div className="row g-0 mt-5">
          <div className="col-md-4">
            <h5 data-aos="fade-up" className="m-5 lh-base border border-dark p-3 campgyup">"Campgyup" is a fun fusion of two things that people love: camping and samgyupsal a 
                Korean BBQ experience. It offers an exciting way to enjoy grilling meat in the great outdoors, 
                combining the thrill of camping with the deliciousness of unlimited grilled meats like beef, pork,chicken and more.
                The idea behind "Campgyup" is to bring friends and family together in a relaxing outdoor environment where you can enjoy tasty, 
                tender grilled meat while bonding over stories, laughter, and a good time. It's an experience where the joy of nature meets the joy of food.
                <AosAnimation />
            </h5>
          </div>
          <div data-aos="fade-up" className="col-md-2 d-flex align-items-end  g-2">
            <img className="img-fluid" src="/images/dailyopen.jpg" />
            <AosAnimation />
          </div>

          <div data-aos="fade-up" className="col-md-2 d-flex align-items-end  g-2">
            <img className="img-fluid" src="/images/loctwo.jpg" />
            <AosAnimation />
          </div>

          <div data-aos="fade-up" className="col-md-2 d-flex align-items-end  g-2">
            <img className="img-fluid" src="/images/locthree.jpg" />
            <AosAnimation />
          </div>

          <div className="row g-0 mb-5 mt-1">
            <div data-aos="fade-up" className="col-md-2 offset-md-2 g-2">
                <img className="img-fluid" src="/images/locone.jpg" />
                <AosAnimation />
            </div>

            <div data-aos="fade-up" className="col-md-2 offset-md-0 g-2">
              <img className="img-fluid" src="/images/locfour.jpg" />
              <AosAnimation />
            </div>

            <div data-aos="fade-up" className="col-md-2 offset-md-0 g-2">
              <img className="img-fluid" src="/images/locfive.jpg" />
              <AosAnimation />
            </div>
            <div data-aos="fade-up" className="col-md-2 offset-md-0 g-2">
              <img className="img-fluid" src="/images/locsix.jpg" />
              <AosAnimation />
            </div>
             
          </div>
      </div>

      <div data-aos="fade-up" className="text-center p-3 bg-dark text-white fw-bold fs-4 mb-3">L O C A T I O N
      <AosAnimation />
      </div>
      <div className="row g-0 mb-3">
        <div data-aos="fade-up" className="col-md-6">
          <h5 className="m-5 lh-base text-center pt-5 location">Here's the translation of the landmark instruction for non-Waze users:
              Upon reaching the corner of Kubo sa Halamanan, go straight ahead to the 
              end, then turn right. You'll see it there and for Non waze or google map use this map.
              This is also the <a className="link-underline link-underline-opacity-0" href="https://www.waze.com/live-map/directions?to=ll.13.971584%2C121.163342">Waze link</a> and 
              <a className="link-underline link-underline-opacity-0" href="https://maps.app.goo.gl/vCzdeaYpRSooXk9V6?g_st=ic"> Google map link</a></h5>
              <h1 className="text-center">🚘🚶‍➡️</h1>
              <AosAnimation />
        </div>

        <div data-aos="fade-up" className="col-md-6">
          <img className="img-fluid" src="/images/location.jpg" />
        </div>
        <AosAnimation />
      </div>

    </div>
  )
}

export default About