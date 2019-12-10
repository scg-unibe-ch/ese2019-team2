export class ServiceModel {
   serviceName: string;
   category: string;
   subCategory: string;
   userID: string;
   username: string;
   img: string[];
   location: string;
   price: number;
   maxPeople: number;
   description: string;
   street: string;
   city: string;
   zip: string;
   phone: string;
   clicks: number;

   constructor(
       category: string,
       subCategory: string,
       userID: string,
       username: string,
       serviceName: string,
       img: string[],
       price: number,
       maxPeople: number,
       location: string,
       street: string,
       city: string,
       zip: string,
       phone: string,
       description: string,
       clicks: number
   ) {
      this.category = category;
      this.subCategory = subCategory;
      this.userID = userID;
      this.username = username;
      this.serviceName = serviceName;
      this.img = img;
      this.price = price;
      this.maxPeople = maxPeople;
      this.location = location;
      this.street = street;
      this.city = city;
      this.zip = zip;
      this.phone = phone;
      this.description = description;
      this.clicks = clicks;
   }
}
