import { FC, useState, useEffect } from "react";

// components
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

const App: FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [numberPeople, setNumberPeople] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect((): void => {
    if (bill === 0 || tip === 0 || numberPeople === 0) {
      setTipAmount(0);
      return setTotal(0);
    }
    setTipAmount((bill * tip) / numberPeople);
    setTotal(bill + tipAmount);
  }, [bill, tip, numberPeople]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="m-auto">
        <h1 className="text-center mb-5 text-3xl text-[#577472] font-bold">
          Calculator Tip
        </h1>
        <main className="grid md:grid-cols-2 grid-cols-1 gap-2 place-items-center bg-[#ffffff] rounded-xl p-4">
          <InputBox
            bill={bill}
            tip={tip}
            numberPeople={numberPeople}
            setBill={setBill}
            setTip={setTip}
            setNumberPeople={setNumberPeople}
          />
          <OutputBox tipAmount={tipAmount} total={total} />
        </main>
      </div>
    </div>
  );
};

export default App;
