//document.getElementById("count-el").innerText = 5
let count = 0
let savedValue = document.getElementById("saved-value")
let countEl = document.getElementById("count-el")
function increment()
{
    count+=1
    countEl.innerText = count
}

function save()
{
    console.log(count)
savedValue.innerText+=  " "+ count
countEl.innerText  = 0;
}

