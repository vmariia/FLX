const rootNode = document.getElementById('root');

let todoItems = [];
let i = 0;
let id;
let item;
let root = document.createElement('div');

function addTask() {
	let container = document.createElement('div');
	container.className = 'containerAdd';

	let mainContent = root.appendChild(container);

	let title = document.createElement('h1');
	title.innerText = 'Add task';

	mainContent.appendChild(title);

  let inputField = document.createElement('input');
	inputField.type = 'text';

	mainContent.appendChild(inputField);

	let buttonWrapper = document.createElement('div');
	buttonWrapper.className = 'buttonWrapper';

	mainContent.appendChild(buttonWrapper);

	
	let canselButton = document.createElement('button');
	canselButton.className = 'button';
	canselButton.innerText = 'Cansel';
	buttonWrapper.appendChild(canselButton);
	canselButton.addEventListener('click', () => {
		location.hash = '';
  });
	
	let saveButton = document.createElement('button');
	saveButton.className = 'button';
	saveButton.innerText = 'Save changes';
	buttonWrapper.appendChild(saveButton);
	saveButton.addEventListener('click', () => {
  addListItem(inputField.value.trim());
    location.hash = '';
  });

	rootNode.appendChild(mainContent);
	return mainContent;
}

function modifyItem(item) {
	let container = document.createElement('div');
	container.className = 'containerMod';

	let mainContent = root.appendChild(container);

	let title = document.createElement('h1');
	title.innerText = 'Modify item';

	mainContent.appendChild(title);

  let inputField = document.createElement('input');
	inputField.type = 'text';

	mainContent.appendChild(inputField);

	let buttonWrapper = document.createElement('div');
	buttonWrapper.className = 'buttonWrapper';

	mainContent.appendChild(buttonWrapper);

	
	let canselButton = document.createElement('button');
	canselButton.className = 'button';
	canselButton.innerText = 'Cansel';
	buttonWrapper.appendChild(canselButton);
	canselButton.addEventListener('click', () => {
    location.hash = '';
  });
	
	let saveButton = document.createElement('button');
	saveButton.className = 'button save';
	saveButton.innerText = 'Save changes';
	buttonWrapper.appendChild(saveButton);

	mainContent.querySelector('.save').onclick = () => {
    changeDescription(item.id, inputField.value.trim());
		location.hash = '';
	};

	rootNode.appendChild(mainContent);
	return mainContent;
}

function preview(todoItems) {

	let container = document.createElement('div');
	container.className = 'container';

	let mainContent = root.appendChild(container);
	
	let title = document.createElement('h1');
	title.innerText = 'Simple TODO Aplication';

	let button = document.createElement('button');
	button.innerText = 'Add new task';
	button.className = 'button';

	button.addEventListener('click', () => {
    location.hash += '#addTask';
  });

	let listWrapper = document.createElement('ul');
	mainContent.appendChild(title);
	mainContent.appendChild(button);
	mainContent.appendChild(listWrapper);

	if (todoItems.length) {
		for (let item of todoItems) {
			let li = document.createElement('li');
			li.setAttribute('id', item.id);
      let removeButton = document.createElement('button');
      removeButton.className = 'removeButton';
      removeButton.innerHTML = '<img class="delete" src="assets/img/remove-s.jpg">';

      let checkButton = document.createElement('button');
      checkButton.className = 'checkButton';
      checkButton.innerHTML = '<img class="delete" src="assets/img/todo-s.png">';
      let checked = () => {
				changeStatus(item.id)

				if (item.isDone) {
					checkButton.innerHTML = '<img class="delete" src="assets/img/done-s.png">';
					li.style.backgroundColor = '#cdcdcd';
				}
			}
			checkButton.addEventListener('click', checked);

			let text = document.createElement('button');
			text.className = 'description';
			text.innerText = item.description;

			text.addEventListener('click', () => {
				location.hash += '#modifyItem';
			});

			removeButton.addEventListener('click', () => {
				li.remove();
			});
			li.appendChild(checkButton);
			li.appendChild(text);
			li.appendChild(removeButton);
			listWrapper.appendChild(li);
		}
	} else {
		let article = document.createElement('p');
		article.innerText = 'TODO is empty';
		mainContent.appendChild(article);
	}
	return mainContent;
}

function changeStatus(id) {
  if(item.id === id) {
    item.isDone = true;
		localStorage.setItem('todoItems', todoItems);
  }
  return todoItems;
}

function addListItem(description) {
	if (description) {
		id = i++;
		item = {isDone: false, id, description};
		todoItems.push(item);
		localStorage.setItem('todoItems', JSON.stringify(todoItems));	
	}
  return todoItems;
}

function getItemById(id) {
	return localStorage.getItem('todoItems').find(item => item.id === id);
}

function removeFromLocalStorage(id) {
	let remove = localStorage.getItem('todoItems').filter(item => item.id !== id);
	console.log(localStorage.setItem('todoItems', JSON.stringify(remove)));
	return todoItems;
}

function changeDescription(id, description) {
	let newDescription = JSON.parse(localStorage.getItem('todoItems')).map(item => {
    if(item.id === id) {
      item.description = description;
    }
    console.log(item);
    return item;
  });

  localStorage.setItem('todoItems', JSON.stringify(newDescription));
  console.log(todoItems, JSON.stringify(newDescription));
  return todoItems;
}

function hide() {
	rootNode.innerHTML = '';
  if (location.hash.endsWith('#modifyItem')) {
		rootNode.appendChild(modifyItem(item));
  } else if (location.hash.endsWith('#addTask')){
		rootNode.appendChild(addTask());
  } else {
		rootNode.appendChild(preview(todoItems));
  }
}

window.addEventListener('hashchange', hide);
rootNode.appendChild(preview(todoItems));