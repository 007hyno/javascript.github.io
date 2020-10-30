setInterval(function(){ 
  let t = new Date();
  n = (t.getHours())
  mm = (t.getMinutes())
  ss = (t.getSeconds())
  if(n>12){ 
    hh = h12(n);
    document.getElementById('hh').innerHTML=hh;
  }else{
    document.getElementById('hh').innerHTML=n;
  }
  console.log('h12 is here : '+h12(n));
  console.log('hh is here : '+hh);
  tt = ampm(n);
  // console.log(t.getHours());  
  // console.log(t.getMinutes());  
  // console.log(t.getSeconds());
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
  ampm = (hhh)=>{
    //q=parseInt(hhh);
    //console.log('q is here : '+q)
    if(hhh==12&&mm>0){
      return 'PM';
    }
    else if(hhh>12){
      return 'PM';
    }else{
      return 'AM';
    }
  }
