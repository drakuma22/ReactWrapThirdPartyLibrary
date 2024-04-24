import UseLodash from "./components/UseLodash";

function App() {
  const data = [1, 2, 3, 4, 5];
  const customOperation = (dataArray: number[]) => {
    return dataArray.map((item) => item * 5);
  };

  const newArray = UseLodash({
    dataArray: data,
    method: "map",
    operation: customOperation,
  });

  return (
    <div>
      {newArray?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
