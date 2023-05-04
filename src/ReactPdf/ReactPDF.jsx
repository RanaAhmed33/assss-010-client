import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  con: { padding: "30px", position: "relative" },
  qn: { fontSize: "30px", fontWeight: "500", display: "block" },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  section: { color: "white", textAlign: "center", margin: 30 },
});

const ReactPDF = () => {
  return (
    <Document>
      <Page style={styles.con}>
        <Text style={styles.qn}>
          1. differences between uncontrolled and controlled components.
        </Text>
        <Text>
          1. Uncontrolled Components: State Management: Uncontrolled components
          manage their own state internally, independent of React's state
          management. They typically utilize the traditional DOM elements, such
          as input fields, checkboxes, and select dropdowns. Refs: Uncontrolled
          components can make use of the ref attribute to access the current
          value or state of the DOM element. However, they don't rely on refs
          for updating or manipulating their state. Simplicity: Uncontrolled
          components are generally simpler to implement, as they don't require
          additional event handlers or state management logic. Data Flow: Since
          the state is managed internally, the parent component doesn't have
          direct control over the child component's state. To access the data
          from an uncontrolled component, you would typically use event handlers
          or callbacks. 2. Controlled Components: State Management: Controlled
          components rely on the parent component to manage their state. The
          parent component passes the state value as props to the controlled
          component and also provides an event handler to update the state.
          State Update: Controlled components update their state only through
          the event handlers provided by the parent component. They don't have
          their internal state. Validation and Manipulation: Controlled
          components enable more control and flexibility for validation and
          manipulation of the input values before updating the state. Data Flow:
          The parent component has direct control over the state of the
          controlled component. It can access the current state value, modify
          it, or use it in any way desired.
        </Text>
        <Text style={styles.qn}>
          2.How to validate React props using PropTypes?
        </Text>
        <Text>
          Import the PropTypes module from the prop-types package into your
          React component file: Define the PropTypes for your component by
          creating a static propTypes object within your component class or
          function component: Custom hooks can be used to encapsulate any
          reusable logic that involves state or side effects, such as fetching
          data from an API or managing a form's state. By creating custom hooks,
          you can abstract away the implementation details and create a clean,
          reusable API for your components to use. PropTypes are mainly used for
          development-time debugging and documenting your component's API. They
          are not enforced in production builds, so it's recommended to use
          other techniques like TypeScript or runtime type-checking libraries
          (e.g., TypeScript, Flow, or Joi) if you need more robust and
          runtime-enforced prop validation.
        </Text>
        <Text style={styles.qn}>
          3. Difference between nodejs and express js?
        </Text>
        <Text>
          1. Node.js:
          <br />
          Node.js is a runtime environment that allows you to run JavaScript on
          the server-side. It uses the V8 JavaScript engine, the same engine
          that powers Google Chrome, to execute JavaScript code outside of the
          browser. Node.js provides a rich set of built-in modules and APIs that
          enable server-side programming, file system operations, networking,
          and more. It allows you to build scalable and efficient server
          applications. Express.js: 2. Express.js is a minimalist web
          application framework built on top of Node.js. It provides a simple
          and flexible way to build web applications and APIs. Express.js adds a
          layer of abstraction to Node.js, simplifying the process of handling
          HTTP requests, routing, and middleware.
        </Text>

        <Text style={styles.qn}>
          4.What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text>
          In React, a custom hook is a JavaScript function that utilizes React's
          built-in hooks (such as useState, useEffect, useContext, etc.) and
          allows you to encapsulate and reuse logic in your components. Custom
          hooks are a way to extract and share common stateful or side-effect
          logic across multiple components without duplicating code. Here are a
          few reasons why you might want to create a custom hook: 1.Reusability:
          If you find yourself writing similar logic in multiple components,
          creating a custom hook allows you to encapsulate that logic in a
          single place and reuse it across different components. This promotes
          code reusability and reduces duplication. 2.Abstraction: Custom hooks
          provide a way to abstract complex logic into a single function, making
          your component code cleaner and more focused on its specific
          responsibilities. By abstracting the implementation details into a
          custom hook, the component code becomes easier to read and understand.
          3.Code Organization: As your components grow in complexity, they might
          have several useEffect, useState, or other hooks that handle different
          aspects of the component's behavior. Creating a custom hook allows you
          to separate and organize this logic into smaller, reusable functions,
          improving the maintainability and readability of your codebase.
          4.Shareable Logic: Custom hooks can be shared across projects or with
          the larger community. If you've developed a useful piece of logic that
          can benefit others, packaging it as a custom hook allows other
          developers to easily incorporate and leverage that logic in their own
          projects.
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
