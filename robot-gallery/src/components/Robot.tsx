import React from "react";

interface RobotProps {
  id: number,
  name: string,
  email: string
}

// FC为函数式组件的缩写
// (props) => { const id = props.id ...}
const Robot: React.FC<RobotProps> = ({ id, name, email}) => {
  return <li>
    <img alt="robot" src={`https://robohash.org/${id}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </li>
}

export default Robot;