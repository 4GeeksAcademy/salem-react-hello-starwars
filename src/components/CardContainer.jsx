import Cards from './Cards'

function CardContainer() {










   const characters = [
    { id: 1, name: "Luke Skywalker", gender: "Male", hair: "Blond", eyes: "Blue" },
    { id: 2, name: "Leia Organa", gender: "Female", hair: "Brown", eyes: "Brown" },
    { id: 3, name: "Han Solo", gender: "Male", hair: "Brown", eyes: "Brown" },
    { id: 4, name: "Darth Vader", gender: "Male", hair: "None", eyes: "Yellow" }
  ];

  const categories = ["Characters", "Planets"]; 

  return (
    <div className="container">
      {categories.map(categorie => (
        <>
          <h1 className='text-start p-2'>{categorie}</h1>
          <div className="d-flex flex-wrap justify-content-start gap-3">
            {characters.map(character => (
              <Cards key={character.id} character={character} />
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default CardContainer
