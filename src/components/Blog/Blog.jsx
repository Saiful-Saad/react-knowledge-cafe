import PropTypes from 'prop-types';

import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog,handleAddToBookMarks,handleMarkAsRead}) => {
   const {id,title, cover,author,author_img,reading_time,posted_date,hashtags,}= blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover pic of the title ${title}`} />
            <div className='flex justify-between mb-8'>
                <div className='ml-6 flex items-center gap-10'>
                <img className='w-16' src={author_img} alt="" />
                <div className=''>
                    <h2 className='text-2xl'>{author}</h2>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
            <span>{reading_time}min read</span>
            <button onClick={()=>handleAddToBookMarks(blog)} className='ml-3'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
           <h2 className="text-4xl mb-3">{title}</h2> 
           <p>
            {
                hashtags.map((hastag,idx) => <span key={idx}><a href="">#{hastag}</a></span>)

            }
           </p>
           <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-blue-600 font-bold underline'>Mark As Read</button>
          
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks :PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;