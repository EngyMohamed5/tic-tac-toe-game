let cells = Array.from(document.querySelectorAll('.cell'));
let btn = document.querySelector('.btn');


let arr = Array(9).fill(null);

let cur = 'X' ;

let ply1 = document.querySelector('.plyr1');
let ply2 = document.querySelector('.plyr2');
let draw = document.querySelector('.draw');

let hArr  = Array(3).fill(null);

let plyS1 = 0;
let plyS2 = 0;
let drw = 0 ;



let winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],    
    [2,4,6]
];



function clearAll(){
    cur = 'X' ;
    arr.fill(null);
    cells.forEach(e=>e.innerHTML='')
    hArr.forEach(function(e){
        cells[e].classList.remove("highlight");
        });

}

function highlight (hArr){
    hArr.forEach(function(e){
    cells[e].classList.add("highlight");
    });
}

function checkWin(){

    let ctr=true ;
    for(const winning of winState){

        let [a,b,c] = winning;
        if( arr[a]==null ||arr[b]==null ||arr[c]==null)
        ctr=false;
        if( arr[a] && arr[a]==arr[b] && arr[a]==arr[c]){
        
            if(arr[a] =='X')
                ply1.innerHTML=++plyS1;

            else
                ply2.innerHTML=++plyS2;

            
            hArr = [a,b,c];
            highlight(hArr);

            return true ;

        }    
    }

    if(ctr)
    {
        draw.innerHTML=++drw;
        return true;
    }
    return false ;
}


function checked(e){
    const id = e.target.id;
    if (arr[id]==null){
        arr[id]=cur;
        e.target.innerHTML=cur;
        cur = (cur==='X')?'O':'X';
        if(checkWin())
        {   
            setTimeout(clearAll,1000);
        
        }

       
    }


    

}

cells.forEach(e=>e.addEventListener('click',checked));

btn.addEventListener('click',()=>{

    plyS1 = 0;
    plyS2 = 0;
    drw = 0 ;
    ply1.innerHTML=0;
    ply2.innerHTML=0;
    draw.innerHTML=0;
    clearAll();
}
    );



