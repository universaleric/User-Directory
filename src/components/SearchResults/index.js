import React from "react";
import "./style.css";

function SearchResults(props) {
  let employees = props.results;
  employees = employees.filter(
    (employee) =>
      employee.name.first.toLowerCase().includes(props.search.toLowerCase()) ===
        true ||
      employee.name.last.toLowerCase().includes(props.search.toLowerCase()) ===
        true
  );
  let employeeRow = employees.map((employee) => (
    <tr key={employee.cell}>
      <td>
        <img
          alt="User"
          src={employee.picture.thumbnail}
          className="img-fluid"
        />
      </td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.cell}</td>
      <td>{employee.email}</td>
    </tr>
  ));
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">
              First Name<span onClick={props.sort}>🔽</span>
            </th>
            <th scope="col">
              Last Name<span>🔽</span>
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>{employeeRow}</tbody>
      </table>
    </div>
  );
}

export default SearchResults;
