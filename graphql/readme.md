***Song Library***
**Graph Ql**
![Back End](https://raw.githubusercontent.com/bhuvimanick/Samsung_Assignment_Library/master/library_react/public/graphql.png)
**Front End**
![Front End](https://raw.githubusercontent.com/bhuvimanick/Samsung_Assignment_Library/master/library_react/public/output.png)

**Show Library**
*Story 1 - Retrieve a List of Songs in Library*

* **URL**
  /library/
  
* **GraphQl Method:**

    query{
    
    getList(name:"library"){
   
    result
    
    }}



**Song By Id**
Story 2 - Retrieve Song by Id

* **URL**

  /library/:id
  
* **GraphQl Method:**

    query{
    
    getDataById(id:7,type:"library"){
    
    result
    
    }}

**Show PlayList**
Story 3 - Retrieve a Item of Playlist

* **URL**

  /playlist/
  
* **GraphQl Method:**

    query{
    
    getList(name:"playlist"){ 

    result
    
    }}

**Playlist By Id**
Story 4 - Retrieve Playlist by Id

* **URL**
  /playlist/:id
  
* **GraphQl Method:**

  query{

  getDataById(id:7,type:"playlist"){

  result
    
  }}

**Create Playlist**

*Story 5 - Create Playlist*

* **URL**
  /playlist/
  
* **GraphQl Method:**

            mutation {
            
            addPlayList(input: {
            
              name: "bhuvi",
              
              songs:"[]"
              
            }) {
              id
            }
          }


**Update Playlist**
*Story 6 - Update Playlist*

* **URL**
  /playlist/
  
* **GraphQl Method:**

    mutation {
      updatePlayList(input: {
        name: "bhuvi",
        songs:"[3,9,4,3]",
        id:22
      }) {
      id
      }
    }

**Search Playlist**
*Story 7 - Search Playlist*

* **URL**
  /playlist/
  
* **GraphQl Method:**

    query{
  
    getList(name:"library",search:"fly")
        { 
    result
                        
    }}






