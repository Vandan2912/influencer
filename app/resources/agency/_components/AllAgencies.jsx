import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const AllAgencies = () => {
  return (
    <section className="mb-10">
      <div className="flex mt-20 my-10 justify-center items-center gap-10 w-full">
        <hr className="w-32 border-black" />
        <p className="text-xl font-bold">VIEW ALL AGENCY AREAS OF EXPERTISE</p>
        <hr className="w-32 border-black" />
      </div>

      <table id="customers">
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="">All Digital Marketing Agencies </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Marketing Strategy </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Digital Strategy</a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Conversion Optimization </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Public Relations</a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Business Consulting </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">BI & Big Data Consulting & SI </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              Market Research <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">CRM Consulting and SI </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Mobile & App Marketing </a>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AllAgencies;
