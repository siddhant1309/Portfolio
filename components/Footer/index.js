import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-5">
            {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1> */}
            <h1 className="text-3xl text-bold">
            I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)
            </h1>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">Made With ❤ by{" "}<Link href="http://www.chetanverma.com">change this link<a className="underline underline-offset-1">Siddhant Pathak</a></Link></h1> */}
      <div className="text-center py-3 text-warning">
            &copy; {new Date().getFullYear()} Siddhant Pathak: Thanks for visiting my page :)
      </div>
    </>
  );
};

export default Footer;
