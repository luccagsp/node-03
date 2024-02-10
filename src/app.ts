const heroes = [
    {
      id: 1,
      name: 'Ironman',
      owner: 'Marvel'
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    },
    {
      id: 3,
      name: 'Batman',
      owner: 'DC'
    },
]

const getHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id)
}

const heroe  = getHeroById(5)
console.log(heroe?.name)