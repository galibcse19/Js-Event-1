//  <!-- add text. convert text to text -->
document.getElementById('click-me').addEventListener('click',function(){
     const inputField=document.getElementById('input-field');
     const inputText=inputField.value;
     
    const p=document.getElementById('display-text');
    p.innerText = inputText;
    inputField.value="";
});

// <!-- add comment -->
document.getElementById('add-comment').addEventListener('click',function(){
    const textField = document.getElementById('text');
    const textValue= textField.value;

    const sectionCon=document.getElementById('container');
    const p=document.createElement('p');
    p.innerText=textValue;
    sectionCon.appendChild(p);

    textField.value='';

})

// <!-- delete data -->
document.getElementById('textArea').addEventListener('keyup',function(event){
    const text=event.target.value;
    const DeleteBtn=document.getElementById('btn-delete');
    if(text === 'delete'){
        DeleteBtn.removeAttribute('disabled');
    }
    else{
        DeleteBtn.setAttribute('disabled',true);
    }
})
document.getElementById('btn-delete').addEventListener('click',function(){
    const deleteH2= document.getElementById('deleteItem');
    deleteH2.style.display='none';
})