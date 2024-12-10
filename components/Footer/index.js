import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-6 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK TOGETHER
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                YOUR IDEAS. MY CODE.
            </h1>
            <Button type="primary">
                <a href="https://calendly.com/anshprajapati548" target="_blank" rel="noreferrer">
                    Schedule a call</a></Button>
              <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
          <a className="underline underline-offset-1"> &copy; {new Date().getFullYear()} Ansh Prajapati. All rights reserved.</a>
      </h1>
    </>
  );
};

export default Footer;
