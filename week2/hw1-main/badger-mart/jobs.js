function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    radiolist = document.getElementsByName("job");
    let checkpoint = true;
    for (let i = 0; i < radiolist.length; i++) {
        if (radiolist[i].checked) {
            checkpoint = false;
            alert("Thank you for applying to be a "+radiolist[i].value+"!");
            break;
        }
    }
    if (checkpoint) {
        alert("Please select a job!");
        return;
    }    
        // TODO: Alert the user of the job that they applied for!
}
