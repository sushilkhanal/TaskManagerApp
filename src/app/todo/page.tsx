import TodoComponent from "../component/TodoComponent";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const dataRes = await response.json();
  return dataRes;
}
export default async function Todo() {
  const data = await getData();
  return (
    <>
      <TodoComponent data={data} />
    </>
  );
}
