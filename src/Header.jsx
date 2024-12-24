import React from "react";

export default function Header() {
  return (
    <div className="header">
      <form className="search-form" id="search-form-id">
        <input
          type="search"
          placeholder="Enter a city"
          required
          className="search-form-input"
          id="search-form-input-id"
        />
        <input
          type="submit"
          placeholder="Search"
          className="search-form-button"
        />
      </form>
    </div>
  );
}
