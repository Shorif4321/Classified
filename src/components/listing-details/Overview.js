import React from 'react';
import { Table } from 'react-bootstrap';
import Amenities from './Amenity';

const Overview = function () {
  return (
    <section className="overview mt-4">
      <h3 className="text-center">Overview</h3>
      <Details />
      <Amenities />
    </section>
  );
};

const Details = function () {
  return (
    <div className="details mb-4">
      <h5>Details</h5>
      <Table striped className="mt-3">
        <tbody>
          <tr>
            <td>Type</td>
            <td>Flat</td>
            <td>Area</td>
            <td>2 Marla</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>PKR 34.5 Lakh</td>
            <td>Purpose</td>
            <td>For Sale</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>B-17, Islamabad, Islamabad Ca...</td>
            <td>Bedroom</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Bath(s)</td>
            <td>1</td>
            <td>Added</td>
            <td>54 minutes ago</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Overview;
