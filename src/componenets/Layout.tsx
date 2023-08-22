import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to={"/products"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Products</span>
                </Link>
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to={"/cart"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 256 256"
                    id="IconChangeColor"
                  >
                    <path
                      d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                      id="mainIconPathAttribute"
                    ></path>
                    <circle
                      cx="80"
                      cy="204"
                      r="20"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></circle>
                    <circle
                      cx="184"
                      cy="204"
                      r="20"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></circle>
                    <path
                      d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                      id="mainIconPathAttribute"
                    ></path>
                  </svg>
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">{children}</div>
    </div>
  );
}
