void setup() {
 size(600,400);
 background(51);
 for(int i = 0; i < 500;i++){
    float x = random(width);
    float y = random(height);
    float r = random(0, 255);
    float g = random(0, 255);
    float b = random(0, 255);
    float h = random(0, 16);
    float l = random(0, 16);
    noStroke();
    fill(r, g, b);
    ellipse(x, y, h, l);
 }
 save("output.png");
}
