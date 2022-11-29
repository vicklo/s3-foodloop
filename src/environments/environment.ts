import {domain,clientId} from '../../auth_config'
export const environment = {
  production: false,
  auth:
  {
    domain,
    clientId,
    redirectUri: `http://localhost:4200/register`
  },
  apiBaseUrl: "http://localhost:3000",
  apiSecret: "i8h6EFqBwDWq2H8LFINZOcQNusLmHZgFGuzVmg4gEtZQ-kQVn9Rru0pMs66Ws6VN",
  ApiId: "kc0V7M7YNarOLFjagRZSUOl017s6B5z9",
};