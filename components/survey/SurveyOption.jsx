export default function SurveyOption({ value = undefined, children }) {
  return (
    <div className="form-control bg-black p-3 w-100 my-auto rounded-md">
      <label className="label cursor-pointer">
        <span className="label-text text-xl">{children}</span>
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-primary"
          value={value}
        />
      </label>
    </div>
  );
}
