import axios from 'axios';

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then(resp => {
    const todo: Todo = resp.data;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logToDo(id, title, completed);
  })
  .catch(error => console.log(error.message));

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `)
};

