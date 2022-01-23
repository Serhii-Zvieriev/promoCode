import { useSelector } from "react-redux";
import { getBonus } from "./redux/promocode-selectors";

import { Form } from "./components/Form/Form";
import { Result } from "./components/Result/Result";

function App() {
  const yourBonus = useSelector(getBonus);
  return (
    <>
      <Form />
      {yourBonus && <Result bonus={yourBonus} />}
    </>
  );
}

export default App;
