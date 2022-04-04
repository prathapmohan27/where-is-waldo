interface propsInterface {
  obj: {
    name: string;
    mins: number;
    sec: number;
    total?: number;
  };
  i: number;
}

const List = ({ obj, i }: propsInterface) => {
  return (
    <li>
      <span>{`${i + 1}.`}</span>
      <span>{obj.name}</span>
      <span>
        {String(obj.mins).padStart(2, '0')}:{String(obj.sec).padStart(2, '0')}
      </span>
    </li>
  );
};

export default List;
