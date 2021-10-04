function checkedFunction() {
    var checkbox = document.getElementById('yesNick');
    var div = document.getElementById('display-none');
    var input = document.getElementById('nickname');

    if (checkbox.checked)
    {
        div.style.display = 'block';
        input.setAttribute('required', true);
    }
        
    else
    {
        div.style.display = 'none';
        input.removeAttribute('required');
    }
        
}