interface Offer {
  id: number | string;
  imageUrl: string;
}

interface Brand {
  id: number | string;
  name: string;
  tagline: string;
  category: string;
  iconImageUrl: string;
  imageUrl: string;
  mobileImageUrl: string;
  link: string;
}

interface FreeDish {
  id: number | string;
  image: string;
  alt: string;
  text: string;
}

interface Cuisine {
  id: number | string;
  title: string;
  image: string;
}

interface Collection {
  id: number | string;
  title: string;
  image: string;
}

interface Combo {
  id: number | string;
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
}
