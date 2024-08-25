// DynamicForm Component Usage Template
// The DynamicForm component allows for dynamic form creation by passing a data object that defines the form structure, validation, and styles.

// Props:
// data: (Object) - Contains the form's configuration, including fields, styles, and validation schema.
// type: (String, optional) - Defines the form type, e.g., 'create' or 'edit'.
// submissionButtonText: (String, optional) - Text to display on the submission button.
// submissionButtonClassName: (String, optional) - CSS class for the submission button.
// submissionButtonStyle: (Object, optional) - Inline styles for the submission button.
// submissionHandler: (Function) - Callback function executed on form submission.
// formProps: (Object, optional) - Additional props to spread over the form element.

// Field Configuration:
// Each field in the data.fields array is an object that can contain the following:

// 1. Form Title (Optional)
// title.content: The text content for the form title.
// title.style: CSS styles for the title.
// title.className: CSS classes for the title.

// 2. Form Styles
// style.commonFieldStyles: Common CSS styles for all form fields.
// style.commonFieldErrorStyles: Common CSS styles for error messages.
// footer.style: CSS styles for the form footer (e.g., where the submit button is placed).

// 3. Form Fields
// Each field is defined in the fields array with the following properties:

// type: Type of the form field (text, number, email, password, select, textarea, custom).
// name: Name of the form field, used as the key for form data.
// label: The label text for the form field.
// style: Individual styles for the form field.
// placeholder: Placeholder text for the input.
// icon: Optional icon element to display inside the input.
// iconStyle: Styles for the icon.
// iconProps: Additional props for the icon (e.g., onClick event for toggling password visibility).
// inputProps: Additional input-specific props (e.g., rows for a textarea).
// value: Default value of the field (used for editing existing data).

// 4. Custom Components
// type: 'custom': Use for custom React components like date pickers or other complex inputs.
// customComponent: The custom component to render.

// 5. Validation Schema (Optional)
// Define the validation rules using Yup for each field.

// 6. Submission Handling
// submissionHandler: Function to handle form submission.
// submissionButtonText: Text for the submit button.
// submissionButtonClassName: CSS class for the submit button.
// submissionButtonStyle: Inline styles for the submit button.