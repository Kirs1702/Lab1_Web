
let xValues = ["-2","-1.5","-1","-0.5","0","0.5","1","1.5","2"];
let rValues = ["1","1.5","2","2.5","3"];


function getX(){
    let a = document.getElementById('X-input').selectedIndex;
    let options=document.getElementById('X-input').options;
    let x = options[a].value;;
    if (xValues.indexOf(x) === -1) return null;
    return x;
}

function getY(){
    let y = document.getElementById('Y').value;
    if (y[0] === "-") y = y.substring(0,8); else y = y.substring(0,7);
    if ( y==='') return null;
    else if(y > -5 && y < 3) return y;
    return null;
}


function getR(){
    let a = $('input[name="R-input"]:checked');
    if (a.length === 0) return null;
    let r = a[0].value;
    if (rValues.indexOf(r) === -1) return null;
    return r;
}


function sendRequest(){
    let x = getX();
    let y = getY();
    let r = getR();
 

    if (x === null || y === null || r === null) {
        let msg = '';
        if (x === null) msg += 'Неверно введено значение X!\n';
        if (y === null) msg += 'Неверно введено значение Y!\n';
        if (r === null) msg += 'Неверно введено значение R!\n';
        alert(msg.substring(0, msg.length-1));
        return;
    }

    $.post('server.php', {'x':x, 'y':y, 'r':r}, function(data) {document.getElementById('resultTable').innerHTML=data;});

    return;
}

function clearRows() {
    $.get('clear.php', {}, function(){});
}

function startFunc() {
    $.get('start.php', {}, function(data) {document.getElementById('resultTable').innerHTML=data;});
}