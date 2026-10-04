export interface Game {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

function randomPrice(): number {
  return Math.floor(Math.random() * 7501 + 499) / 100;
}

export const GAMES: Game[] = [
  {
    id: 'catch-and-calm',
    title: 'Catch & Calm',
    price: randomPrice(),
    imageUrl: '/games/0dee1d0c-eff4-4099-8aa8-425e8db7d479.jpeg',
  },
  {
    id: 'restoration-realm',
    title: 'Restoration Realm',
    price: randomPrice(),
    imageUrl: '/games/31f5cc55-1ed3-42cb-a785-1ce739878932.jpeg',
  },
  {
    id: 'ashes-of-the-hamlet',
    title: 'Ashes of the Hamlet',
    price: randomPrice(),
    imageUrl: '/games/44cadda3-bacc-4718-a039-eeb01419ddc3.jpeg',
  },
  {
    id: 'the-cut-and-craft',
    title: 'The Cut & Craft',
    price: randomPrice(),
    imageUrl: '/games/bbe3b18f-02fa-4088-bc48-886bf75dae63.jpeg',
  },
  {
    id: 'spark-of-tomorrow',
    title: 'Spark of Tomorrow',
    price: randomPrice(),
    imageUrl: '/games/bc4eed01-aace-4a4b-8bcd-447430e366c5.jpeg',
  },
  {
    id: 'beyond-the-celestial-rim',
    title: 'Beyond the Celestial Rim',
    price: randomPrice(),
    imageUrl: '/games/e5295160-3bfb-4974-9404-28fd48e9c70a.jpeg',
  },
  {
    id: 'abyssal-echoes',
    title: 'Abyssal Echoes',
    price: randomPrice(),
    imageUrl: '/games/a472007d-aadf-4e19-a6a4-e9992c87b21d.jpeg',
  },
  {
    id: 'timber-and-hearth',
    title: 'Timber & Hearth',
    price: randomPrice(),
    imageUrl: '/games/280bfc1b-118e-4a8c-bcb7-fb4806eb76c8.jpeg',
  },
  {
    id: 'xenoshock-frontier',
    title: 'Xenoshock: Frontier',
    price: randomPrice(),
    imageUrl: '/games/035a792e-a321-4705-8be9-ec4ca4e5354a.jpeg',
  },
];