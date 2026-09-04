# Como inserir os links de checkout

Os quatro botões de compra estão temporariamente direcionados ao e-mail `contato@barbozamethod.com`.

Quando os checkouts estiverem prontos, abra o arquivo `index.html` e procure por estes assuntos:

| Produto | Texto para localizar |
| --- | --- |
| Beginner | `Beginner%20Level%20Enrollment` |
| Intermediate | `Intermediate%20Level%20Enrollment` |
| Professional | `Professional%20Level%20Enrollment` |
| Complete System | `Complete%20Barboza%20Method%20Enrollment` |

Em cada botão, substitua todo o endereço iniciado por `mailto:` pelo link completo do checkout correspondente.

Exemplo:

```html
href="https://seu-checkout.com/produto"
```

Não altere o restante do botão.
