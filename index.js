function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;
  
    const obj = {
      name,
      email,
      phonenumber
    };
  
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
  }
  
  function showUserOnScreen(obj) {
    const parentElem = document.getElementById('listOfitems');

    const childElem = document.createElement('li');

    childElem.textContent = `${obj.name} - ${obj.email} - ${obj.phonenumber} <button onclick="deleteUser('${obj.email}')">Delete</button>`;

    const deleteButton = document.createElement('input')
    deleteButton.type="button"
    deleteButton.value="Delete"
    deleteButton.onclick = () => {
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
    }
    childElem.appendChild(deleteButton)
    parentElem.appendChild(listItem);
  }
  
  