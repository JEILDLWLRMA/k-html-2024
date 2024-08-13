import { Switch, Route } from "wouter";
import { Global, css } from "@emotion/react";

import { Entry } from "./Entry.jsx";
import { Analysis } from "./Analysis.jsx";
import { Counsel } from "./Counsel.jsx";
import { PostingOpen } from "./PostingOpen.jsx";
import { PostingClose } from "./PostingClose.jsx";
import { PostingReview } from "./PostingReview.jsx";
import { Posting } from "./posting.jsx";

import { gray5, white } from "./colors.js";

import "./reset.css";
import "./font.css";

export function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${gray5};

            color: ${white};
            font-family: Pretendard Variable;
          }
        `}
      />
      <Switch>
        <Route path="/">
          <Entry />
        </Route>
        <Route path="/counsel">
          <Counsel />
        </Route>
        <Route path="/analysis">
          <Analysis />
        </Route>
        <Route path="/posting-open">
          <PostingOpen />
        </Route>
        <Route path={"/posting-close"}>
          <PostingClose />
        </Route>
        <Route path={"/posting-review"}>
          <PostingReview />
        </Route>
        <Route path={"/posting"}>
          <Posting />
        </Route>

        <Route>404 Not Found {/* @TODO: Change this to real page */}</Route>
      </Switch>
    </>
  );
}
