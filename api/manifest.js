module.exports = {
    server: {
        app: {
            slogan: "Don't get hit!"
        }
    },
    connections: [
        {
            port: process.env.API_PORT || 3000,
            labels: ['api']
        }
    ],
    registrations: [
        {
            plugin: {
                register: "vision"    
            }
        },
        {
            plugin: {
                register: "inert"    
            }
        },
        {
            plugin: {
                register: "lout",
                options: {
                    endpoint: "/documentation"
                }
            }
        },
        {
            plugin: {
                register: "./user"
            },
            options: {
                select: ['api'],
                routes: {
                    prefix: "/users"
                }
            }
        },
        {
            plugin: {
                register: "good",
                options: {
                    requestHeaders: true,
                    reporters: [
                        {
                            // reports to console which is used by PM2 logs
                            reporter: "good-console",
                            events: { 
                                response: "*",
                                log: "*", 
                                error: "*" 
                            }
                        }
                    ]
                }
            }
        }
    ]
};