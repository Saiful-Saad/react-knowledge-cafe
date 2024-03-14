import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='text-2xl text-center bg-gray-300'>
            <div className='text-4xl'>
                <h3>Reading Time:{readingTime}</h3>
            </div>
           <h2>BookMarks Blogs:{bookmarks.length}</h2> 

           {
            bookmarks.map((bookmark,idx) => <Bookmark  bookmark={bookmark} key={idx}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;