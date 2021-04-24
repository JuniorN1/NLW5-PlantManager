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
    Nessa Edição da Next Level Week Contruimos uma aplicação mobile para gerenciamento de plantas, 
    uma agenda pessoal para quem cuida de plantas!
    ultilizamos:
      notificações , aprendendo a usalas de maneira local, usando a lib do expo local notification,
      async storange, para persistir dados localmente no dispositivo,     
      animações do react-native e outras novas libs do react-native-gesture-handler para fazer o mesmo,
      animações do lottier para loading dinamicos,
      imagens svgs com a lib react-native-svg,
      servidor fake para simular consultas reais a api. 
    
   
    
  ##### Funcionalidade
      O Projeto tem as seguintes funcionalidades :
        - Captura de nome de úsuario
        - Mostra Catalogo de Plantas
        - Listar Catalogo de Plantas por Categoria
        - Listas Todas as Plantas Selecionadas pelo Usuario
        - Seleciona Uma Nova Planta Para Lista do Usuario
        - Deletar Plantas da Lista de Usuario
        - Notificar o Usuario para Regar suas Plantas
        
  

  ##### Instalação do projeto
   ###### para iniciar o projeto primeiro clone o diretorio ultilizando o comando:
      
        git clone https://github.com/JuniorN1/NLW5-PlantManager.git
       
        
   ###### apos clonar o diretorio entra na pasta com 
      
          cd NLW5-PlantManager
       
   ###### agora prevendo que voce ja tem o node js com o npm ou yarn no seu computador instale o expo cli global com o comando : 
      
          npm install --global expo-cli
          yarn add expo-cli
      
   ###### apois isso basta executar os seguintes comandos em terminais separados  para rodar o servidor fake 
        
          npm json-server ./src/services/server.json --host 10.0.1.4 --port 3333 --delay 700
          yarn json-server ./src/services/server.json --host 10.0.1.4 --port 3333 --delay 700
    
   ###### para rodar o projeto
       
         npm start
         yarn start
     
   ###### e basta abrir no seu emulador ou dispositivo ultilizando o  Expo
        
        
       
    
