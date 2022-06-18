function tabla(){
    for(let i=0;i<53;i++){
        if(i==2 || i==17 || i==24){
            tab[i]=1;
        }else if(i==14 || i==44 || i==48){
            tab[i]=2;
        }else{
            tab[i]=0;
        }
    }
}

function dadoNegro(n){
    switch(n){
        case 1:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d1n.png'); background-repeat: no-repeat;";
            break;
        case 2:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d2n.png'); background-repeat: no-repeat;";
            break;
        case 3:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d3n.png'); background-repeat: no-repeat;";
            break;
        case 4:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d4n.png'); background-repeat: no-repeat;";
            break;
        case 5:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d5n.png'); background-repeat: no-repeat;";
            break;
        case 6:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d6n.png'); background-repeat: no-repeat;";
            break;
    }
}
function dadoBlanco(n){
    switch(n){
        case 1:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d1B.png'); background-repeat: no-repeat;";
            break;
        case 2:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d2B.png'); background-repeat: no-repeat;";
            break;
        case 3:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d3B.png'); background-repeat: no-repeat;";
            break;
        case 4:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d4B.png'); background-repeat: no-repeat;";
            break;
        case 5:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d5B.png'); background-repeat: no-repeat;";
            break;
        case 6:
            document.getElementById('Dado').style="top: 275px; left: 90%; width: 72px; height: 72px; position: fixed; background-image: url('d6B.png'); background-repeat: no-repeat;";
            break;
    }
}

