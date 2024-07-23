export const newsLetter = (name, email, phone, company) => {
  return (`<!DOCTYPE html>
        <html lang="en-US">
          <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <title>Credentials for Login</title>
            <meta name="description" content="" />
            <style type="text/css">
              a:hover {
                text-decoration: underline !important;
              }
            </style>
          </head>
        
          <body
            marginheight="0"
            topmargin="0"
            marginwidth="0"
            style="margin: 0px; background-color: #f2f3f8"
            leftmargin="0"
          > 
          <p>Thanks for Signing Up. Here are the following Details.</p>
          <br/>
          <br/>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Company: ${company}</p>
          <br/>
          <br/>
          <p>Spaces designed for connection. Designed for engagement. Designed for work.</p>
          <p>Email - sales@2gethr.co.in. Phone - 1800 309 3446. Address - Tower B,Mantri Commercio, Bellandur Bangalore</p>
          <br/>
          </body>
        </html>`);
}
