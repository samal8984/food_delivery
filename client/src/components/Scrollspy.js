import React from 'react'

export const Scrollspy = () => {
  return (
  
    <div className="row m-5 border 3  ">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div className="col-8 ">
    <div data-bs-spy="scroll" data-bs-target="#list-example" 
     style={{height:'280px',width:'600px',position:'relative',
     paddingTop:'80px', border:'1px solid red', overflowY:'scroll',alignItems:'start',
     display:'flex', flexDirection:'column' }}
   
    data-bs-smooth-scroll="true" data-bs-offset="0" className="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
      This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
      This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
      </p>
      <h4 id="list-item-4">Item 4</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    </div>
  </div>
</div>
  )
}
