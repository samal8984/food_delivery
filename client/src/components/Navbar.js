import React, { useState } from 'react'

export const Navbar = () => {
  const [active, setActive]= useState(false);

  const handleClick=(e)=>{
    setActive(current=> !current)

  }
 




  
  return (
    <div>
     <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="container-fluid">
  

    <a className="navbar-brand" href="#">
     <img src="/Logo/dianna.png" />
      
      
    </a>
   

  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav"  style={{marginRight:'50px'}}>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item" style={{paddingRight:'20px',paddingLeft:'20px'}} >
          <a className="nav-link" aria-current="page" href="#">


          </a>
        </li>
        <li className="nav-item" style={{paddingRight:'20px',paddingLeft:'20px'}}>
          <a className="nav-link" href="#">Search</a>
        </li>
        <li className="nav-item" style={{paddingRight:'20px',paddingLeft:'20px'}}>
          <a className="nav-link" href="#">Offers</a>
        </li>
        <li className="nav-item" style={{paddingRight:'20px',paddingLeft:'20px'}}>
          <a className="nav-link" href="#">Cart</a>
        </li>
        <button className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
         aria-controls="offcanvasRight">Login</button>
    
      </ul>
    </div>
  </div>
</nav>

<div className="offcanvas offcanvas-end w-auto" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body " style={{ 
    width:'500px', overflow:'hidden', margin:'10px'  }}>

  <div className='loginbody'>
    <div className='loginbox'>
      <div className='loginbox1'>
        <div>
          <h1 style={{fontSize:'30px', border:'', width: 'fit-content'  }}>
           {active? 'SignUp':'Login'} 
          </h1>
          <p style={{ width:'fit-content'}} >or <a 
          onClick={handleClick}
          style={{ textDecoration:'none', color:'orange'}}
           href='#'> {active? 'login to your account' : 'Create An Account'}</a> </p>
            <div style={{borderBottom:'2px solid black', width:'40px',marginTop:'10px'}}></div>


        </div>
       
        <div style={{ height:'100px', width:'60px', borderRadius: '50%'}}>
          <img src='/Logo/foodpic.jpg ' style={{  height:'100px', width:'100px',marginLeft:'60px', marginTop:'-10px'}}/>

         </div>
        

      </div>
   

    </div>
 
    <div className={active? 'loginfield1': 'loginfield2'}>
     <div>
      <div className='inputdata' style={active ? {} : 
      {border:'1px solid gray',height:'60px',padding:'10px', borderRadius:'3px',marginTop:'-80px' }} >
        <label className='lab' >Phone Number</label>
        <input  type='number'  className='inp' placeholder='Phone No' />

      </div>

     </div>
     <div style={active ? {}: {display:'none'}} >
     <div className='inputdata' >
        <label className='lab' >Name</label>
        <input  onFocus='' type='number' className='inp' placeholder='Name' />

      </div>

</div>
<div style={active ? {}: {display:'none'}} >
     <div className='inputdata' >
        <label className='lab' >Email</label>
        <input  type='number' className='inp' placeholder='Email' />

      </div>

</div>



    </div>
    
    <div className='loginbutton'  style={active? {}: {marginTop:'-30px'}}>
      
     <button className='btn btn-primary' style={{width:'300px', height:'40px',marginTop:'30px'}}>
      {active? 'CONTINUE': 'LOGIN'}</button>
     <h4 style={{fontSize:'13px'}} >By {active? 'creating an account': 'Login'}, I accept the terms and conditions and privacy policy</h4>


    

    </div>

       
  </div>
  </div>
</div>

    </div>
  )
}
