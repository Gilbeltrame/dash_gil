import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

type User = { //Criando a tipagem da fake data que o servidor vai criar
  name: string;
  email: string;
  created_at: string;
}

export function makeServer(){
  const server = createServer({

    models:{
      user: Model.extend<Partial<User>>({ //O partial serve para dizer que a info nem sempre vai ter todos os campos do tipo User

      })
    },

    factories: { //factories fabricam dados em massa, criamos o tipo user com nome email e data de criação
      user: Factory.extend({
        name() {
          return  faker.name.firstName()
        },
        email() {
          const email = faker.internet.email()
          return email.toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      })
    },

    seeds(server){
      server.createList('user', 200) //geramos os dados da factory "user" no fake servidor, um total de 200 users
    },

    routes(){
      this.namespace = 'api'; // nada mais que o localhost:3000/api pra fazer o fetch
      this.timing = 750; // bom dar um timing em ms pra testar loaders, spinners etc na tela

      this.get('/users', function(schema, request){
        const { page = 1, per_page=10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count' : String(total) },
          {users}
        )
        
      });
      this.post('/users');

      this.namespace = ''; //por causa do next.js temos que usar
      this.passthrough(); //fazer com que todas chamadas com a rota passem pelo mirage e se não forem detectadas, passem adiante sem erro.
    }
  })

  return server;
}