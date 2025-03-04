async function submitForm() {
  const name = document.getElementById("name").value;
  const rollnumber = document.getElementById("rollnumber").value;
  const councelloryes = document.getElementById("councelloryes").value;
  document.getElementById('name').value = '';
  document.getElementById('rollnumber').value = '';
  document.getElementById('councelloryes').value = '';
  const formData = {
    name: name,
    rollnumber: rollnumber,
    councelloryes: councelloryes,
  };
  try {
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  } catch (err) {
    console.log(err.message);
  }
}
