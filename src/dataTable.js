import React from "react";
import { startCase } from "lodash";

const DataTable = ({ data }) => (
  <section>
    <table>
      <thead>
        <tr>
          <td>I have your data:</td> <br />
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value], idx) => (
          <tr key={idx}>
            <td>{startCase(key)}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default DataTable;
