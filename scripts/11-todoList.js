const array=['a','b'];

function renderHTML(){
    let htmlContent='';
    for(let i=0;i<array.length;i++){
        const item=`<p>${array[i]} <button onClick="array.splice(${i},1) 
        renderHTML()">Delete</button></p>`;
        htmlContent+=item;
    }

    console.log(htmlContent);
    const element=document.querySelector('.js-block').innerHTML=htmlContent;
}





function addItem(){
    const inputElement=document.querySelector('.js-input');
    const name=inputElement.value;
    console.log(name);
    array.push(name);
    console.log(array);
    inputElement.value='';
    renderHTML();
}