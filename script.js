
const input = document.getElementById('todo-input');
const enterButton = document.getElementById('enter-button')
const uncompleted = document.querySelector('.uncompleted')
const mainDelete = document.querySelector('.main-delete')
const items =document.getElementsByClassName('items')





// input
const newAddition = () => {
    


    const checked = document.querySelectorAll('.box')

    if (mainDelete.classList.contains("active"))  {
        return;
    };
    const newInput = input.value;
   const man = document.createElement("div")
   man.classList.add('items')
    if(newInput)
   man.innerHTML=`<div class="uncompleted-task">
                
   <div class="activity-container">
       <div class="box"></div>
       <div class="delete active"><img src="./images/cancel2.svg" alt=""></div>
   </div>
   <h4 class="">${newInput}</h4>
   
   </div>`
   uncompleted.appendChild(man)
   input.value=""

   


    //items

    // items.forEach((b)=> { 
    //     b.addEventListener('click', ()=> {
    //         console.log(items)
    //     })
        
    // })


    // const arr = Array.from(checked)
    // arr.map( b=> {
        
    //    b.addEventListener('click', ()=> {
    //        console.log('jam')
    //    })
    // })
    
    const j =Array.from(items)
    j.forEach((b)=> {
        b.addEventListener('click', (e)=> {
            console.log(e.target)
        })
    })

}


enterButton.addEventListener('click', newAddition)
input.addEventListener('keydown', (e)=> {
    if(e.code === "Enter") {
        newAddition()
    }
})



//delete
mainDelete.addEventListener('click', ()=> {
    const clear = document.querySelectorAll('.delete')
    const box = document.querySelectorAll('.box')
    mainDelete.classList.toggle('active');
    enterButton.classList.toggle('delete-on')
    input.classList.toggle('delete-on')
    clear.forEach((b) => {
        b.classList.toggle('active')
    })
    box.forEach((b) => {
        b.classList.toggle('active')
    })

})



// items.forEach((b)=> { 
//     b.addEventListener('click', ()=> {
//         console.log(jam)
//         // if(e.classList.contains('delete')&& e.classList.contains('active')) {
//         //     console.log('jam')
//         // }
//     })
// })





