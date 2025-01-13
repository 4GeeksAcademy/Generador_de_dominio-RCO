/* Creo las variables que voy a usar para almacenar los distintos strings */

let pronoun = ['the', 'our', 'somebody', 'that'];
let adj = ['fantastic', 'mighty', 'amazing', 'agentsof', 'brotherhoodof', 'leagueof' ];
let noun = ['avengers', 'four', 'spider-men', 'mutants', 'Chronos', 'heroes', 'villains' ];
let domain = ['.com', '.org', '.net', '.edu', '.cn']

/* Creo los loops para que empiecen a formar páginas web */

for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
       for (let c = 0; c < noun.length; c++) {
           for (let d = 0; d < domain.length; d++) {
               console.log(pronoun[a]+adj[b]+noun[c]+domain[d])
           }
       }
   }
}