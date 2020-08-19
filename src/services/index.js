export default class BookstoreServices {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',   
      price: 32,
      coverImage: 'https://image.ebooks.com/previews/095/095643/095643767/095643767.jpg',
    },
    {
      id: 2,
      title: 'Release It', 
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41r+60K7UjL.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error('something bad happened'))
        } else {
          resolve(this.data)
        }
      }, 700);
    });
  };
};