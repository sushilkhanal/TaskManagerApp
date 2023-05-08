import { FormComponent } from "../component/FormComponent";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <h1>Todo App</h1>
        <FormComponent />
        {children}
      </body>
    </html>
  );
}
