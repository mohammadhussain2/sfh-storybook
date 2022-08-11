import React from 'react';
// import '../../../assets/styles/style.css'
export const Checkbox = () => {
  return (
    <>
      <label className="c-control c-control--checkbox">
        <input
          className="c-control__input"
          type="checkbox"
          data-testid="checkbox"
          name="hello"
          id="#hello"
        />
        <span className="c-control__fake-input "></span>
        {true && (
          <span className="c-control__label">
            <div className="c-control__label-has-profiles">
              <span>Hello 12</span>
            </div>
          </span>
        )}

<button className="c-button c-button--square">
  <span className="u-screen-reader-text">Cancel card</span>
</button>
      </label>
    </>
  );
};
