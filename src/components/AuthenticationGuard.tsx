import React, { ReactNode, ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface AuthenticationGuardProps {
  component: ComponentType<any>; }

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting to Login Page...</div>,
  });

  return <Component />;
};

export default AuthenticationGuard;
