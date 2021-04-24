# NEXT LEVEL WEEK 5
#### PROJETO PLANT MANAGER


<p></p>

<p align="center">
  <img src="https://i.imgur.com/AF8QYSF.png" width="200" />
  <img src="https://i.imgur.com/KunqQWQ.png" width="200"  />
  <img src="https://i.imgur.com/eKGer88.png" width="200" />
</p>

### Documentação

  ##### Sobre    

    Nesta Edição da Next Level Week Construímos uma aplicação mobile para gerenciamento de plantas, 
    Uma agenda pessoal para quem cuida de plantas!
    utilizamos:
      notificações , aprendendo a usá las de maneira local, usando a lib do expo local notification,
      async storage, para persistir dados localmente no dispositivo,     
      animações do react-native e outras novas libs do react-native-gesture-handler para fazer o mesmo,
      animações do lottie para loading dinâmicos,
      imagens svgs com a lib react-native-svg,
      servidor fake para simular consultas reais a api.

    
   
    
  ##### Funcionalidade
      O Projeto tem as seguintes funcionalidades :
        - Captura de nome de usuário
        - Mostra Catálogo de Plantas
        - Listar Catálogo de Plantas por Categoria
        - Listar Todas as Plantas Selecionadas pelo Usuário
        - Seleciona Uma Nova Planta Para Lista do Usuário
        - Deletar Plantas da Lista de Usuário
        - Notificar o Usuário para Regar suas Plantas
        
  
  ##### Instalação do projeto
   ###### para iniciar o projeto primeiro clone o diretório utilizando o comando:
      
        git clone https://github.com/JuniorN1/NLW5-PlantManager.git
       
        
   ###### apos clonar o diretorio entra na pasta com :
      
          cd NLW5-PlantManager
       

   ###### agora prevendo que você já tem o node js com o npm ou yarn no seu computador instale o expo cli global com o comando :

      
          npm install --global expo-cli
          yarn add expo-cli
      
   ###### após isso basta executar os seguintes comandos em terminais separados  para rodar o servidor fake :
        
          npm json-server ./src/services/server.json --host localhost --port 3333 --delay 700
          yarn json-server ./src/services/server.json --host localhost --port 3333 --delay 700
    
   ###### para rodar o projeto : 
       
         npm start
         yarn start
     
  ###### e basta abrir no seu emulador ou dispositivo utilizando o  Expo:
        
        
       
    
