window.addEventListener('load' ,getBal); 
// const startingminutes=10;
let time=6;
let body=document.getElementById('body');
let countdown=document.getElementById('countdown');
let btn=document.getElementsByClassName('btn');
let row=document.getElementById('row');
let result=document.getElementById('result');
let button1=document.getElementById('button1');
let pop=document.getElementById('pop');
let displaynumber=document.getElementById('displaynumber');
let display=document.getElementById('display');
let main=document.getElementById('main');
let displaytext=document.getElementById('displaytext');
let closedisplay=document.getElementById('closedisplay');
let gbtn=document.getElementById('gbtn');
let rbtn=document.getElementById('rbtn');
let vbtn=document.getElementById('vbtn');
let input2=document.getElementById('input2');
let submit2=document.getElementById('submit2');
let recharge2=document.getElementById('recharge2');
let rechargevalue=document.getElementById('rechargevalue');
let rechargebutton=document.getElementById('rechargebutton');
let balance=document.getElementById('balance');
let wrapper=document.getElementById('wrapper');
let number3=document.getElementById('number2');

let balanceValue = 0;

function popclose()
{
    pop.setAttribute('class','pop1');
    main.setAttribute('class','main');
}

setInterval(updatecountdown,1000)
function updatecountdown()
{
    const minutes=Math.floor(time/60);
    const seconds=time%60;
   
    countdown.innerHTML=`0 ${minutes} : ${seconds}`;
    time--;
    if(time==0)
    {
        time=6;
    }
    // if(time<=5)
    // {
    //     body.setAttribute('class','body2');
       
    // }
    // else{
    //     body.setAttribute('class','body');
    // }
}

let random;
let color;

function green()
{
    color='green'
    closedisplay.style=`visibility:visible;`
    gbtn.style=`background:gray;`
    
    wrapper.setAttribute('class','wrapper1');
    let wrapper3=wrapper.getAttribute('class');
    console.log(wrapper3);
    // while(wrapper3==='wrapper1')
    // {
    //     wrapper3=wrapper.getAttribute('class');
    // }
   
     

     
}
function red()
{
    color='red';
    closedisplay.style=`visibility:visible;`
    rbtn.style=`background:gray;`
    wrapper.setAttribute('class','wrapper1');
   
   
}
function voilet()
{
    color='voilet';
    closedisplay.style=`visibility:visible;`
    vbtn.style=`background:gray;`
    wrapper.setAttribute('class','wrapper1');
    
   
}


function updaterecharge(){
    recharge2.setAttribute('class','recharge1');
    main.setAttribute('class','main1');
    let value=parseInt(rechargevalue.value)
    if(!value)
    {
        value=0;
    }
    balanceValue += value;
    let a = localStorage.getItem('balance'); 
    if(a){
        localStorage.setItem('balance',balanceValue); 
    } 

    balance.innerHTML = balanceValue;
    // balance.innerHTML=`${value}`
    rechargevalue.value=0;
}
function openrecharge(){
    recharge2.setAttribute('class','recharge2')
    main.setAttribute('class','main2');
}
const plus=document.querySelector(".plus"),
minus =document.querySelector('.minus'),
number2=document.querySelector('.number2');
let a=10;
plus.addEventListener("click",()=>{
    a+=10;
    a=(a<10)? "0"+a :a;
    console.log(a);
    number2.innerText=a;
})
minus.addEventListener("click",()=>{
    a=a-10;
    if(a<0)
    {
        a=0;
    }
    a=(a<10)? "0"+a :a;
    
    console.log(a);
  
    number2.innerText=a;
    
})
function updatebet(){
    wrapper.setAttribute('class','wrapper2');
    let valueofbet=parseInt(number3.innerHTML);
    let accountbalance=localStorage.getItem('balance');
    if(color=='green')
    {
        if(color==='green' && valueofbet!=0 && valueofbet<=accountbalance )
        {
            console.log('UpdateBet' + valueofbet)
            greenvalues(valueofbet);
    
        }
        else{
            alert("Please recharge your account");
            gbtn.style=`background:green;`
        }
    }
   if(color=='red')
   {
        if(color==='red' && valueofbet!=0 && valueofbet<=accountbalance)
        {
            redvalues(valueofbet);
        }
        else{
            alert("Please recharge your account");
        }
   }
   if(color=='voilet')
    
    if(color==='voilet' && valueofbet!=0 && valueofbet<=accountbalance)
    {
        voiletvalues(valueofbet);
    }
    else{
        alert("Please recharge your account");
    }
   

}



