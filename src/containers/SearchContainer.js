import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';


const mapDispatchToProps = {
  handleSearchInputChange: handleVideoSearch
};

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
