type Protocol = "ws" | "https";

export const getServerUrl = (protocol: Protocol = "ws") => {
  const { REACT_APP_HOST, REACT_APP_PORT } = process.env;

  if (REACT_APP_HOST && REACT_APP_PORT) {
    return `${protocol}://${REACT_APP_HOST}:${REACT_APP_PORT}/`;
  }

  throw new Error(".env file is not configured (check README file)!");
};
