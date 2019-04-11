# DESAFIO JUREMA

Instalação de dependencias:
    npm i

Inicialização de servidor local com nodemon:
    npm run dev

Chamada inicial GET -> http://localhost:1337/estados
    estados.routes.js com states.getStates()
        Resposta:
        {
            "estados": [
                {
                    "nome": "São Paulo",
                    "uf": "SP"
                },
                {
                    "nome": "Rio de Janeiro",
                    "uf": "RJ"
                },
                {
                    "nome": "Pernambuco",
                    "uf": "PE"
                },
                {
                    "nome": "Bahia",
                    "uf": "BA"
                }
            ],
            "success": true
        }

GET -> http://localhost:1337/populacao/sp
    Resposta:
    {
        "estado": {
            "uf": "SP",
            "populacao": 45538936
        },
        "success": true
    }

Chamada final GET -> http://localhost:1337/estados
    estados.routes.js com states.getStatesPopulation()
        Resposta:
        {
            "estados": [
                {
                    "nome": "São Paulo",
                    "uf": "SP",
                    "populacao": 45538936
                },
                {
                    "nome": "Rio de Janeiro",
                    "uf": "RJ",
                    "populacao": 17159960
                },
                {
                    "nome": "Pernambuco",
                    "uf": "PE",
                    "populacao": 9496294
                },
                {
                    "nome": "Bahia",
                    "uf": "BA",
                    "populacao": 14812617
                }
            ],
            "success": true
        }
