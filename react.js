like = ()=>{
    let d = document.getElementById('didi');
    let l = document.getElementById('lili');
    console.log('main = '+l.innerText);
    if(l.innerText == 'like'){
        console.log("unlike kara");
        l.classList.remove('hi');
        l.classList.add('un');
        l.innerText = 'unlike'
    }else if(l.innerText == 'unlike' ){
        if(d.innerText == 'dislike'){
        d.classList.remove('hi');
        d.classList.add('un');
        d.innerText = 'undislike'
        }console.log("like kara");
        l.innerText = 'like'
        l.classList.remove('un');
        l.classList.add('hi');
    }
    
}
dislike = ()=>{
    let d = document.getElementById('didi');
    let l = document.getElementById('lili');
    console.log('main = '+d.innerText);
    if(d.innerText == 'dislike'){
        console.log("undislike kara");
        d.classList.remove('hi');
        d.classList.add('un');
        d.innerText = 'undislike'
    }else if(d.innerText == 'undislike'){
        if(l.innerText == 'like'){
            l.classList.remove('hi');
            l.classList.add('un');
            l.innerText = 'unlike'
        }console.log("dislike kara");
        d.classList.remove('un');
        d.classList.add('hi');
        d.innerText = 'dislike'
    }
}