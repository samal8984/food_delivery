import React, { useState } from 'react'
import { Navbar } from './Navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Home = () => {
  const links = ['Search', 'Delivery Time', 'Cost: Low to High','Cost: High to low','Filters'];
const [active, setActive] = useState(null);
  
 return (

   <div>


   
    <div style={{position:'sticky', top:'0px'}}>
        <Navbar/>
        </div>
         <div >
        <div className='container-fluid' style={{position: 'sticky', top:'100px',backgroundColor:'white'}} >
        <nav className="navbar navbar-expand-lg "style={{}}  >
  <div className="container-fluid">
    <h3>Restaurants</h3> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav"  >
      <ul className="navbar-nav"  style={{marginLeft: 'auto',
      paddingLeft:'30px', paddingRight:'30px', marginRight:'10px'}}>
         {links.map((link) => (
    <li className="nav-item" style={{ paddingLeft:'20px', paddingRight:'20px'}}>
      <a 
        href={`#${link}`} 
        className={`nav-link ${active == link && 'active'}`}
        onClick={() => setActive(link)}
      >{link}</a>
    </li>
  ))}
        
        <ul>
 
</ul>
       
      </ul>
    </div>
  </div>
</nav>

        </div>

        <div className='rescontainer'   >
          <div  className='restaurantcover' >
            <div className='resbox' >
              <div style={{flex:'3',marginBottom:'10px'}}>
                <img src='./logo/fi2.png' alt='' style={{width:'100%', height:'100%'}} />

              </div>
              <div style={{flex: '1', marginBottom:'10px',height:'fit-content'}}>
                <div  style={{display: 'flex',alignItems:'flex-start',flexDirection:'column'}}>
                <h6 style={{fontSize:'15px'}} >Restaurant name</h6>
                <p style={{fontSize:'10px'}} >indian, chinese,</p>

                </div>
                

              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex', justifyContent:'space-between',paddingBottom:'10px',
                 borderBottom:'1px solid  rgb(219, 205, 205)'
                }}>
                  <span style={{fontSize:'13px',backgroundColor:'#6bc260',width:'50px'}} >4.3</span>
                  <span style={{fontSize:'13px'}}>45 min</span>
                  <span  style={{fontSize:'13px'}}>500 for two</span>
                </div>

              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex', justifyContent:'space-between',paddingBottom:'10px',
                 borderBottom:'1px solid  rgb(219, 205, 205)'}}>
                   <span  style={{fontSize:'13px'}}>50% Off Use TRYNEW</span>


                </div>

              </div>
            </div>
          </div>
          <div></div>

          <div></div>

          <div></div>

         



        </div>
        </div>
  </div>
   
  )
}
