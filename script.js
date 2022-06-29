console.log("Crie 3 variáveis, cada uma com um array:");
console.log("Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:");

let comedy = [
    {
       title: "To Ryca",
       director: "Pedro Antônio",
       year: 2016
    },

    {
        title: "Minha mãe é uma peça",
        director: "André Pellenz",
        year: 2013
    },

    {
        title: "O auto da Compadecida",
        director: "Guel Arraes",
        year: 2000
    }
]

let action = [
    {
        title: "Mad Max",
        director: "George Miller",
        year: 1980
    },

    {
        title: "John Wick",
        director: "Chad Stahelski",
        year: 2014
    },

    {
        title: "Matrix",
        director: "Lana Wachowski",
        year: 1999
    }
]

let fantasy = [
    {
        title: "Harry Potter",
        director: "Chris Columbus",
        year: 2001
    },

    {
        title: "Labyrinth",
        director: "Jim Henson",
        year: 1986
    },
          
    {
        title: "The NeverEnding Story",
        director: "Wolfgang Petersen",
        year: 1984
    }
]

console.log("Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:");
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." ");

let favoriteMovie = true

if (favoriteMovie == true){
    console.log("My favorite movie is:", fantasy[2].title);
}else{
    console.log("Not even 5 star");
}
