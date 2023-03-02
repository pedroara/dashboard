# Front End Software Engineer Challenge

> Thank you for your interest in being part of the startup that is transforming the industry in Brazil. "Not knowing is no reason not to do it, on the contrary. It is the first step to expand your skills" - Bruno Felix, Co-Founder of TRACTIAN.

### Context

Whenever you imagine an application for industry, you definitely get the idea of those very old and poorly organized screens. Yes, you figured it out! Fortunately, at TRACTIAN, we don't do that! We think a lot about usability, and it's no wonder that our slogan is to “make the Maintenance Manager's life easier”. Well-made screens are always in your head, so don't go easy!

### **Challenge**

<aside>
📌 **Build an application that shows all possible data and actions using the API created in the back-end challenge.**

</aside>

### **Important:**

- Show all features of assets;
- Show companies, units and users;
- Actions such as delegating responsibility, updating assets, company, unit and users;
- Use graphs to show health levels, status and so on.
- Consume API ([https://github.com/tractian/fake-api](https://github.com/tractian/fake-api))

### **Mandatory:**

- Engine (React)
- Graphics (Highcharts)
- Typescript

### **Differentials:**

- Standard Projects (Clean Code/Clean Architecture)
- AntDesign React

<aside>
💡 Please, be able to abstract well the presented problem and define it yourself which data you consider most important. 
Think with the user's head: What does an industry person need to know about their assets? 
In addition to the required libraries, you can use anything else and at the end publish your code on GitHub and [deploy](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) the application
(Heroku suggestion) because we want to see it online, then send us the links. 🔥

</aside>

## Comments/Annotations

### Assets


- "status": inAlert (Em alerta), inOperation (Em operação), inDowntime (Em parada)
- "healtscore": Saúde em %
- "specifications"
	- "maxTemp": Temperatura Máxima em Celsius
	- "power": Potência em kWh
	- "rpm": RPM
- "metrics"
	- "totalCollectsUptime": Total de Coletas Uptime(Ligada)
	- "totalUptime": Total de Horas de Coletas Uptime(Ligada)
	- "lastUptimeAt": Data da Ultima Coleta Uptime(Ligada)

- As a team member of tractian I'd like to show corelation of low healthscore and inAlert's status and inDowntime's status 
- If I am the owner of this machines I'd like to see average healthscore, 

- Asset's example:

```{
{
		"assignedUserIds": [
			1,
			2,
			3
		],
		"companyId": 1,
		"healthHistory": [
			{
				"status": "inOperation",
				"timestamp": "2022-12-01T00:00:00.000Z"
			},
			{
				"status": "inDowntime",
				"timestamp": "2022-12-08T00:00:00.000Z"
			},
			{
				"status": "inOperation",
				"timestamp": "2022-12-15T00:00:00.000Z"
			},
			{
				"status": "inAlert",
				"timestamp": "2022-12-22T00:00:00.000Z"
			},
			{
				"status": "unplannedStop",
				"timestamp": "2022-12-29T00:00:00.000Z"
			}
		],
		"healthscore": 70,
		"id": 1,
		"image": "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
		"metrics": {
			"lastUptimeAt": "2023-01-01T16:17:50.180Z",
			"totalCollectsUptime": 7516,
			"totalUptime": 1419.620084999977
		},
		"model": "motor",
		"name": "Motor H13D-1",
		"sensors": [
			"GSJ1535"
		],
		"specifications": {
			"maxTemp": 80
		},
		"status": "inAlert",
		"unitId": 1
}
```

### Companies

- Company's example

```{
	{
		"id": 1,
		"name": "The Test Company"
	}
```

### Users 

- User's example:

```{
	{
		companyId: 1,
		email: "testerOne@tractian.com",
		id: 1,
		name: "John Doe",
		unitId: 1,
	}
```

### Units

- Unit's example:

```{
	{
		"companyId": 1,
		"id": 1,
		"name": "Jaguar Unit"
	}
```

### WorkOrder

- If I am the owner of this machines I'd like to see workorders pizza chart to see if they are 100% done, status stats by priority;

- WorkOrder's example:

```{
	{
		"assetId": 5,
		"assignedUserIds": [
			1,
			2,
			3
		],
		"checklist": [
			{
				"completed": true,
				"task": "Inspect Fan for visible damage"
			},
			{
				"completed": true,
				"task": "Test Fan for proper operation"
			},
			{
				"completed": true,
				"task": "Replace damaged parts"
			}
		],
		"description": "The Fan is not working properly and needs to be repaired.",
		"id": 1,
		"priority": "high",
		"status": "completed",
		"title": "Repair Fan D21"
	}
```
