setInterval(function(){ 
    let t = new Date();
    n = (t.getHours())
    mm = (t.getMinutes())
    ss = (t.getSeconds())
    hh = h12(n);
    tt = ampm(n);
// console.log(t.getHours());  
// console.log(t.getMinutes());  
// console.log(t.getSeconds());
document.getElementById('hh').innerHTML=hh;
document.getElementById('mm').innerHTML=mm;
document.getElementById('ss').innerHTML=ss;
document.getElementById('tt').innerHTML=tt;
}, 1000);

// 12 hours formate logic here
h12 = (h)=>{
    if(h>12){
        r=h-12;
        return r
    }
}
// Am Pm logic here
ampm = (h)=>{
    if(h>12){
        a='PM'
        return a
    }
    else{
        a='AM'
        return a
    }
}
