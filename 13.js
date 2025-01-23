const filmes = ['A cabana', 'O máscara', 'O senhor dos Anéis', 'Vingadores Ultimato', 'O Rei Leão']
const filmesComMaisDe10Letras = filmes.filter((filme) => filme.length > 10);
console.log(filmesComMaisDe10Letras);