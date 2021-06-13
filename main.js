function setup(){
can = createCanvas(600,500);
can.center();
v1 = createCapture(VIDEO);
v1.hide();
}

function draw(){
image (v1, 0, 0, 600, 500);

tint(tinto);

fill ("#008080");
stroke("#008080")
circle(200, 100, 80);

fill ("#FF00FF");
stroke("#FF00FF")
circle(60, 300, 80);

fill ("#FFD700");
stroke("#FFD700")
circle(450, 350, 80);

fill ("#add8e6");
stroke("#add8e6s")
square(180, 400, 90);

fill ("#800080");
stroke("#800080")
ellipse(500, 200, 60, 80);

fill ("#E34234");
stroke("#E34234")
rect(450, 450, 90, 40);

fill(125, 0, 0, 0);
stroke(0, 200, 0);
var r = 100;

for (var i = 1;i<=10;i++){
circle(290, 300, r);
r = r-10;

}
}

function take_snapshot(){
save ("image.png");}

tinto = "";

function change(){
tinto = document.getElementById("colour").value;


}