import React, { useState } from 'react'
import { Navbar } from './Navbar'

export const Cart = () => {

    const [active, setActive]= useState(false);

    const handleClick=(e)=>{
      setActive(current=> !current)
  
    }
  return (
    <div>
        <div style={{position:'sticky' ,top:'0px' }} >
        <Navbar/>


        </div>
     <div className='container d-flex'  >
        <div className='cartbody1 flex-1' >
            <div className='cartdetails'>
                <div>
                    <h5>Accounts</h5>
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
      {border:'1px solid gray',height:'60px',padding:'10px', borderRadius:'3px',marginTop:'10px',
      width:'400px',
      marginLeft:'80px' }} >
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
      
     <button className='btn btn-primary' style={{width:'300px', height:'40px',marginTop:'50px'}}>
      {active? 'CONTINUE': 'LOGIN'}</button>
     <h4 style={{fontSize:'13px'}} >By {active? 'creating an account': 'Login'}, I accept the terms and conditions and privacy policy</h4>


    

    </div>

       
  </div>

                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'start',
              justifyContent:'start'}} >
                  <h5>Delivery Details</h5>
                  <div className='deliverycontainer' >
                    <div className='addressbox' style={{display:'flex', flexDirection:'column', alignItems:'flex-start',
                  justifyContent:'start',paddingBottom:'10px'
                   }} >
                        <div style={{marginLeft:'10px', width:'80%',display:'flex', 
                      paddingBottom:'20px' }} >
                        <p style={{fontSize:'13px', 
                        width:'400px',marginTop:'20px',height:'80px',marginLeft:'-8px'
                           
                            }} >11 at chaterjee road
                        dhakuria kolkata, tarulai fafdas</p>
                      </div>
                      <div style={{marginLeft:'10px'}} >
                        <h6>69 Min</h6>
                      </div>
                      <button style={{marginLeft:'10px'}} className='btn btn-success'>Deliver Here</button>
                    </div>
                    <div className='addressbox' style={{display:'flex', flexDirection:'column', alignItems:'flex-start',
                  justifyContent:'start',paddingBottom:'10px' ,height:'fit-content',
                  border:'1px dotted gray'
                   }} >
                        <div style={{marginLeft:'10px', width:'80%',display:'flex', 
                      paddingBottom:'50px' }} >
                        <p style={{fontSize:'13px', 
                        width:'400px',marginTop:'20px',height:'80px',marginLeft:'-8px'
                           
                            }} >Add your Address
                        </p>
                      </div>
                     
                      <button style={{marginLeft:'10px'}} className='btn btn-success'>Add New</button>
                    </div>
                    <div></div>
                    <div></div>
              




                    

                    

                  </div>

                

                    
                    </div>
                    <div>
                    <h5>Payment</h5>

                    
                    </div>
                    

            </div>

        </div>
        <div className='cartbody2 flex-1' >
          <div className='checkout'>
            <div style={{display:'flex',width:'60%',height:'80px',
            justifyContent:'left',flexDirection:'row',top:'0px',
            borderBottom:'1px solid red',
            
          alignItems:'flex-start'}} >
            <img src='./logo/fi2.png' alt='' style={{height:'50px', width:'60px',flex:'1'}}  />
            <div style={{flex:'1'}}>
            <h5 style={{fontSize:'15px'}} >Restaurant name</h5>
            <h5 style={{fontSize:'15px'}}  >location</h5>

            </div>
          
          </div>
          <div className='billdetails'>
            <div style={{display:'flex', justifyContent:'space-between',marginTop:'10px',margin:'10px' }}>
            
              <h5 style={{fontSize:'15px'}} >item name</h5>
              <div>
              <div className="d-flex" style={{height:'30px'}} >
            <span className="btn btn-danger minus">-</span>
              <input type="number" className="" style={{width:'30px'}} readOnly />

              <span className="btn btn-primary plus" >+</span>
              </div>
              </div>
              <div>
                <h6>$69</h6>
              </div>
              

            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            
            <h5 style={{fontSize:'15px'}} >item name</h5>
            <div>
            <div className="d-flex" style={{height:'30px'}} >
          <span className="btn btn-danger minus">-</span>
            <input type="number" className="" style={{width:'30px'}} readOnly />

            <span className="btn btn-primary plus" >+</span>
            </div>
            </div>
            <div>
              <h6>$69</h6>
            </div>
            

          </div>
          <div style={{display:'flex' ,flexDirection:'column', borderBottom:'1px solid gray' }} >
              <div style={{flex:'1',marginRight:'auto' }}>
              <h6 style={{margin:'3px'}} >Bill details</h6>
              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',justifyContent:'space-between',margin:'3px'}}>
                <h6 style={{fontSize:'13px'}} >Items price</h6>
              <h6 style={{fontSize:'13px'}} >$251</h6>

                </div>
              

              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',justifyContent:'space-between', margin:'3px'}} >
                <h6 style={{fontSize:'13px'}} >delivery fee</h6>
              <h6 style={{fontSize:'13px'}} >Free</h6>

                </div>

             

              </div>



              
              
            


            </div>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid gray'}}>
              <h6 style={{fontSize:'13px'}} >Discount</h6>
              <h6 style={{fontSize:'13px'}} >$25</h6>



            </div>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom:'2px solid black'}}>
              <h6 style={{fontSize:'13px'}} >Taxes and Charges</h6>
              <h6 style={{fontSize:'13px'}} >$25</h6>



            </div>
         
            
          
            

          </div>
          <div style={{display:'flex', justifyContent:'space-between',
          marginTop:'20px', width:'300px', margin:'10px',bottom:'0px'}} >
              <h5 style={{fontSize:'15px'}} >PAY</h5>
              <h5 style={{fontSize:'15px'}} >$356</h5>


            </div>

          </div>

       </div>

     </div>

    </div>
  )
}
