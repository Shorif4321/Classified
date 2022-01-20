import React from 'react';
import { Table } from 'react-bootstrap';
import '../../styles/Wallet.css';

const Wallet = function () {
  return (
    <section className="wallet">
      <Overview />
      <LatestTransactions />
    </section>
  );
};

const Overview = function () {
  return (
    <div className="my-2 rounded border text-center p-2 row">
      <div className="col-3">
        <div className="border-end">
          <h6>Earning</h6>
          <h4 className="text-danger">PKR 12000</h4>
        </div>
      </div>
      <div className="col-3">
        <div className="border-end">
          <h6>Pending Earning</h6>
          <h4 className="text-danger">PKR 10000</h4>
        </div>
      </div>
      <div className="col-3">
        <div className="border-end">
          <h6>Spend</h6>
          <h4 className="text-danger">PKR 12000</h4>
        </div>
      </div>
      <div className="col-3">
        <div>
          <h6>Balance</h6>
          <h4 className="text-danger">PKR 2000</h4>
        </div>
      </div>
    </div>
  );
};

const LatestTransactions = function () {
  return (
    <Table striped bordered hover className="my-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>Earning/Expenses</th>
          <th>Net Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12.12.2021</td>
          <td>jf39yh45rf3</td>
          <td>+ 12000</td>
          <td>PKR+ 12000</td>
        </tr>
        <tr>
          <td>12.12.2021</td>
          <td>jf39yh45rf3</td>
          <td>+ 12000</td>
          <td>PKR+ 12000</td>
        </tr>
        <tr>
          <td>12.12.2021</td>
          <td>jf39yh45rf3</td>
          <td>+ 12000</td>
          <td>PKR+ 12000</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Wallet;