function moverJ1(num){
    aux = posicionJ1;
    aux=aux+num;
    let a;
    if(aux==1){
        jug1.style.marginTop="530px";
        jug1.style.left="30px";
        posicionJ1=posicionJ1+num;
        return false;
    }else if(aux<10){
        posicionJ1=posicionJ1+num;
        jug1.style.marginTop="530px";
        aux2=aux-1;
        mov=100*aux2;
        jug1.style.left=(30+mov)+"px";
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>9 && aux<15){
        jug1.style.left="830px";
        aux2=aux-9;
        a=aux2*100;
        mov=500-a;
        jug1.style.marginTop=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>14 && aux<23){
        posicionJ1=posicionJ1+num;
        jug1.style.marginTop="30px";
        aux2=aux-14;
        a=100*aux2;
        mov=800-a;
        jug1.style.left=(30+mov)+"px";
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>22 && aux<27){
        posicionJ1=posicionJ1+num;
        jug1.style.left="30px";
        aux2=aux-22;
        mov=aux2*100;
        jug1.style.marginTop=(30+mov)+"px";
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>26 && aux<34){
        jug1.style.marginTop="430px";
        aux2=aux-26;
        mov=100*aux2;
        jug1.style.left=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>33 && aux<37){
        jug1.style.left="730px";
        aux2=aux-33;
        a=100*aux2;
        mov=400-a;
        jug1.style.marginTop=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>36 && aux<43){
        jug1.style.marginTop="130px";
        aux2=aux-36;
        a=100*aux2;
        mov=700-a;
        jug1.style.left=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>42 && aux<45){
        jug1.style.left="130px";
        aux2=aux-41;
        mov=aux2*100;
        jug1.style.marginTop=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>44 && aux<50){
        posicionJ1=posicionJ1+num;
        jug1.style.marginTop="330px";
        aux2=aux-43;
        mov=100*aux2;
        jug1.style.left=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>49 && aux<51){
        jug1.style.left="630px";
        aux2=aux-49;
        a=100*aux2;
        mov=300-a;
        jug1.style.marginTop=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>50 && aux<54){
        jug1.style.marginTop="230px";
        aux2=aux-50;
        a=100*aux2;
        mov=600-a;
        jug1.style.left=(30+mov)+"px";
        posicionJ1=posicionJ1+num;
        alert("Vas en la casilla: "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return false;
    }else if(aux>=54){
        posicionJ1=54;
        jug1.style.marginTop="230px";
        jug1.style.left="230px";
        alert("LLegaste a la casilla "+posicionJ1);
        sYpJ1(tab[posicionJ1-1],posicionJ1);
        return true;
    }
}

function moverJ2(num){
    aux = posicionJ2;
    aux=aux+num;
    let a;
    if(aux==1){
        jug2.style.marginTop="570px";
        jug2.style.left="30px";
        posicionJ2=posicionJ2+num;
        return false;
    }else if(aux<10){
        posicionJ2=posicionJ2+num;
        jug2.style.marginTop="570px";
        aux2=aux-1;
        mov=100*aux2;
        jug2.style.left=(30+mov)+"px";
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>9 && aux<15){
        jug2.style.left="830px";
        aux2=aux-9;
        a=aux2*100;
        mov=500-a;
        jug2.style.marginTop=(70+mov)+"px";
        posicionJ2=posicionJ2+num;
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>14 && aux<23){
        posicionJ2=posicionJ2+num;
        jug2.style.marginTop="70px";
        aux2=aux-14;
        a=100*aux2;
        mov=800-a;
        jug2.style.left=(30+mov)+"px";
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>22 && aux<27){
        posicionJ2=posicionJ2+num;
        jug2.style.left="30px";
        aux2=aux-22;
        mov=aux2*100;
        jug2.style.marginTop=(70+mov)+"px";
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>26 && aux<34){
        jug2.style.marginTop="470px";
        aux2=aux-26;
        mov=100*aux2;
        jug2.style.left=(30+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>33 && aux<37){
        jug2.style.left="730px";
        aux2=aux-33;
        a=100*aux2;
        mov=400-a;
        jug2.style.marginTop=(70+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>36 && aux<43){
        jug2.style.marginTop="170px";
        aux2=aux-36;
        a=100*aux2;
        mov=700-a;
        jug2.style.left=(30+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>42 && aux<45){
        jug2.style.left="130px";
        aux2=aux-41;
        mov=aux2*100;
        jug2.style.marginTop=(70+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>44 && aux<50){
        posicionJ2=posicionJ2+num;
        jug2.style.marginTop="370px";
        aux2=aux-43;
        mov=100*aux2;
        jug2.style.left=(30+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>49 && aux<51){
        jug2.style.left="630px";
        aux2=aux-49;
        a=100*aux2;
        mov=300-a;
        jug2.style.marginTop=(70+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>50 && aux<54){
        jug2.style.marginTop="270px";
        aux2=aux-50;
        a=100*aux2;
        mov=600-a;
        jug2.style.left=(30+mov)+"px";
        posicionJ2=posicionJ2+num
        alert("Vas en la casilla: "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return false;
    }else if(aux>=54){
        posicionJ2=54;
        jug2.style.marginTop="270px";
        jug2.style.left="230px";
        alert("LLegaste a la casilla "+posicionJ2);
        sYpJ2(tab[posicionJ2-1],posicionJ2);
        return true;
    }
}


function sYpJ1(num, posi){
    switch(num){
        case 1:
            switch(posi){
                case 3:
                    posicionJ1=46;
                    jug1.style.marginTop="330px";
                    jug1.style.left="330px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ1);
                    break;
                case 18:
                    posicionJ1=51;
                    jug1.style.marginTop="230px";
                    jug1.style.left="530px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ1); 
                    break;
                case 25:
                    posicionJ1=43;
                    jug1.style.marginTop="230px";
                    jug1.style.left="130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ1); 
                    break;
            }
            break;
        case 2:
            switch(posi){
                case 15:
                    posicionJ1=12;
                    jug1.style.marginTop="230px";
                    jug1.style.left="830px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: "+posicionJ1); 
                    break;
                case 45:
                    posicionJ1=26;
                    jug1.style.marginTop="430px";
                    jug1.style.left="30px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: "+posicionJ1); 
                    break;
                case 48:
                    posicionJ1=9;
                    jug1.style.marginTop="530px";
                    jug1.style.left="830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: "+posicionJ1);
                    break;
            }
            break;
        case 0:
            break;
    }
}

function sYpJ2(num, posi){
    switch(num){
        case 1:
            switch(posi){
                case 3:
                    posicionJ2=46;
                    jug2.style.marginTop="370px";
                    jug2.style.left="330px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ2);
                    break;
                case 18:
                    posicionJ2=51;
                    jug2.style.marginTop="270px";
                    jug2.style.left="530px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ2); 
                    break;
                case 25:
                    posicionJ2=43;
                    jug2.style.marginTop="270px";
                    jug2.style.left="130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: "+posicionJ2); 
                break;
            }
            break;
        case 2:
            switch(posi){
                case 15:
                    posicionJ2=12;
                    jug2.style.marginTop="270px";
                    jug2.style.left="830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: "+posicionJ2); 
                    break;
                case 45:
                    posicionJ2=26;
                    jug2.style.marginTop="470px";
                    jug2.style.left="30px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: "+posicionJ2); 
                    break;
                case 48:
                    posicionJ2=9;
                    jug2.style.marginTop="570px";
                    jug2.style.left="830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: "+posicionJ2); 
                    break;
            }
            break;
        case 0:
            break;
    }
}

