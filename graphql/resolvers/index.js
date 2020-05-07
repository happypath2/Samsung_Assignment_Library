import {getPageData,getPageDataById,createPlayList,updatePlayList,getSearchDataQuery} from "../api/data"
import {logger} from "../logger"
export const resolvers = {
    Query: {
    
          async getPage() {
            return await getPageData();
          },
          async getList(root, args, context) {
            logger.log({
              level: 'info',
              label: 'getlist',
              message: "list of data from " + args.name +  " loaded"
            });
            if(args.search){
              return await getSearchDataQuery(args.name,args.search);
            }else{
              return await getPageData(args.name,args.prev);

            }
          },
          async getDataById(root, args, context) {
            logger.log({
              level: 'info',
              label: 'getdata',
              message: "get data of id "+ args.type +" in " + args.type +  " loaded"
            });  
          return await getPageDataById(args.id,args.type);
        },
    },
    Mutation: {
      async addPlayList(root, {input}) {
        logger.log({
          level: 'info',
          label: 'createlist',
          message: "list created"
        });
return await createPlayList(input);
      },
      async updatePlayList(root, {input}) {
        logger.log({
          level: 'info',
          label: 'updatelist',
          message: "list updated"
        });
        return await updatePlayList(input);
              }
    }
   
}
