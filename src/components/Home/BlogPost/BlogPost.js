import React from 'react';

const BlogPost = ({data}) => {
    return (
        <div className="  mt-5 m-10 col-md-3 justify-content-around shadow-none p-3 mb-5 bg-light rounded">
           
            <div className="   d-flex  justify-content-center ">
             <img  style={{height:'50px'}} className=" rounded-start" src={data.img} alt="" />
        
           <div>
      
          <h4 class="text-info  ">{ data.name}</h4>
           <p className=" ">{data.data}</p>
           
           </div>
       
          
          
            </div>
            <div className="mt-3">
                <h4>{data.title}</h4>
                <p>{data.details}</p>
            </div>
        </div>
    );
};

export default BlogPost;