function getTimeString(time){
    // get hours
    const hour = parseInt(time/3600);
    let remainingSecond = time%3600;
    const minute = parseInt(remainingSecond/60);
    remainingSecond = remainingSecond%60;

    return`${hour} hour ${minute} min ${remainingSecond} second ago`
}

const removeActiveClass = () =>{
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}