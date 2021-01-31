export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "description": "Manutençao de contas",
    "version": "1.0.0",
    "title": "MY-BANK-API",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "sergio.ricardojf@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "localhost:3000",
  "basePath": "",
  "tags": [
    {
      "name": "Contas",
      "description": "Manutenção de contas"
    }
  ],
  "schemes": [
    "https",
    "http"
  ],
  "paths": {
    "/accounts": {
      "post": {
        "tags": [
          "accounts"
        ],
        "summary": "Add a new account",
        "description": "",
        "operationId": "addAccount",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Account object that needs to be added to accounts",
            "required": true,
            "schema": {
              "$ref": "#/accounts/"
            }
          }
        ],
        "responses": {
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "accounts_auth": [
              "write:accounts",
              "read:accounts"
            ]
          }
        ]
      },
      "put": {
        "tags": [
          "accounts"
        ],
        "summary": "Update an existing account",
        "description": "",
        "operationId": "updateAccount",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Account object that needs to be added to the accounts",
            "required": true,
            "schema": {
              "$ref": "#/accounts/update"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Account not found"
          },
          "405": {
            "description": "Validation exception"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:accounts",
              "read:accounts"
            ]
          }
        ]
      },
      "get": {
        "tags": [
          "accounts"
        ],
        "summary": "List all accounts",
        "description": "",
        "operationId": "getAccount",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Account not found"
          },
          "405": {
            "description": "Validation exception"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "read:accounts"
            ]
          }
        ]
      }
    }
  },
  "securityDefinitions": {
    "petstore_auth": {
      "type": "oauth2",
      "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
      "flow": "implicit",
      "scopes": {
        "write:pets": "modify pets in your account",
        "read:pets": "read your pets"
      }
    }
  },
  "definitions": {
    "Account": {
      "type": "object",
      "required": [
        "nome",
        "balance"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "nome": {
          "type": "string",
          "example": "Sérgio Ricardo"
        },
        "balance": {
          "type": "number",
          "format": "floating",
          "example": 10,
          "description": "Saldo da conta"
        }
      },
      "xml": {
        "name": "Account"
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  }
};