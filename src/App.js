import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./scss/style.scss";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { AuthProvider } from "./common/AuthProvider";
import RoleBasedPrivateRoutes from "./common/RoleBasedPrivateRoutes";
import { ErrorBoundary } from "./common/ErrorBoundary";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const ForgotPassword = React.lazy(() => import("./views/pages/login/ForgotPassword"));

Sentry.init({
  dsn:
    "https://226d4fc4c8f84e83871d6404a19a2441@o485053.ingest.sentry.io/5539103",
  integrations: [new Integrations.BrowserTracing()],

  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({
        eventId: event.event_id,
        lang: "en",
        title:
          "Sorry...there is a bug. I already sent a message to the support team",
        subtitle:
          "Please send your feedback to help us solve the problem soon as possible!",
        subtitle2: "Thanks!",
      });
    }
  },

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <React.Suspense fallback={loading}>
            <Route exact path="/" component={Login} />
            <Route exact path="/forgot_password" component={ForgotPassword} />
            <RoleBasedPrivateRoutes />
          </React.Suspense>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
