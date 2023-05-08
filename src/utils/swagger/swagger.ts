export = (url: string) => {
    return {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Find Jobs REST API",
                version: "1.0.0",
                description:
                    "This is a simple API application made with Express and documented with Swagger"
            },
            servers: [
                {
                    url: url
                },
            ],
            components: {
                schemas: {
                    User: {
                        type: 'object',
                        required: ['name', 'email', 'password'],
                        properties: {
                            name: {
                                type: 'string',
                                description: 'user name'
                            },
                            email: {
                                type: 'string',
                                description: 'user mail'
                            },
                            password: {
                                type: 'string',
                                description: 'user password'
                            },
                        },
                        example: {
                            name: 'John Doe',
                            email: 'JohnDoe@gmail.com',
                            password: 'JohnDoe@123'
                        }
                    },
                    Login: {
                        type: 'object',
                        required: ['email', 'password'],
                        properties: {
                            email: {
                                type: 'string',
                                description: 'user mail'
                            },
                            password: {
                                type: 'string',
                                description: 'user password'
                            },
                        },
                        example: {
                            email: 'JohnDoe@gmail.com',
                            password: 'JohnDoe@123'
                        }
                    },
                    CartProduct: {
                        type: 'object',
                        required: ['productId', 'productQuantity'],
                        properties: {
                            productId: {
                                type: 'string',
                                description: 'product id'
                            },
                            productQuantity: {
                                type: 'string',
                                description: 'product quatity'
                            },
                        },
                        example: {
                            productId: '',
                            productQuantity: 2
                        }
                    },
                    Cart: {
                        type: 'object',
                        required: ['products'],
                        properties: {
                            products: {
                                type: '#/components/schemas/CartProduct',
                                description: 'cart products'
                            },
                        },
                        example: {
                            productId: '',
                            productQuantity: 2
                        }
                    },
                },
                responses: {
                    400: {
                        description: 'Missing API key - include it in the Authorization header',
                        contents: 'application/json'
                    },
                    401: {
                        description: 'Unauthorized - incorrect API key or incorrect format',
                        contents: 'application/json'
                    },
                    404: {
                        description: 'Not found - the book was not found',
                        contents: 'application/json'
                    }
                },
                securitySchemes: {
                    ApiKeyAuth: {
                        type: 'apiKey',
                        in: 'header',
                        name: 'Authorization'
                    }
                }
            },
            security: [{
                ApiKeyAuth: []
            }]
        },
        apis: ["./src/routes/*.ts"],
    }
}
