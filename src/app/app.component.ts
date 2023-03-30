import { Component } from '@angular/core';

type producto = {
  product: string;
  image: string;
  price: number;
  fav: boolean;
  currency: string;
  rating: number;
  description: string;
  similarProducts?: producto[];
  reviews?: review[];
};

type review = {
  image: string;
  name: string;
  rating: number;
  opinion: string;
  date: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: producto[] = [
    {
      image:
        'https://pics.filmaffinity.com/a_man_called_otto-750379114-mmed.jpg',
      product: 'A Man Called Otto',
      price: 1000,
      fav: false,
      currency: '€',
      rating: 2.7,
      description:
        'Otto Anderson (Tom Hanks) es un viudo cascarrabias y muy obstinado. Cuando una alegre joven familia se muda a la casa de al lado, Otto encuentra la horma de su zapato en la espabilada, y muy embarazada, Marisol, con la que entablará una muy improbable amistad que pondrá su mundo patas arriba... Remake de la película sueca A Man Called Ove de 2015.',
      similarProducts: [
        {
          image: 'https://pics.filmaffinity.com/babylon-747027954-mmed.jpg',
          product: 'Babylon',
          price: 4000,
          fav: false,
          currency: '€',
          rating: 3.4,
          description:
            'Ambientada en Los Ángeles durante los años 20, cuenta una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.',
        },
        {
          image:
            'https://pics.filmaffinity.com/everything_everywhere_all_at_once-245462960-mmed.jpg',
          product: 'Everything Everywhere All at Once',
          price: 2500,
          fav: false,
          currency: '€',
          rating: 4.8,
          description:
            'Cuando una ruptura interdimensional altera la realidad, Evelyn (Michelle Yeoh), una inmigrante china en Estados Unidos, se ve envuelta en una aventura salvaje en la que solo ella puede salvar el mundo. Perdida en los mundos infinitos del multiverso, esta heroína inesperada debe canalizar sus nuevos poderes para luchar contra los extraños y desconcertantes peligros del multiverso mientras el destino del mundo pende de un hilo',
        },
        {
          image: 'https://pics.filmaffinity.com/the_menu-905441147-mmed.jpg',
          product: 'The Menu',
          price: 2000,
          fav: false,
          currency: '€',
          rating: 3.5,
          description:
            'Una joven pareja viaja a uno de los destinos más exclusivos del mundo para cenar en un restaurante que ofrece una experiencia culinaria única. Sin embargo, el chef (Fiennes) ha preparado un ingrediente secreto que tendrá un resultado sorprendente en los dos enamorados.',
        },
      ],
      reviews: [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pepe_2018.jpg/320px-Pepe_2018.jpg',
          name: 'Pepe',
          rating: 5,
          opinion: 'Me ha gustado',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XhoZ6BdgHuwHjx_YqUiDwS9MQbJo-CGSvg&usqp=CAU',
          name: 'Marge Simpson',
          rating: 4,
          opinion: 'No me ha gustado',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      image: 'https://pics.filmaffinity.com/babylon-747027954-mmed.jpg',
      product: 'Babylon',
      price: 4000,
      fav: false,
      currency: '€',
      rating: 3.4,
      description:
        'Ambientada en Los Ángeles durante los años 20, cuenta una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.',
      similarProducts: [
        {
          image:
            'https://pics.filmaffinity.com/a_man_called_otto-750379114-mmed.jpg',
          product: 'A Man Called Otto',
          price: 1000,
          fav: false,
          currency: '€',
          rating: 2.7,
          description:
            'Otto Anderson (Tom Hanks) es un viudo cascarrabias y muy obstinado. Cuando una alegre joven familia se muda a la casa de al lado, Otto encuentra la horma de su zapato en la espabilada, y muy embarazada, Marisol, con la que entablará una muy improbable amistad que pondrá su mundo patas arriba... Remake de la película sueca A Man Called Ove de 2015.',
        },
        {
          image:
            'https://pics.filmaffinity.com/everything_everywhere_all_at_once-245462960-mmed.jpg',
          product: 'Everything Everywhere All at Once',
          price: 2500,
          fav: false,
          currency: '€',
          rating: 4.8,
          description:
            'Cuando una ruptura interdimensional altera la realidad, Evelyn (Michelle Yeoh), una inmigrante china en Estados Unidos, se ve envuelta en una aventura salvaje en la que solo ella puede salvar el mundo. Perdida en los mundos infinitos del multiverso, esta heroína inesperada debe canalizar sus nuevos poderes para luchar contra los extraños y desconcertantes peligros del multiverso mientras el destino del mundo pende de un hilo',
        },
        {
          image: 'https://pics.filmaffinity.com/the_menu-905441147-mmed.jpg',
          product: 'The Menu',
          price: 2000,
          fav: false,
          currency: '€',
          rating: 3.5,
          description:
            'Una joven pareja viaja a uno de los destinos más exclusivos del mundo para cenar en un restaurante que ofrece una experiencia culinaria única. Sin embargo, el chef (Fiennes) ha preparado un ingrediente secreto que tendrá un resultado sorprendente en los dos enamorados.',
        },
      ],
      reviews: [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/d/d7/Mariano_Rajoy_in_2018.jpg',
          name: 'Rajoy',
          rating: 5,
          opinion: 'Somos sentimientos y tenemos seres humanos',
          date: 'Hace 1 mes, 2023',
        },
        {
          image:
            'https://www.realmadrid.com/img/vertical_380px/cristiano_550x650_20180917025046.jpg',
          name: 'CR7',
          rating: 4,
          opinion: 'Suuuuuuuuuuuu',
          date: 'Hace 2 semanas, 2023',
        },
      ],
    },
    {
      image:
        'https://pics.filmaffinity.com/everything_everywhere_all_at_once-245462960-mmed.jpg',
      product: 'Everything Everywhere All at Once',
      price: 2500,
      fav: false,
      currency: '€',
      rating: 4.8,
      description:
        'Cuando una ruptura interdimensional altera la realidad, Evelyn (Michelle Yeoh), una inmigrante china en Estados Unidos, se ve envuelta en una aventura salvaje en la que solo ella puede salvar el mundo. Perdida en los mundos infinitos del multiverso, esta heroína inesperada debe canalizar sus nuevos poderes para luchar contra los extraños y desconcertantes peligros del multiverso mientras el destino del mundo pende de un hilo',
      similarProducts: [
        {
          image:
            'https://pics.filmaffinity.com/a_man_called_otto-750379114-mmed.jpg',
          product: 'A Man Called Otto',
          price: 1000,
          fav: false,
          currency: '€',
          rating: 2.7,
          description:
            'Otto Anderson (Tom Hanks) es un viudo cascarrabias y muy obstinado. Cuando una alegre joven familia se muda a la casa de al lado, Otto encuentra la horma de su zapato en la espabilada, y muy embarazada, Marisol, con la que entablará una muy improbable amistad que pondrá su mundo patas arriba... Remake de la película sueca A Man Called Ove de 2015.',
        },
        {
          image: 'https://pics.filmaffinity.com/babylon-747027954-mmed.jpg',
          product: 'Babylon',
          price: 4000,
          fav: false,
          currency: '€',
          rating: 3.4,
          description:
            'Ambientada en Los Ángeles durante los años 20, cuenta una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.',
        },
      ],
      reviews: [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pepe_2018.jpg/320px-Pepe_2018.jpg',
          name: 'Pepe',
          rating: 5,
          opinion: 'Me ha gustado',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XhoZ6BdgHuwHjx_YqUiDwS9MQbJo-CGSvg&usqp=CAU',
          name: 'Marge Simpson',
          rating: 4,
          opinion: 'No me ha gustado',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      image: 'https://pics.filmaffinity.com/the_menu-905441147-mmed.jpg',
      product: 'The Menu',
      price: 2000,
      fav: false,
      currency: '€',
      rating: 3.5,
      description:
        'Una joven pareja viaja a uno de los destinos más exclusivos del mundo para cenar en un restaurante que ofrece una experiencia culinaria única. Sin embargo, el chef (Fiennes) ha preparado un ingrediente secreto que tendrá un resultado sorprendente en los dos enamorados.',
      similarProducts: [
        {
          image: 'https://pics.filmaffinity.com/babylon-747027954-mmed.jpg',
          product: 'Babylon',
          price: 4000,
          fav: false,
          currency: '€',
          rating: 3.4,
          description:
            'Ambientada en Los Ángeles durante los años 20, cuenta una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.',
        },
        {
          image:
            'https://pics.filmaffinity.com/everything_everywhere_all_at_once-245462960-mmed.jpg',
          product: 'Everything Everywhere All at Once',
          price: 2500,
          fav: false,
          currency: '€',
          rating: 4.8,
          description:
            'Cuando una ruptura interdimensional altera la realidad, Evelyn (Michelle Yeoh), una inmigrante china en Estados Unidos, se ve envuelta en una aventura salvaje en la que solo ella puede salvar el mundo. Perdida en los mundos infinitos del multiverso, esta heroína inesperada debe canalizar sus nuevos poderes para luchar contra los extraños y desconcertantes peligros del multiverso mientras el destino del mundo pende de un hilo',
        },
      ],
      reviews: [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pepe_2018.jpg/320px-Pepe_2018.jpg',
          name: 'Pepe',
          rating: 5,
          opinion: 'Me ha gustado',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XhoZ6BdgHuwHjx_YqUiDwS9MQbJo-CGSvg&usqp=CAU',
          name: 'Marge Simpson',
          rating: 4,
          opinion: 'No me ha gustado',
          date: 'La semana pasada, 2023',
        },
      ],
    },
  ];

  datoElegido: producto = this.datos[0];
  datoFiltrado = this.datos;

  filtro: string = '';
  estrella: number = 0;

  Selecciona(precio: number) {
    const datoEncontrado = this.datos.find((dato) => dato.price === precio);
    this.datoElegido = datoEncontrado ?? this.datoElegido;
  }

  EliminaPeli() {
    this.datos.splice(
      this.datos.findIndex((prod) => {
        return prod.product === this.datoElegido.product;
      }),
      1
    );
    this.datoElegido = this.datos[0];
    this.datoFiltrado = this.datos;
  }

  Favoritos() {
    if (this.datoElegido.fav === false) {
      this.datoElegido.fav = true;
    } else {
      this.datoElegido.fav = false;
    }
  }

  FiltraEstrellas(estrella: number) {
    this.datoFiltrado = this.datos.filter(
      (datos) => Math.floor(datos.rating) == estrella
    );
    this.datoElegido = this.datoFiltrado[0];
  }

  FiltraPeli(filtro: string) {
    this.datoFiltrado = this.datos.filter((datos) =>
      datos.product.toLowerCase().includes(filtro.toLowerCase())
    );
    this.datoElegido = this.datoFiltrado[0];
  }

  Reset() {
    this.datoFiltrado = this.datos;
    this.datoElegido = this.datoFiltrado[0];
  }
}
