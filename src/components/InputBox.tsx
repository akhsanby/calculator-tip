import { Dispatch, SetStateAction, ChangeEvent } from "react";

type InputBoxProps = {
  bill: number;
  setBill: Dispatch<SetStateAction<number>>;
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
  numberPeople: number;
  setNumberPeople: Dispatch<SetStateAction<number>>;
};

export default function InputBox(props: InputBoxProps) {
  const { bill, setBill, tip, setTip, numberPeople, setNumberPeople } = props;

  const handleChangeBill = (event: ChangeEvent<HTMLInputElement>): void => {
    if (Number.isNaN(bill)) return setBill(0);
    setBill(Number(event.target.value));
  };

  const handleChangeTip = (value: number): void => {
    setTip(value / 100);
  };

  const handleChangeTipCustom = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    if (Number(event.target.value) < 1) {
      alert("Please input number 1 until 100");
      event.target.value = "1";
    } else if (Number(event.target.value) > 100) {
      alert("Please input number 1 until 100");
      event.target.value = "100";
    }
    setTip(Number(event.target.value) / 100);
  };

  const handleChangePeople = (event: ChangeEvent<HTMLInputElement>): void => {
    if (Number.isNaN(numberPeople)) return setNumberPeople(0);
    setNumberPeople(Number(event.target.value));
  };

  return (
    <div className="bg-white p-2 mr-1 w-64 h-64 flex flex-col justify-around">
      <section>
        <p className="text-xs mb-2 text-[#577472] font-semibold">Bill</p>
        <i className="bi bi-currency-dollar text-[#a0bebe] absolute translate-y-2 translate-x-2"></i>
        <input
          type="text"
          className="bg-[#f3f8fb] text-[#00474b] rounded text-right px-4 py-2 w-full font-semibold"
          onChange={handleChangeBill}
          value={bill}
        />
      </section>
      <section className="my-4">
        <p className="text-xs mb-2 text-[#256965] font-semibold">
          Select Tip %
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[5, 10, 15, 25, 50].map((value: number, i: number) => (
            <button
              key={i}
              type="button"
              className={`${
                tip * 100 === value ? "bg-[#26c1ad]" : "bg-[#00474b]"
              } hover:bg-[#26c1ad] text-white hover:text-[#004144] rounded font-medium sm:py-[3px] md:py-0`}
              onClick={(): void => handleChangeTip(value)}
            >
              {value}%
            </button>
          ))}
          <input
            id="inputField"
            type="number"
            className="text-center bg-[#f3f8fb] text-[#577472] font-semibold"
            placeholder="Custom"
            onChange={handleChangeTipCustom}
          />
        </div>
      </section>
      <section>
        <p className="text-xs mb-2 text-[#577472] font-semibold">
          Number of People
        </p>
        <i className="bi bi-people-fill text-[#a0bebe] absolute translate-y-2 translate-x-2"></i>
        <input
          type="text"
          className="bg-[#f3f8fb] text-[#00474b] text-right px-4 py-2 rounded p-1 w-full font-semibold"
          onChange={handleChangePeople}
          value={numberPeople}
        />
      </section>
    </div>
  );
}
