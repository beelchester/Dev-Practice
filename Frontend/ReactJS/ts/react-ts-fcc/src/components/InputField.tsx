import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  changeHandler: (e:React.FormEvent) => void; //! assigning funciton that has no return 
}
// ! assigning types to props
// const InputField = ({todo, setTodo}:Props) => {
// another way
const InputField: React.FC<Props> = ({ todo, setTodo, changeHandler }) => {
  return (
    <form className="flex justify-center items-center" onSubmit={(e)=>changeHandler(e)}>
      <input
        type="text"
        className="w-[50rem] m-16 h-12 rounded-xl px-4"
        placeholder="Enter Task Name"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button className="bg-white w-24 h-12 rounded-xl">Go</button>
    </form>
  );
};

export default InputField;
