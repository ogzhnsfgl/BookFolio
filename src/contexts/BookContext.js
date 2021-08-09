import React from "react";

/* 
 1-) Default Value --> this.context (context methoduna parametre olarak geçiyoruz.)

    Context -> export default React.createContext([]) ile oluşturuldu.
    İlgili componentte import edildi ve orada static contexType= <importName> olarak set edildi.
    Sonrasında ilgili componentte this.context diyerek kullanıldı.


export default React.createContext([
  {
    title: "Kırmızı Pazartesi",
    author: "Gabriel Garcia Marquez",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
  {
    title: "Şeker Portakalı",
    author: "Jose Muro de Vasconselos",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "En Uzun Yüzyıl",
    author: "İlber Ortaylı",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "Karamazov Kardeşler",
    author: "Fyodor Mihayloviç Dostoyevski",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "Sultanın Korsanları",
    author: "Emrah Safa Gürkan",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
]); */

// 2-) Provider - Consumer method
/* 
1-) const olarak BookContext oluştur.
2-) Class component oluştur (ContextProvider)
3-) Bu class'ın state'ine kullanılacak data'yı ekle.
4-) Bu class oluşturduğun context'i (1) return edecek:
                      render() {                                  
                          return (
                            <BookContext.Provider value={this.state}>     **value olarak state'i alıyor.
                              {this.props.children}                       **okunabilmesi için props.children'lara gönderiyoruz.
                            </BookContext.Provider>
                          );
                        }

5-) Bu classı default export yapıyoruz.
6-) PARENT componentta (app.js) bu context'i kullancak olarak componenti 

                          <BookContextProvider>   **Bu sınıf dikkat!! "BookContext.Provider" sınıfı oluşturken return ediliyor.
                            <BookList />          **props.children dediğimiz için (4) BookList ile BookContextProvider bağlandı.
                          </BookContextProvider>

                          şeklinde sarmalıyoruz.

7) Child Component'a gidip (BookList) Context'i import ediyoruz. (import { BookContext } from "../contexts/BookContext";)

8) Burada context verisini kullancağımız alanı BookContext.Consumer ile çevreliyoruz;

      <BookContext.Consumer>                      
        {(value) => {                                                             **Gelen data value olarak geliyor.
          return (                                                                **Bununla return ifademizi yazıyoruz.
            <section className="page-section bg-light" id="portfolio">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">BookFolio</h2>
                  <h3 className="section-subheading text-muted">
                    All time fav books
                  </h3>
                </div>
                <div className="row">
                  {value.books.map((book, i) => {                                 ** value.books.map ile gelen her veriyi tek tek book component'ına gönderdik.
                    return <Book book={book} key={i} />;
                  })}
                </div>
              </div>
            </section>
          );
        }}
      </BookContext.Consumer>

*/

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Şeker Portakalı",
        author: "Jose Muro de Vasconselos",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "En Uzun Yüzyıl",
        author: "İlber Ortaylı",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Karamazov Kardeşler",
        author: "Fyodor Mihayloviç Dostoyevski",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Sultanın Korsanları",
        author: "Emrah Safa Gürkan",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
    ],
  };

  render() {
    return (
      <BookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
