# Adventure Works API
## _Basic User Authentication_

<div style="flex-direction: row;">
<img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="70" height="70"/> &nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"  width="70" height="70"/> &nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"  width="70" height="70"/> &nbsp;&nbsp;
</div>


A small TypeScript API that connects to the MS SQL Server sample database "Adventure Works";

### API Structure: 
- Routes, 
- Controllers, 
- Services, 
- Repositories,
- Models;

![image](https://user-images.githubusercontent.com/51398550/172956695-5954285f-c002-44e9-ac37-07ec88eb08a4.png)

### Liskov Substitution
Each Controller, Service and Repository Implementation has its Abstract Class and its Interface to obey the Liskov Substitution principle;

![image](https://user-images.githubusercontent.com/51398550/172956842-ea714123-8ec8-4b95-8289-3aa4e167271c.png)

### Auth
Authentication was done with Json Web Token based on the Email and Password of the user that comes in the request body;

## References
[TypeScritp](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html)
[Database](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver16&tabs=ssms)
[SOLID Principles](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
[JWToken](https://jwt.io/introduction)
