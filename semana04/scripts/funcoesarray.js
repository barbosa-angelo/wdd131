let nomes = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let nomesB = nomes.filter(nome => nome.charAt(0) === "B");

let tamanhoNomes = nomes.map((nome) => nome.length);

let tamanhoMedio = nomes.reduce((total, nome) => total + nome.length, 0) / nomes.length;