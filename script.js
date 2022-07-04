$(".f1").mousedown(function(event){
    switch(event.which){
    case 1:
    alert('left mouse is being clicked');
    break;
        case 2:
            alert('middle mouse is being clicked');
            break;
        case 3:
            alert('right mouse is being clicked');
            break;
        default:
            alert('nothing');
}
                   });