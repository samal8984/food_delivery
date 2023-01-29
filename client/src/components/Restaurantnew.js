import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'


export const Restaurant = () => {
  const [state, setState]= useState(false);
  const changeHeight=()=>{
  const scrollvalue= document.documentElement.scrollTop;

  if(scrollvalue > 0){
    setState(true);
  }
  else{
    setState(false);
  }
    
  }
  useEffect(()=>{
    

  },[])


  window.addEventListener('scroll', changeHeight);
  return (
    <div  style={{position:'relative'}}>
        <Navbar />
        
        <div className='container-fluid'  style={  { border:'', position:'sticky',
         height:'100%',top:'-30px' }}>
            <div    className= {state ? 'resbodycompress': 'resbody'} >
                <div  >
                <img  className='resimage' src='/Logo/r3.png' />
                </div>

                <div className='resname' style={{}}>
                    <div  className='resdetails'>
                        <div className='details' >
                           <h1>kareems Biryani</h1>
                           <h2>Indian Mughlai</h2>
                           <h2>Location</h2>

                                                        
                        </div>
                        <div  className= {state ? 'deliverydetailsnew': 'delivery'} >
                          
                           <div className= 'deliverydetails' >
                              
                              <p>*</p>
                              <p>Ratings</p>
                           </div>
                           <div  className='deliverydetails'>
                            <p>time</p>
                            <p>Delivery time</p>

                              
                           </div>
                           <div className='deliverydetails' >
                            <p>$300</p>
                            <p>300 for two</p>

                           </div>
                           
                                                        
                        </div>
                        <div  >
                          <div className={ state ? 'deliverydetailsnew': 'offers'}>
                            <div style={{marginTop:'-12px', display:'flex',
                            width:'80px', marginLeft:'-5px',padding: '0px',
                            alignItems:'flex-start', backgroundColor:'black' }} >
                                <p style={{color:'white'}}>OFFERS</p>
                            </div>
                           

                          </div>
                                                        
                        </div>
                       
                     
                      

                    </div>

                </div>

            </div>
            </div>
            <div>
         
            
            
    <div className="row" style={{ display:'flex', width:'100%', border:'1px solid red', overflowY:'scroll',
    position: 'relative', top:'0px',height:'350px', flexWrap:'wrap'}}>
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Starters</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">Starters</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Chinese Meals</a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">Combos</a>
      <a className="list-group-item list-group-item-action" href="#list-item-5">Main Course</a>
      <a className="list-group-item list-group-item-action" href="#list-item-6">Tandoori & Kababs</a>
      <a className="list-group-item list-group-item-action" href="#list-item-7">Special Thalis</a>
      <a className="list-group-item list-group-item-action" href="#list-item-8">Best in Burger</a>
      <a className="list-group-item list-group-item-action" href="#list-item-9">Rice and Roti</a>
  
       
      
      
    </div>
  </div>
  <div className="col-8 " style={{border:'2px solid yellow',marginTop:'15px' }}>

    <div data-bs-spy="scroll" data-bs-target="#list-example" 
     style={{height:'auto',width:'100%',
      overflowY:'scroll', alignItems:'start',
    
     display:'flex', flexDirection:'column' }}
   
    data-bs-smooth-scroll="true" data-bs-offset="0" className="scrollspy-example" tabindex="0">
      <div className=  'itemslist' id='list-item-1'>
        <div className='itemsdetails' >
        <p  >Biryani</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>chichen Biryani [2 Pieces] </p>
        <p >$356</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paneer cutlets [2 Pieces] </p>
        <p >$36</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>

    
     
      

      </div>

      <div className='itemslist' id='list-item-2'>
        <div className='itemsdetails' >
        <p>Starters</p>
        <p >09 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paneer cutlets [2 Pieces] </p>
        <p >$36</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>chicken Drumsticks [2 Pieces] </p>
        <p >$65</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-3'>
        <div className='itemsdetails' >
        <p>Chinese Meals</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-4'>
        <div className='itemsdetails' >
        <p>Combos</p>
        <p >8 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-5'>
        <div className='itemsdetails' >
        <p>Main Course</p>
        <p >20 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-6'>
        <div className='itemsdetails' >
        <p>Tondoori & Kababs</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-7'>
        <div className='itemsdetails' >
        <p>Special Thalis</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-8'>
        <div className='itemsdetails' >
        <p>Best in Burgers</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      <div className='itemslist' id='list-item-9'>
        <div className='itemsdetails' >
        <p>Rice & Rotis</p>
        <p >15 Items</p>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Paratha Sabji [2 Pieces] </p>
        <p >$25</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
        <div className='itemsdetailsbutton'>
          <span>
            logo
          </span>
        <p>Chicken Balls [8 Pieces] </p>
        <p >$98</p>
        <div className='cartbutton'>
          <button>ADD</button>
        </div>
        </div>
    
     
      

      </div>
      
     </div>
  </div>
</div>

        </div>    

     
      
                    
          


                      
                      
                       

                       

    </div>
  )
}
