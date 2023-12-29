var i=0
var img=[]
img[0]="img/1.jpg"
img[1]="img/2.jpg"
img[2]="img/3.jpg"
img[3]="img/4.jpg"

function changing(){
    document.getElementById('myimg').src=img[i]

if(i < img.length -1){
    i++

}
else{
    i=0
}

setTimeout("changing()",2000)

}

changing()
