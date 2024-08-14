import React from "react";
import Filter from "./Filter";
import ArticleSections from "./ArticleSections";
import { ecommerce } from "@/Constants/articles.-constants";

const Articles = () => {
  return (
    <section className="min-h-screen grid grid-cols-4 gap-5 p-7">
      <div className="col-span-4 lg:col-span-1 ">
        <Filter />
      </div>
      <div className="col-span-4 lg:col-span-3 grid grid-cols-1 gap-5">
        <ArticleSections
          title="E-commerce"
          link="/articles/ecommerce"
          data={ecommerce}
        />
        <ArticleSections
          title="Social Media"
          link="/articles/ecommerce"
          data={ecommerce}
        />
        <ArticleSections
          title="Creator Economy"
          link="/articles/ecommerce"
          data={ecommerce}
        />
        <ArticleSections
          title="Email Marketing"
          link="/articles/ecommerce"
          data={ecommerce}
        />
        <ArticleSections
          title="Affiliate Marketing"
          link="/articles/ecommerce"
          data={ecommerce}
        />
      </div>
    </section>
  );
};

export default Articles;
