# Single-modal-popup-using-bootstrap

Prerequisites
----------------
	• Basic knowledge of HTML, CSS, and JavaScript
	• Bootstrap 5 (or a compatible version)
	
Implementation Steps
-------------------------

1. Include Bootstrap in Your Project
	To use Bootstrap, include its CSS and JavaScript files in your project.
	
2. Create the Modal Trigger Button
	This button will open the modal when clicked.
	
3. Define the Modal Structure
The following HTML defines the modal with a header, body, and footer.

4. Custom CSS (Optional)
To style the modal, you can use custom CSS.



• Button (data-bs-toggle and data-bs-target): Triggers the modal when clicked.
• Modal Structure:
	○ .modal class: Defines the modal container.
	○ .modal-dialog: Controls the modal layout.
	○ .modal-content: Holds the header, body, and footer.
	○ .btn-close: Closes the modal.
• JavaScript Functionality: Bootstrap handles modal open/close behavior automatically.


How It Works
-------------------
	1. The user clicks the Open Modal button.
	2. The modal appears with a fade-in effect.
	3. The user can close the modal by:
		○ Clicking the close button (x).
		○ Clicking the Close button in the footer.
		○ Pressing the ESC key.
	4. The modal disappears when closed.
