import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import ReactPDF from "../../ReactPdf/ReactPDF";
import image from "../../image/faq.png";
import Loading from "../../Loading/Loading";
import { useNavigation } from "react-router-dom";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <section className="container mx-auto px-10 mt-10 md:mt-32 lg:mt-16 mb-8">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt">
        <div className="flex flex-col gap-6  lg:px-0 w-full lg:w-[50%] mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h2 style={{ color: 'red' }}>
                Differences between uncontrolled and controlled components.
              </h2>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                controlled components are those that are managed by a framework, while uncontrolled components are managed by the developer. Controlled components offer better maintainability, security, and stability, while uncontrolled components offer more flexibility and customization options but may require more effort to manage and maintain.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h2 style={{ color: 'red' }}>How to validate React props using PropTypes?</h2>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                PropTypes is a built-in feature in React that allows developers to validate the type and shape of the props being passed to a component. By defining the expected props and their types, PropTypes can detect and flag any errors or mismatches during runtime, helping to catch bugs early.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h2 style={{ color: 'red' }}>Difference between nodejs and express js.?</h2>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                Node.js is a server-side JavaScript runtime environment, while Express.js is a web framework for Node.js. Node.js provides the foundation and runtime environment, while Express.js adds a layer of abstraction to simplify building web applications, providing features like routing, middleware.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h2 style={{ color: 'red' }}>
                What is a custom hook, and why will you create a custom hook?
              </h2>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                A custom hook is a reusable function in React that allows you to encapsulate logic and state within a component and share it between multiple components. Custom hooks promote code reusability, improve code organization, and make code easier to test and maintain. Custom hooks can simplify complex logic, such as API calls or data fetching.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <img className="w-full lg:w-[50%] mx-auto" src={image} alt="" />
        </div>
      </div>
      <PDFDownloadLink document={<ReactPDF></ReactPDF>} fileName="FAQ">
        <div className="flex justify-center mt-6">
          {/* <button className="btn bg-slate-600 mt-4 mb-4 ">Download pdf</button> */}
          <button className="btn btn-outline">
            DOWNLOAD PDF
          </button>
        </div>
      </PDFDownloadLink>
    </section>
  );
};

export default Blog;
