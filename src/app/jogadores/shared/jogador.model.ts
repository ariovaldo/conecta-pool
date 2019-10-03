export class Jogador{
    constructor(
        public id ?:number,
        public nome?:string,
        public inativo?:boolean,
        public pontos?:number,
		public pontoInicial?:number
    ){}
}
