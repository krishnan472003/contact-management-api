To use the API endpoints you provided, you would need to have a basic understanding of Node.js, Express.js, MongoDB, and Mongoose. Assuming you have these prerequisites, here's a brief documentation on how to use each of the endpoints:

1. Update a contact:
   * Endpoint: `/update`
   * Method: `POST`
   * Parameters:
     * `oemail`: the original email of the contact to be updated
     * `nemail`: the new email to be updated for the contact
   * Response:
     * `200`: if the contact is successfully updated
     * `404`: if the contact is not found in the database
     * `500`: if there is an error while updating the contact in the database
   * Example usage:
   
     ```
     const data = {
         oemail: "john.doe@example.com",
         nemail: "john.doe.newemail@example.com"
     };

     fetch('/update', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
             'Content-Type': 'application/json'
         }
     })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
     ```
     
2. Retrieve all contacts:
   * Endpoint: `/retrieve`
   * Method: `GET`
   * Parameters: none
   * Response:
     * an array of all contacts in the database
   * Example usage:
   
     ```
     fetch('/retrieve')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
     ```
     
3. Delete a contact:
   * Endpoint: `/delete`
   * Method: `POST`
   * Parameters:
     * `email`: the email of the contact to be deleted
   * Response:
     * `200`: if the contact is successfully deleted
     * `404`: if the contact is not found in the database
     * `500`: if there is an error while deleting the contact from the database
   * Example usage:
   
     ```
     const data = {
         email: "john.doe@example.com"
     };

     fetch('/delete', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
             'Content-Type': 'application/json'
         }
     })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
     ```
     
4. Add a new contact:
   * Endpoint: `/add`
   * Method: `POST`
   * Parameters:
     * `name`: the name of the contact to be added
     * `email`: the email of the contact to be added
     * `number`: the phone number of the contact to be added
   * Response: none
   * Example usage:
   
     ```
     const data = {
         name: "John Doe",
         email: "john.doe@example.com",
         number: "1234567890"
     };

     fetch('/add', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
             'Content-Type': 'application/json'
         }
     })
     .then(() => console.log('Contact added successfully'))
     .catch(error => console.error(error));
     ```
