Rails.application.routes.draw do

  root 'articles#index' #a raiz da minha rota vai ser o articles pra action index, entao quando colcoar o local host 3000, ja vai pro articles index
  #get '/articles', to: 'articles#index' #se chegar uma rota /articles eu quero que direcione para articles#index
  #get '/articles/:id', to: 'articles#show'
  resources :articles #ja traz toda informação do crud, substitui as rotas acima, simplifica

end
  