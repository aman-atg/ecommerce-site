import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
