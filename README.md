# ServiceNow API Demo

Demo for ServiceNow API.

Before sending an API request, CORS must be configured on your ServiceNow instance.

https://docs.servicenow.com/bundle/kingston-application-development/page/integrate/inbound-rest/task/t_DefineACORSRule.html

Note: the requested domain name must be matched exactly as your configured one. For example: 127.0.0.1 is not the same as localhost!

## Development

Install http-server globally.

    npm install -g http-server

Start http-server.

    http-server ./
