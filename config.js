{
	"key": "<YOUR APPLICATION EXTENSION KEY HERE>",
	"metaData": {
		"icon": "images/icon.png",
		"iconSmall": "images/icon_small.png"
	},
	"type": "RESTDECISION",
	"lang": {
		"en-US": {
			"name": "Service Cloud Custom Split",
			"description": "Custom Split activity that makes a decision based on data from Service Cloud"
		}
	},
	"workflowApiVersion": "1.1",
	"configurationArguments": {
		"applicationExtensionKey": "<YOUR APPLICATION EXTENSION KEY HERE>",
		"save": {
			"url": "https://<URL OF THE SERVER RUNNING THE BACKEND>/activity/save",
			"verb": "POST",
			"body": "",
			"useJwt": true,
			"customerKey": "<EXTERNAL KEY OF THE SALT KEY FOR THE JWT>"
		},
		"publish": {
			"url": "https://<URL OF THE SERVER RUNNING THE BACKEND>/activity/publish",
			"verb": "POST",
			"body": "",
			"useJwt": true,
			"customerKey": "<EXTERNAL KEY OF THE SALT KEY FOR THE JWT>"
		},
		"validate": {
			"url": "https://<URL OF THE SERVER RUNNING THE BACKEND>/activity/validate",
			"verb": "POST",
			"body": "",
			"useJwt": true,
			"customerKey": "<EXTERNAL KEY OF THE SALT KEY FOR THE JWT>"
		}
	},
	"wizardSteps": [
		{"key": "eventdefinitionkey", "label": "Event Definition Key"},
		{"key": "idselection", "label": "ID Selection"}
	],
	"outcomes": [
		{
			"arguments": {
				"branchResult": "<KEY FOR PATH 1>"
			},
			"metaData": {
				"label": "<LABEL FOR PATH 1>"
			}
		},
		{
			"arguments": {
				"branchResult": "<KEY FOR PATH 2>"
			},
			"metaData": {
				"label": "<LABEL FOR PATH 2>"
			}
		}
	],
	"userInterfaces": {
		"runningModal": {
			"url": "runningModal.html"
		},
		"runningHover": {
			"url": "runningHover.html"
		}
	},
	"arguments": {
		"execute": {
			"inArguments": [],
			"outArguments": [],
			"url": "https://<URL OF THE SERVER RUNNING THE BACKEND>/activity/execute",
			"verb": "POST",
			"body": "",
			"header": "",
			"format": "json",
			"useJwt": true,
			"customerKey": "<EXTERNAL KEY OF THE SALT KEY FOR THE JWT>",
			"timeout": 90000,
			"retryCount": 5,
			"retryDelay": 100
		}
	},
	"edit": {
		"url": "https://<URL OF THE SERVER RUNNING THE BACKEND>/index.html",
		"height": 200,
		"width": 500
	}
}