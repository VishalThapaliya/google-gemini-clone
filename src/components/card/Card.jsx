import './Card.css'

const Card = ({ cards }) => {
  return (
    <>
        <div className="cards">
            { cards.map((card) => (
                <div className="card" key={card.id}>
                    <p className='card-text'>{card.text}</p>
                    <img src={card.icon} className='card-icon' alt="icon" />
                </div>
            ))
            }
        </div>
    </>
  )
}

export default Card