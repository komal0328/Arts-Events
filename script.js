function filtergallery(category){
    let items=document.querySelectorAll(".gallery-item");
    items.forEach(function(item){
       if(category==='all'){
        items.style.display="block";
       }
       else{
        if(item.classList.contains(category)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
       }
    });
}