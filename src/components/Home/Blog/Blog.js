import React from 'react';

import LK from '../../../images/LK.png';
import BlogPost from '../BlogPost/BlogPost';

 const blogData = [
     {
         img : LK ,
         name:'Dr.LK',
         data: '12 May 2021',
         title: 'Check at least a doctor in a year for your teeth',
    details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam quaerat cumque corporis quasi obcaecati.',

     },
     {
        img : LK ,
        name:'Dr.LK',
        data: '12 May 2021',
        title: 'Check at least a doctor in a year for your teeth',
   details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam quaerat cumque corporis quasi obcaecati.',

    },
    {
        img : LK ,
        name:'Dr.LK',
        data: '12 May 2021',
        title: 'Check at least a doctor in a year for your teeth',
   details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam quaerat cumque corporis quasi obcaecati.',

    },
 ]




const Blog = () => {
    return (
        <div>
            <h3 className="text-primary">  OUR BlOG </h3>
     <h2>From Our Blog News </h2>
        <div className="d-flex justify-content-around">
{
    blogData.map(data => <BlogPost data={data}></BlogPost>)
}


        </div>

        </div>
    );
};

export default Blog;