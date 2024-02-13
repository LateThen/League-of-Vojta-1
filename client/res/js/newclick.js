export class newClick {
  constructor() {
    this.height = 50;
    this.width = 50;
    this.x = 0;
    this.y = 0;
    this.counter = 0

  }
  draw(ctx) {
  if (this.counter >= 25) return;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x - 10, this.y - 10, 20, 20)
    this.counter++;
  }
  update(x, y){
        this.x = x;
        this.y = y;
        this.reset();
    }
    reset(){

    }
    
}
