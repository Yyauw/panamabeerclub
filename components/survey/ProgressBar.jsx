export default function ProgressBar({ progress }) {
  return (
    <ul className="timeline mx-auto h-[80px]">
      <li>
        <div
          className={
            progress === 0
              ? "timeline-start timeline-box border-primary"
              : "timeline-start timeline-box"
          }
        >
          Style
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={progress > 0 ? "w-5 h-5 text-primary" : "w-5 h-5"}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {progress > 0 ? <hr className="bg-primary" /> : <hr />}
      </li>
      <li>
        {progress > 0 ? <hr className="bg-primary" /> : <hr />}

        <div
          className={
            progress === 1
              ? "timeline-start timeline-box border-primary"
              : "timeline-start timeline-box"
          }
        >
          Body
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={progress > 1 ? "w-5 h-5 text-primary" : "w-5 h-5"}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {progress > 1 ? <hr className="bg-primary" /> : <hr />}
      </li>
      <li>
        {progress > 1 ? <hr className="bg-primary" /> : <hr />}
        <div
          className={
            progress === 2
              ? "timeline-start timeline-box border-primary"
              : "timeline-start timeline-box"
          }
        >
          Aroma
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={progress > 2 ? "w-5 h-5 text-primary" : "w-5 h-5"}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {progress > 2 ? <hr className="bg-primary" /> : <hr />}
      </li>
      <li>
        {progress > 2 ? <hr className="bg-primary" /> : <hr />}
        <div
          className={
            progress === 3
              ? "timeline-start timeline-box border-primary"
              : "timeline-start timeline-box"
          }
        >
          Ibu
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={progress > 3 ? "w-5 h-5 text-primary" : "w-5 h-5"}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {progress > 3 ? <hr className="bg-primary" /> : <hr />}
      </li>
      <li>
        {progress > 3 ? <hr className="bg-primary" /> : <hr />}
        <div
          className={
            progress === 4
              ? "timeline-start timeline-box border-primary"
              : "timeline-start timeline-box"
          }
        >
          Final
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={progress > 4 ? "w-5 h-5 text-primary" : "w-5 h-5"}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </li>
    </ul>
  );
}
