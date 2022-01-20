import React from 'react';
import { Table } from 'react-bootstrap';

const AdPreview = function ({ location }) {
  console.log(sessionStorage.getItem('upload image'));
  return (
    <div className="m-4">
      <h4 className="text-center">{sessionStorage.getItem('title*')}</h4>
      <Table striped className="my-4">
        <tbody>
          <tr>
            <td>Make</td>
            <td>{sessionStorage.getItem('make*')}</td>
            <td>Model</td>
            <td>{sessionStorage.getItem('model*')}</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>{sessionStorage.getItem('color')}</td>
            <td>Condition</td>
            <td>{sessionStorage.getItem('condition')}</td>
          </tr>
          <tr>
            <td>Warranty</td>
            <td>{sessionStorage.getItem('warranty')}</td>
            <td>Cable</td>
            <td>{sessionStorage.getItem('cable') === 'true' ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Charger</td>
            <td>{sessionStorage.getItem('charger') === 'true' ? 'Yes' : 'No'}</td>
            <td>Hands Free</td>
            <td>{sessionStorage.getItem('hand free') === 'true' ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Box</td>
            <td>{sessionStorage.getItem('box') === 'true' ? 'Yes' : 'No'}</td>
            <td>OS</td>
            <td>{sessionStorage.getItem('os')}</td>
          </tr>
          <tr>
            <td>Frequency</td>
            <td>{sessionStorage.getItem('frequency')}</td>
            <td>Screen Size</td>
            <td>{sessionStorage.getItem('screen size')}</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>{sessionStorage.getItem('processor')}</td>
            <td>RAM</td>
            <td>{sessionStorage.getItem('ram')}</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>{sessionStorage.getItem('storage')}</td>
            <td>Camera</td>
            <td>
              {sessionStorage.getItem('front camera')}
              {' '}
              (Front)
              {'  '}
              {sessionStorage.getItem('rear camera')}
              {' '}
              (Rear)
            </td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>{sessionStorage.getItem('battery capacity')}</td>
            <td>USB Type</td>
            <td>{sessionStorage.getItem('usb type')}</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>{sessionStorage.getItem('processor')}</td>
            <td>Fingerprint</td>
            <td>{sessionStorage.getItem('fingerprint')}</td>
          </tr>
        </tbody>
      </Table>
      <h5>Description</h5>
      <p>{sessionStorage.getItem('description')}</p>
      <div className="seller-info rounded shadow-sm p-3 px-0">
        <h5>Seller Information</h5>
        <h6>
          Name:
          {' '}
          {sessionStorage.getItem('name*')}
        </h6>
        <h6>
          Location:
          {' '}
          {location}
        </h6>
      </div>
    </div>
  );
};

export default AdPreview;
