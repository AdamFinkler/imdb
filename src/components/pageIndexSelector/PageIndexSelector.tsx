import React, { useState } from "react";
import "./pageIndexSelector.scss";
import IndexBox from "./IndexBox";

interface pageIndexProps {
  handlePage: (index: number) => void;
  pageIndex: number;
}
const PageIndexSelector = ({ handlePage, pageIndex }: pageIndexProps) => {
  const [Selected, setIsSelected] = useState<number>(1);
  return (
    <div className="page-index-selector-container">
      <IndexBox index={1} selectedPage = {pageIndex}  handlePage={ handlePage}/>
      <IndexBox index={2} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={3} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={4} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={5} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={6} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={7} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={8} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={9} selectedPage = {pageIndex} handlePage={ handlePage}/>
      <IndexBox index={10} selectedPage = {pageIndex} handlePage={ handlePage}/>
    </div>
  );
};

export default PageIndexSelector;
