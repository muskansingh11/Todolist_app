var addbtn = document.getElementById('add');
addbtn.addEventListener('click',additem);

var removebtn = document.getElementById('remove');
removebtn.addEventListener('click',removeitem);

var ul = document.getElementById('list');
var li;



function additem()
{
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    if(item === '')
    {
        return false;
    }
    else
    {
        // create li
        li = document.createElement('li');

        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        // create label
        var label = document.createElement( 'label');
        label.setAttribute('for','item');//optional


        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className = 'visual';
        setTimeout(()=>{
            li.className = 'visual';

        },2);
        input.value = '';  



    }
}

function removeitem()
{
    li = ul.children;
    for(let index=0;index<li.length;index++)
    {while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index]);

        }
    }
}