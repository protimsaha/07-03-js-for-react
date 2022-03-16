const addToLocal = () => {
    const inputkey = document.getElementById('inputKey');
    let id = inputkey.value;
    const inputValue = document.getElementById('inputValue');
    let value = inputValue.value
    if (id && value) {
        localStorage.setItem(id, value)
    }
    inputkey.value = ''
    inputValue.value = ''
}



// localStorage.setItem('userId', 87);
// sessionStorage.setItem('userId', 45)