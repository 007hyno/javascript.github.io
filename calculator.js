let m = document.getElementById("min");
    let mm = document.getElementById("mul");
    let co = document.getElementById("add");
    let d = document.getElementById("div");
    function add(){
        m.classList.remove('red');
        mm.classList.remove('red');
        d.classList.remove('red');
        console.log(co);
        co.classList.add('red');
        
        var x = document.getElementById("a").value;
        console.log(x);
        var y = document.getElementById("b").value;
        console.log(y);
        n1 = parseInt(x)
        n2 = parseInt(y)
        console.log(n1+n2);
        var n3 = n1+n2;
        document.getElementById("ans").innerHTML = n3;
    }
    function min(){
        co.classList.remove('red');
        mm.classList.remove('red');
        d.classList.remove('red');
        console.log(m);
        m.classList.add('red');
        var x = document.getElementById("a").value;
        console.log(x);
        var y = document.getElementById("b").value;
        console.log(y);
        n1 = parseInt(x)
        n2 = parseInt(y)
        console.log(n1-n2);
        var n3 = n1-n2;
        document.getElementById("ans").innerHTML = n3;
    }
    function mul(){        
    m.classList.remove('red');
    co.classList.remove('red');
    d.classList.remove('red');
        console.log(mm);
        mm.classList.add('red');
        var x = document.getElementById("a").value;
        console.log(x);
        var y = document.getElementById("b").value;
        console.log(y);
        n1 = parseInt(x)
        n2 = parseInt(y)
        console.log(n1*n2);
        var n3 = n1*n2;
        document.getElementById("ans").innerHTML = n3;
    }
    function div(){
        m.classList.remove('red');
        mm.classList.remove('red');
        co.classList.remove('red');
        console.log(d);
        d.classList.add('red');
        var x = document.getElementById("a").value;
        console.log(x);
        var y = document.getElementById("b").value;
        console.log(y);
        n1 = parseInt(x)
        n2 = parseInt(y)
        console.log(n1/n2);
        var n3 = n1/n2;
        document.getElementById("ans").innerHTML = n3;
    }
    