export const executeRequest = (client, clientFunc, request, metadata = {}) => {
  let responseStatus = null;
  let response = null;

  clientFunc = clientFunc.bind(client);

  return new Promise((resolve, reject) => {

    const call = clientFunc(request, metadata, function (err, resp) {
      if (err) {
        // console.log(err.code);
        // console.log(err.message);
        reject(err);
      } else {
        // console.log(resp);
        response = resp;
        if (responseStatus) {
          resolve({response, status: responseStatus});
        }
      }
    });

    call.on('status', function (status) {
      // console.log({code: status.code});
      // console.log({details: status.details});
      // console.log({metadata: status.metadata});
      responseStatus = status;
      if (response) {
        resolve({response, status: responseStatus});
      }
    });
  });
};
