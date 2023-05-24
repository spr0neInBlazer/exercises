const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkEmailValidity();
  if (checkEmailValidity()) {
    sendEmail();
  } else {
    alert('Please enter valid email')
  }
})

// taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
function checkEmailValidity() {
  if (emailInput.value) {
    let result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(emailInput.value);
    return result;
  } else {
    return false;
  }
}

function sendEmail() {
  Email.send({
    SecureToken : "ab2816f0-699d-4fbb-a5da-7b59306337fb",
    To : `${emailInput.value}`,
    From : "pizzaoclock69@gmail.com",
    Subject : "Exercise 1 - Email HTML",
    Body : `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light only">
      <title>Exercise 1 - Email HTML</title>
      <style>
        :root {
          color-scheme: light only;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          a:hover {
            color:#7800F4 !important;
          }
          @media (prefers-color-scheme: dark) {
            img { 
              background-color: white !important; 
            }
          }
      </style>
    </head>
    <body style="border-radius: 10px;">
      <table style="border-collapse: collapse; margin: 0 auto; max-width: 350px;">
        <tbody style="background-color: #F2F2F2;">
          <tr>
            <th style="padding: 20px ">
              <img src="https://i.ibb.co/ZKtHb0v/ijovi-logo.jpg" style="border-radius: 50%;
                border: 2px solid #7800F4;
                box-shadow: 4px 5px 8px 0px rgba(0,0,0,0.75);
                display: inline-block;
                width: 100px;
                height: 100px;
                object-fit: contain;
                background-color: white" 
              alt="logo">
            </th>
            <td style="color:#7800F4; font-size: 16px; font-weight: 700; padding: 20px">
              <h2>Healthcare</h2>
              <h2>Communication</h2>
              <h2>Partner</h2>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: center; padding: 30px 20px; font-style: italic">
              <a href="https://www.ijovi.com" target="_blank" style="color: #404040; transition: .2s; font-size: 16px">
                <b>Click</b> to learn more
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>`
})
  .then(alert('The letter has been sent. Check your inbox or spam'));
}