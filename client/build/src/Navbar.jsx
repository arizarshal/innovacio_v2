import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";





function Navbar(){

const [showMediaIcons, setShowMediaIcons] = useState(false);

    return(
        <>
<div className = 'navb'> 
<nav className="navbar0">
<NavLink to="/"><div className="brand-img"> </div></NavLink>
<NavLink to= "/"><div className="brand-name">INNOVACIO <span className='blk'>BLOCKCHAIN</span></div></NavLink>
        

        <div className={
                      showMediaIcons ? "mobile-menu-link" : "navbar"
        }>

<div className="dropdown">
    <button className="dropbtn">COIN DEVELOPMENT
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/coin">Coin/Token Development</NavLink>
      <NavLink to="/ico">ICO Development</NavLink>
      <NavLink to = "/stable">Stable Coin Development</NavLink>
      <NavLink to="/sec_token">Security Token Development</NavLink>
      <NavLink to="/asset_token">Asset Tokenization</NavLink>

    </div>
  </div>

<div className="dropdown">
  <NavLink to="/wallet"><button>CRYPTO WALLET</button></NavLink>
</div>

  <div className="dropdown">
    <button className="dropbtn">CRYPTO EXCHANGE
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <NavLink to ="/hybrid">Hybrid Cryptocurrency Exchange Development</NavLink>
      <NavLink to ="/marginex">Margin Trading Exchange</NavLink>
      <NavLink to="p2p">P2P Exchange Platform</NavLink>
      <NavLink to="/sec_ex">Security Exchange Development</NavLink>
      <NavLink to="/dex">Decentralized Exchange Development</NavLink>
    </div>
  </div>


  <div className="dropdown">
    <button className="dropbtn">DEFI
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/defi">DEFI Solutions</NavLink>
      <NavLink to="/Staking">DEFI Staking Platform</NavLink>

    </div>
  </div>


  <div className="dropdown">
  <NavLink to = "/nft-dev"><button>NFT</button></NavLink>
</div>



  <div className="dropdown">
<NavLink to="/nftGames"><button>CRYPTO GAMING</button></NavLink>
    </div>    

  
    <div className="dropdown">
  <NavLink to = "/blockchain"><button>BLOCKCHAIN</button></NavLink>
</div>


  <div className="dropdown">
  <NavLink to = "/blog"><button>BLOG</button></NavLink>
</div>

<div className="dropdown">
  <NavLink to = "/about"><button>INNOVACIO</button></NavLink>
</div>

</div>
        <div className='reach'>
        <a href="https://wa.me/9007271601" target ="_sultan"><button>REACH US</button></a>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>

    </nav>
</div>


        </>

    )
}

export default Navbar;