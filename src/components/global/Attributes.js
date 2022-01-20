import React from 'react';
import { Accordion } from 'react-bootstrap';

const Attributes = function ({ category, subCategory }) {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <div className="attributes mb-4">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>
              {category.toUpperCase()}
              {' '}
              &gt;
              {' '}
              {subCategory.toUpperCase()}
            </small>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <AttributesRow less={!showAll} />
              <AttributesRow less={!showAll} />
              <AttributesRow less={!showAll} />
            </div>
            <div className="mt-2 text-center">
              <button onClick={() => setShowAll(!showAll)} type="button" className="border-0 bg-transparent text-danger fw-bold">
                {showAll ? 'Show Less' : 'Show All'}
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const AttributesRow = function ({ less = true }) {
  return (
    <div className="col-4">
      {
        less ? (
          <>
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
          </>
        ) : (
          <>
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
            <br />
            <small>Lorem, ipsum. (12)</small>
          </>
        )
      }
    </div>
  );
};

export default Attributes;
