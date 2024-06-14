"use client";
import Link from "next/link";

export default function TableItem({ data, keys, index, type, deleteItem }) {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        {keys.map((key) => {
          return (
            <>
              <td key={data[key]}>{data[key]}</td>
            </>
          );
        })}
        <th>
          <Link href={type + "/" + data._id} className="btn btn-primary btn-xs">
            Edit
          </Link>
          <button
            onClick={() => deleteItem(data._id)}
            className="btn btn-error text-white btn-xs ms-1"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
}
