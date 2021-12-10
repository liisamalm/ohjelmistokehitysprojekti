/* Side navigation */

var mini = true;
function toggleSidebar() {
  if (mini) {
    //console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "255px";
    document.getElementById("main").style.marginLeft = "255px";
    this.mini = false;
  } else {
    //console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "75px";
    document.getElementById("main").style.marginLeft = "75px";
    this.mini = true;
  }
}

/* saving data */

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    value.topics = data.getAll("topics");

    console.log({ value });
  }

  const form1 = document.querySelector("form");
  form1.addEventListener("submit", handleSubmit);

const handleFormSubmit = (event) => {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
  
    // TODO: Call our function to get the form data.
    const data = {};
  
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, '  ');
  
    // ...this is where we’d actually do something with the form data...
  };

/*
 * This is where things actually get started. We find the form element using
 * its class name, then attach the `handleFormSubmit()` function to the
 * `submit` event.
 */
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);

//Retrieves input data from a form and returns it as a JSON object.
const formToJSON = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      data[element.name] = element.value;
      return data;
    },
    {},
  );
  
    const handleFormSubmit1 = (event) => {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
  
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
  
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, '  ');
  
    // ...this is where we’d actually do something with the form data...
  };

  const form3 = document.getElementsByClassName('contact-form')[0];
form3.addEventListener('submit', handleFormSubmit1);