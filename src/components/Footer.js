import React from 'react'

const Footer = () => {
  return (
        // <section className="footer" id="contact">
        <>
		<footer className="contents">
			<h3>You can approach me by</h3>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3">
						<div className="footer-div">
							<p>Follow me on</p>
							<ul className="footer-list">
							  <li className="icons"><i className="fa-brands fa-github"></i><a href="https://github.com/Syed-Javith"> github</a></li>	
					
							<li className="icons"><i className="fa-brands fa-instagram"></i><a href="https://instagram.com/syed_javith_03?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"> instagram</a></li>
					
							<li className="icons"><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/syed-javith-r-93500a249"> Linkedin</a></li>
					
							<li className="icons"><i className="fa-brands fa-twitter"></i><a href="https://twitter.com/javith_sye22842/"> twitter</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="footer-div">
							<p>Contact me </p>
							<i className="fa-solid fa-phone"></i><a href="tel:6380411427"> +91 6380411427</a><br/>
							
							<i className="fa-solid fa-envelope"></i><a href="mailto:syedjavith14@gmail.com"> syedjavith14@gmail.com</a><br/>
							
							
							<i className="fa-solid fa-map-location-dot" style={{color: "#ffffff"}}></i>
							<a href="https://www.google.com/maps/search/?api=1&query=11.7441,78.9632">Kallakurichi</a><br/>

							<i className="fa-brands fa-whatsapp" style={{color: "#ffffff"}}></i><a href="https://wa.me/6380411427"> Whatsapp</a>
							
						</div>
					</div>
					<div className="col-lg-3">
						<div className="footer-div">
							<p>Tools that Helped </p>
							<i className="fa-solid fa-font-awesome" style={{color: "#ffffff"}}></i><a href=""> Font Awesome</a><br/>

							<i className="fa-brands fa-bootstrap" style={{color: "#ffffff"}}></i><a href=""> Bootstrap</a><br/>

							<i className="fa-solid fa-palette" style={{color: "#ffffff"}}></i><a href=""> Color Pallate</a><br/>

							<i className="fa-brands fa-google" style={{color: "#fafafa"}}></i><a href=""> Google</a>
						</div>
					</div>
				</div>
			</div>
            <p style={{textAlign: "center"}}>© 2023 Syed Javith</p>
		</footer>
		
        </>
	// </section>

  )
}

export default Footer
