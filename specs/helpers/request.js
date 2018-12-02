import request from 'request-promise-native';

/******************************************************************************
 * getRequest - performs a GET request to the specified endpoint
 *
 * @param  {string} uri - endpoint uri to perform GET to
 * @param  {string} Authorization - access token to the api
 * @return {object} response object
 ******************************************************************************/
const getRequest = async (uri = undefined, Authorization = undefined) => {
  const includeHeaders = (body, response) => ({
    response,
    headers: response.headers,
    data: body,
    status: response.statusCode,
  });
  const options = {
    method: 'GET',
    uri: uri,
    headers: {
      Authorization,
      Connection: 'keep-alive',
    },
    json: true,
    transform: includeHeaders,
    resolveWithFullResponse: true,
  }
  return await request(options);
}

/******************************************************************************
 * postRequest - performs a POST request to the specified endpoint
 *
 * @param  {string} uri - endpoint uri to perform POST to
 * @param  {string} Authorization - access token to the api
 * @param  {object} formData - test data object to include in the POST
 * @return {object} response object
 ******************************************************************************/
const postRequest = async (uri = undefined, Authorization = undefined, formData = undefined) => {
  const includeHeaders = (body, response) => ({
    response,
    headers: response.headers,
    data: body,
    status: response.statusCode,
  });
  const options = {
    method: 'POST',
    uri: uri,
    body: formData,
    headers: {
      Authorization,
      Connection: 'keep-alive',
    },
    json: true,
    transform: includeHeaders,
    resolveWithFullResponse: true,
  }
  return await request(options);
}


export {
  postRequest,
  getRequest,
};
