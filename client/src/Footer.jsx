import React from 'react'

const Footer = () => {
    return (
        <>
             {/* Footer starts here  */}


<footer>
    <div className="main-content">

        <div className="center box">
            <h2>Address</h2>
            <div className="content">
                <div className="place">
                    <span className="fas fa-map-marker-alt"></span>
                    <span className="text">Address-36, Beck Bagan Row, Kolkata-700017</span>
                </div>
                <div className="phone">
                    <span className="fas fa-phone-alt"></span>
                    <span className="text">Phone- +91 8017793202 </span>
                </div>
                <div className="place">
                    <span className="fas fa-envelope"></span>
                    <span className="text">hello@innovaciotech.com</span>
                </div>
            </div>
        </div>


        <div className="social">
                    <a href="https://www.facebook.com/innovaciotech" target="_blank"><span
                            className="fab fa-facebook-f"></span></a>
                    <a href="https://www.linkedin.com/company/innovacio-technology/mycompany/?viewAsMember=true" target="_blank"><span
                            className="fab fa-linkedin"></span></a>
                     <a href="https://twitter.com/InnovacioTech" target="_blank"><span
                            className="fab fa-twitter"></span></a>


                </div>


    </div>


    <div className="bottom">
        <center>
            <span className="credit">Created By <a href="https://web.telegram.org/">Innovacio Technology </a>|</span>
            <span className="far fa-copyright"><span>2020 All rights reserved.</span></span>
        </center>
    </div>
</footer>

        </>
    )
}

export default Footer
