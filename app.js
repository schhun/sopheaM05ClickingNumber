var click = 0;
function fun(){
    document.getElementById('counts').innerHTML = ++click;
    click = click;
}




function box(name){

    const that=this;

    this.name= name;
    this.ele=document.createElement("div");
    this.ele.innerHTML=this.name;

    this.ele.addEventListener("click", function (){
        that.reverseName();

    })

    document.body.appendChild(this.ele);
}

box.prototype.reverseName =function(){
    this.number=this.number.split("").reverse().join("");
    this.ele.innerHTML=this.name;
}

for (let i=0; i<data.length; i++){
    eles.push(new box(data[i]));
}

