"use client";
import { MyComponent } from "ssr-unfriendly-stuff";
import { RawAndDistComponent } from "raw-and-dist-src";
import { MyMap } from "leaflet-stuff";

const Page = () => {
  return (
    <span>
      <h1>Welcome to Next.JS</h1>
      <MyComponent />
      <RawAndDistComponent />
      <div style={{ height: "800px" }}>
        <MyMap />
      </div>
    </span>
  );
};

export default Page;