function greenvalues(value)
{
    console.log('value of value '+ value);
    const random = Math.floor(Math.random()*10);
    let lwvalue;
    balanceValue=localStorage.getItem('balance');
    balanceValue-=value;
    balance.innerHTML = balanceValue;
    localStorage.setItem('balance',balanceValue);
    if(random%2==0)
    {
        alert(time);
        setTimeout(()=>{
            // alert("youwon")
            lwvalue=2*value;
            pop.setAttribute('class','pop');
            display.style=`background:green;`
            main.setAttribute('class','main2');
            displaytext.innerHTML=`You Win ${lwvalue}`
            balanceValue += lwvalue; 
            localStorage.setItem('balance',balanceValue);
            setTimeout(()=>{
                balance.innerHTML = balanceValue;
            },2000)
            
            
            displaynumber.innerHTML=`${random}`;
            row.innerHTML += `<tr>
            <td>202207</td>
            <td>44986</td>
            <td>${random}</td>
            <td class="td"><div class="result1" id="result"></div></td> 
            </tr>
            `
            closedisplay.style=`visibility:hidden;`
            gbtn.style=`background:green;`
        },(time*1000))
        
    }
    else{
        lwvalue=value;
       setTimeout(()=>{
        pop.setAttribute('class','pop');
        display.style=`background:red;`
        main.setAttribute('class','main2');
        displaytext.innerHTML=`You Lose ${lwvalue}`
        display.style=`color:red;`
        displaynumber.innerHTML=`${random}`;
        row.innerHTML += `<tr>
        <td>202207</td>
            <td>44986</td>
            <td>${random}</td>
            <td class="td"><div class="result" id="result"></div></td><br/>
            </tr>`
            closedisplay.style=`visibility:hidden;`
            gbtn.style=`background:green;`
       },time*1000)  
    }
}




function redvalues(value)
{
    let lwvalue;
    const random = Math.floor(Math.random()*10);
    balanceValue=localStorage.getItem('balance');
    balanceValue-=value;
    balance.innerHTML = balanceValue;
    localStorage.setItem('balance',balanceValue);
    if(random%2==0)
    {
       
        
        alert(time);
        setTimeout(()=>{
            pop.setAttribute('class','pop');
            display.style=`background:green;`
            main.setAttribute('class','main2');
            displaytext.innerHTML=`You Lose`;
            displaynumber.innerHTML=`${random}`;
            
            row.innerHTML += `<tr>
            <td>202207</td>
            <td>44986</td>
            <td>${random}</td>
            <td class="td"><div class="result1" id="result"></div></td> 
            </tr>
            `
            closedisplay.style=`visibility:hidden;`
            rbtn.style=`background:red;`
        },(time*1000))
    }
    else{
        lwvalue=2*value;
        setTimeout(()=>{
            pop.setAttribute('class','pop');
            display.style=`background:red;`
            main.setAttribute('class','main2');
            displaytext.innerHTML=`You Won`
            display.style=`color:red;`
            displaynumber.innerHTML=`${random}`;

            balanceValue += lwvalue; 
            localStorage.setItem('balance',balanceValue);
            balance.innerHTML = balanceValue;

           

           
            row.innerHTML += `<tr>
            
            <td>202207</td>
                <td>44986</td>
                <td>${random}</td>
                <td class="td"><div class="result"></div></td><br/>
                </tr>`
                closedisplay.style=`visibility:hidden`;
                rbtn.style=`background:red;`
           },time*1000)  
    }
}


function voiletvalues(value)
{
    let lwvalue;
    const random = Math.floor(Math.random()*10);
    balanceValue=localStorage.getItem('balance');
    balanceValue-=value;
    balance.innerHTML = balanceValue;
    localStorage.setItem('balance',balanceValue);
    if(random==5 || random==0)
    {
        
        lwvalue=5*value;
        setTimeout(()=>{
            
            pop.setAttribute('class','pop');
            // display.style=`background:voilet;`
            display.style=`background:green;`
            main.setAttribute('class','main2');
            displaytext.innerHTML=`You Won`
            display.style=`color:rgb(65, 5, 65);`
            displaynumber.innerHTML=`${random}`;

            balanceValue += lwvalue; 
            localStorage.setItem('balance',balanceValue);
            balance.innerHTML = balanceValue;

           
            row.innerHTML += `<tr>
            
            <td>202207</td>
                <td>44986</td>
                <td>${random}</td>
                <td class="td"><div class="result2"></div></td><br/>
                </tr>`
                closedisplay.style=`visibility:hidden`;
                vbtn.style=`background:voilet;`
           },time*1000) 
    }
    else{
        
           alert(time);
           setTimeout(()=>{
               pop.setAttribute('class','pop');
               if(random%2==0)
               {
                display.style=`background:green;`
               }
               else{
                display.style=`background:red;`
               }
               
               main.setAttribute('class','main2');
               displaytext.innerHTML=`You Lose`;
               displaynumber.innerHTML=`${random}`;
               let color2;
               if(random%2==0)
               {
                 color2='result1'
               }
               else{
                 color2='result'
               }
               console.log(color2);
               row.innerHTML += `<tr>
               <td>202207</td>
               <td>44986</td>
               <td>${random}</td>
               <td class="td"><div class="${color2}" id="result"></div></td> 
               </tr>
               `
               closedisplay.style=`visibility:hidden;`
               vbtn.style=`background:voilet;`
           },(time*1000))
    }
}



function getBal() {
    console.log('GetBalance Function')
    let bal = parseInt(localStorage.getItem('balance')); 
    if(bal){
        balanceValue = bal; 
    }  
    else{
        localStorage.setItem('balance',100); 
        balanceValue = 100; 
    }
    balance.innerHTML = balanceValue;
}

