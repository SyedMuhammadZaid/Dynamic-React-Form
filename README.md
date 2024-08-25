The form is created using React hook forms and yup for validations.

We just have to provide the JSON as data, rest the form component will handle. This is a pure react component, after matching all the validations of a from it give access to the parent component to get the data of a form using formSubmissionHandler function.

User can provide the genreal custom styling for the fields or even the individual fields can be styled, they will take the precedence over the general styling only for that particular field.

Many input types cases are handled in this form component, rest the user also have a option to pass a custom component, just with the onChange handler and value(if the form is getting used for edit purpose so we have to populate the data as the form load).

The form is handling two cases one for 'add' like if user want to create a new form the second type is 'edit' so in this scenerio the form will be open with the prefilled data based on the value given to the fields.

![image](https://github.com/user-attachments/assets/71f4f83c-cd70-4980-914c-e67eb12e6c30) ![image](https://github.com/user-attachments/assets/d3f80ee5-87bb-419f-9941-e7c347abd851)

