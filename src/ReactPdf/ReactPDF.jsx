import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  con: { padding: "30px", position: "relative" },
  qn: { fontSize: "25px", fontWeight: "300", display: "block" },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  section: { color: "white", textAlign: "center", margin: 25 },
});

const ReactPDF = () => {
  return (
    <Document>
      <Page style={styles.con}>
        <Text style={styles.qn}>
          1. differences between uncontrolled and controlled components.
        </Text>
        <Text>
          controlled components are those that are managed by a framework, while uncontrolled components are managed by the developer. Controlled components offer better maintainability, security, and stability, while uncontrolled components offer more flexibility and customization options but may require more effort to manage and maintain.
        </Text>
        <Text style={styles.qn}>
          2.How to validate React props using PropTypes?
        </Text>
        <Text>
          PropTypes is a built-in feature in React that allows developers to validate the type and shape of the props being passed to a component. By defining the expected props and their types, PropTypes can detect and flag any errors or mismatches during runtime, helping to catch bugs early.
        </Text>
        <Text style={styles.qn}>
          3. Difference between nodejs and express js?
        </Text>
        <Text>
          Node.js is a server-side JavaScript runtime environment, while Express.js is a web framework for Node.js. Node.js provides the foundation and runtime environment, while Express.js adds a layer of abstraction to simplify building web applications, providing features like routing, middleware, and templating.
        </Text>

        <Text style={styles.qn}>
          4.What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text>
          A custom hook is a reusable function in React that allows you to encapsulate logic and state within a component and share it between multiple components. Custom hooks promote code reusability, improve code organization, and make code easier to test and maintain. Custom hooks can simplify complex logic, such as API calls or data fetching.
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default ReactPDF;
