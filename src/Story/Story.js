import './Story.css';
const Story=()=>{
    return(
        <div className='story-container'>
            <div className='abc'>
            <img src="/full-shot-woman-taking-photo.jpg" className="story"/>
            {/* <p className='plus'>+</p> */}
            <p className='story-text'>Yor story</p>
            </div>
            <div>
            <img src="young-woman-business-suit-wearing-hat.jpg" className="story"/>
            <p className='story-text'>Jannifar.wannabe</p>
            </div>
            <div>
            <img src="/portrait-handsome-stylish-hipster-lambersexual-model.jpg" className="story"/>
            <p className='story-text'>global-clog</p>
            </div>
            <div>
            <img src="/portrait-beautiful-blonde-woman-with-closed-eyes.jpg" className="story"/>
            <p className='story-text'>dreamdroller</p>
            </div>
            


        </div>
    )
}
export default Story;