import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FormSubmissionList } from "./formSubmission/FormSubmissionList";
import { FormSubmissionCreate } from "./formSubmission/FormSubmissionCreate";
import { FormSubmissionEdit } from "./formSubmission/FormSubmissionEdit";
import { FormSubmissionShow } from "./formSubmission/FormSubmissionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"formSample"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FormSubmission"
          list={FormSubmissionList}
          edit={FormSubmissionEdit}
          create={FormSubmissionCreate}
          show={FormSubmissionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
