const successCreator = (bodyContent) => {
  return {
    status: 200,
    success: true,
    body: bodyContent,
  };
};

const errorCreator = (errorMessage) => {
  return {
    status: 400,
    success: false,
    body: {
      error: errorMessage,
    },
  };
};

export { successCreator, errorCreator };
