import TableItem from "./TableItem";

export default function Table({
  tableHeadFields,
  tableRowItems,
  type,
  deleteUser,
}) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {tableHeadFields.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableRowItems.map((item, index) => (
              <TableItem
                key={item._id}
                data={item}
                keys={tableHeadFields}
                index={index}
                type={type}
                deleteUser={deleteUser}
              ></TableItem>
            ))}

            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
