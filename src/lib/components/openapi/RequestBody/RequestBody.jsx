import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import s from './RequestBody.css';


function RequestBody(props) {
  const className = classnames(s.requestBody, props.className);
  return (
    <div className={className}>
      <CommonMark>{ props.description }</CommonMark>
    </div>
  );
}
RequestBody.propTypes = {
  description: PropTypes.string,
  content: PropTypes.object,
  required: PropTypes.bool,
};
RequestBody.defaultProps = {
  required: true
};


export default RequestBody;
