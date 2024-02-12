export class Background {

  constructor() {
    this.img = new Image();
    this.path = "./res/img/background/sr.jpg";
    this.img.src = this.path;
    this.size = {
      width: 5364,
      height: 4310,
    };
  }

  draw(ctx, player) {
    this.position = {
      x: -player.x + 1280 / 2 - player.width,
      y: -player.y + 720 / 2 - player.height 
    }
    ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height); 
  }
}
