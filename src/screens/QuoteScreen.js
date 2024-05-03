import './QuoteScreen.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteCard from '../components/QuoteCard'

function QuoteScreen(){

    const quotes = [
        {quote:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.", quoteAuthor:"Adam Scott"},
        {quote:"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",quoteAuthor:"Adelle Davis"},
        {quote:"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",quoteAuthor:"Adelle Davis"},
        {quote:"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",quoteAuthor:"Albert Einstein"},
        {quote:"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",quoteAuthor:"Alice May Brock"},
        {quote:'Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.',quoteAuthor:"Anthelme Brillat-Savarin"},
        {quote:"Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",quoteAuthor:"Calvin Trillin"},
        {quote:"Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",quoteAuthor:"Calvin Trillin"},
        {quote:"Tell me what you eat, and I will tell you what you are.",quoteAuthor:"Cyra McFadden"},
        {quote:"Health food makes me sick.",quoteAuthor:"Eike von Repkow"},
        {quote:"The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",quoteAuthor:"Epictetus"},
        {quote:"I no longer prepare food or drink with more than one ingredient.",quoteAuthor:"Epictetus"},
        // {quote:"",quoteAuthor:""}
    ]

    return(
        <>
            
            {
                quotes.map((elem,index)=>{
                    return <QuoteCard key={index} authorName ={elem.quoteAuthor}>{elem.quote}</QuoteCard>
                })
            }
        </>
    );
};

export default QuoteScreen;