class Personagem {

  constructor(imagem){
    this.imagem = imagem; 
    /*this.matriz = [
        [0,0], [220,0], [440,0], [660,0],
        [0,270],[220,270], [440,270], [660,270],
        [0,540], [220,540], [440,540], [660,540],
        [0,810], [220,810], [440,810], [660,810],
    ]*/

    this.colunaSprite = 4;
    this.linhaSprite = 4;
    this.larguraImagem = 220;
    this.alturaImagem = 270;
    this.matrizSprite = Array();

    this.frameAtual = 0;

    let indice = 0;
    let posicaoX;
    let posicaoY;

    for(let i = 0 ; i < this.colunaSprite ; i++) {
        for(let j = 0 ; j < this.linhaSprite ; j++){
          indice = this.colunaSprite * i + j;

          posicaoX = this.larguraImagem * j;
          posicaoY = this.alturaImagem * i;

          this.matrizSprite[indice] = [posicaoX, posicaoY];
      }
    }

  }

  exibe(){

    let spriteX = this.matrizSprite[this.frameAtual][0];
    let spriteY = this.matrizSprite[this.frameAtual][1];

    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight]
    image(
      this.imagem,
      0, height - 135,
      110, 135,
        spriteX, spriteY,
        this.larguraImagem, this.alturaImagem
    );

  }

  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matrizSprite.length - 1) {
      this.frameAtual = 0;
    }
  }
}