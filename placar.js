// Você foi contratada para desenvolver um jogo,
// a cada vez que o usuário acerta, ele ganha 5 pontos.
// Quando se atinge a pontuação 100 ele entra na faixa
// bônus e sua pontuação é duplicada até ele atingir 
// 250 pontos,quando retorna a pontuação normal. Crie
// o código para implementar a lógica que calcula esse 
// score

let acertou = true
let score = 0

function jogar(acertou){
	acertou = Boolean(Math.floor(Math.random()*2))
	console.log(acertou)
	if(acertou){
		if(score <=100 || score > 250){
			score = score + 5
			console.log('O score corrigido é (+5)', score)
		} else if (score > 100 && score <= 250){
			score = score + 10
			console.log('O score corrigido é (+10)', score)
		}
	}
}