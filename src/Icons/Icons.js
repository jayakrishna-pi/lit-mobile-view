import './Icons.css';
const Icons=()=>{
    return(
     <div>
            <div>
            <img src="/like.png" className='like'/>
            <img src="/comment.png" className='like'/>
            <img src="/forward.png" className='forward'/>
            {/* <img src="/dots.png" className='dots'/> */}
            <img src="/save.png" className='save'/>
            </div>
        <div className='text-icons'>
           <p id="rebal-text">Rebal.taco</p> 
           <p id="new-collection">New collection  in making!!!</p>
        </div>
        <div>
        <p className='comments'>View all  10 comments</p>
        <p className='new-comment'>Add a new comment...</p>
        </div>
    </div>
    )
}
export default Icons;