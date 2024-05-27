import cds, { requires } from "@sap/cds";

class CatalogService extends cds.ApplicationService {
    init(){
      const { Books, Author } = this.entities
     
      return super.init()
    }

  }