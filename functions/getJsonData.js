const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync('/db.json', 'utf8');

    // Create the response
    const response = {
      statusCode: 200,
      body: jsonData,
    };

    return response;
  } catch (error) {
    // Handle any errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
