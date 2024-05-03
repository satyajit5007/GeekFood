import './QuoteCard.css'

function QuoteCard(props){
    return(
        <div className='quote-card-container'>
            <div className='quote-card'>
                <p className='quote'>{props.children}</p>
                <p className='quote-author'>{props.authorName}</p>
            </div>
        </div>
    )
}

export default QuoteCard;