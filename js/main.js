let month = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','ноябрь','декабрь']
	let dateLog = new Date();
	let date = dateLog.getDate() + " " + month[dateLog.getMonth()-1] + " " + dateLog.getFullYear();
	let addComment = document.getElementById("addComment");

	let inputText = document.getElementById("addInput");
	let inputName = document.getElementById("addInputName");

	addComment.addEventListener("click",function(){

			let todoText = inputText.value
			let todoName = inputName.value

			let todo = document.createElement("DIV")
			todo.classList.add("reviews")

			let first = document.createElement("DIV")
			first.classList.add("reviews__messages")
			let name = document.createElement("P")
			name.innerHTML = todoName + ""

			let dateText = document.createElement("SPAN")
			dateText.innerHTML = date + ""

			let last = document.createElement("DIV")
			last.classList.add("reviews__text-message")
			let text = document.createElement("P")
			text.innerHTML = todoText + ""

			if (todoText !== '' && todoText !== ' ' && todoName !== '' && todoName !== ' ') {
				first.append(name, dateText)
				last.append(text)
				todo.append(first, last)
				comments.append(todo)
			}
	})