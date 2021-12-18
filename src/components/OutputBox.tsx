import { Dispatch, SetStateAction, useEffect } from "react";

type OutputBoxProps = {
  bill: number;
  tip: number;
  numberPeople: number;
  tipAmount: number;
  setTipAmount: Dispatch<SetStateAction<number>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
};

export default function OutputBox(props: OutputBoxProps) {
  const { bill, tip, numberPeople, tipAmount, setTipAmount, total, setTotal } =
    props;

  useEffect((): void => {
    if (bill === 0 || tip === 0 || numberPeople === 0) return setTipAmount(0);
    setTipAmount((bill * tip) / numberPeople);
    setTotal(bill + tipAmount);
  }, [bill, tip, numberPeople, tipAmount]);

  return (
    <div className="bg-[#00474b] ml-1 md:w-64 md:h-64 w-64 h-56 rounded-xl px-5 py-8 flex flex-col justify-between">
      <div id="number">
        <div className="flex justify-between">
          <p className="text-white text-xs">
            Tip Amount <span className="block text-[#6da2a8]">/ person</span>
          </p>
          <p className="text-[#26c2ad] text-3xl font-semibold">
            ${tipAmount % 1 ? tipAmount.toFixed(2) : tipAmount}
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-white text-xs">
            Total <span className="block text-[#6da2a8]">/ person</span>
          </p>
          <p className="text-[#26c2ad] text-3xl font-semibold">
            ${total % 1 ? total.toFixed(2) : total}
          </p>
        </div>
      </div>
      <div id="button">
        <button
          type="button"
          className="uppercase font-bold bg-[#26c2ad] hover:bg-[#009ea3] text-[#00474b] w-full rounded py-1 text-lg"
          onClick={(): void =>
            total && tipAmount !== 0 ? window.location.reload() : undefined
          }
        >
          reset
        </button>
      </div>
    </div>
  );
}
