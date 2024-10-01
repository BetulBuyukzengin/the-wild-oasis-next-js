# NEXT.JS

## NEXT.JS NEDİR?

- React'ın üzerine inşa edilmiş bir meta çerçevedir. Yani react çerçeve olarak düşünülürse Next.js de bu çerçeveyi çerçeveleyen bir çerçevedir.
- Next.js'in kendine özgü kuralları vardır ve bu kurallara göre geliştirme yapılmalıdır.Böylece fazla şablon oluşturmaktan kaçınmış oluruz. Tüm ekip aynı kuralla uygulama geliştirdiğinden anlaşılabilirlik ve ekip olarak çalışma da kolaylaşmış olur ve proje hızlı bir şekilde tamamlanır.
- Sunucudan veri alma ve veri mutasyonlarıyla birlikte karmaşık tam yığın web uygulamaları ve siteleri oluşturmamızı sağlar.
- React sunucu bileşenleri (RSC) bir frameworke entegre edilmeden (Next.js) kullanımı neredeyse imkansız olan server actions, suspense ve çok daha fazlası gibi tüm son teknoloji react özelliklerini uygular.Tüm bu parçalar react ekibinin tam yığın mimari vizyonunun bir parçasıdır ve yine Next.js gibi bir çerçeve tarafından uygulanması gerekir

## CSR(Client Side Rendering) VE SSR (Server Side Rendering)

### CSR

- JS kullanarak html, client da oluşturulur.(Kullanıcının bilgisayarında-istemci)
- İlk sayfa yüklemeleri yavaştır. Çünkü uygulamayı oluşturmak için gerekli js paketi büyük olabilir ve sayfada bir şey gerçekleşmeden tamamen inmesi gerekir.
- Componentler, mount olduktan sonra veriler alınır (fetch).
- Yüksek etkileşimli bir kullanıcı deneyimi sunar.
- JS yürütülüp veriler alınana kadar içerik işlenmez. Bu nedenle arama motorları siteyi dizine eklemeye çalıştıklarında kullanıcılar boş sayfa ile karşılaşabilir. Bu durum ise SEO (Search Engine Optimization) için olumsuzdur.
- Tek sayfa uygulamaları oluşturmak için kullanılmalıdır (SPAs).
- Seo nun önemli olmadığı yani bir giriş arkasında ve herkes tarafından erişilebilir olmayan uygulamalarda kullanılmalıdır. Örneğin şirket içinde kullanılan uygulamalar.

### SSR

- Html web server da oluşturulur (Geliştiricinin bilgisayarında). Örneğin wordpress, php, Next.js.
- İlk sayfa yüklemesi daha hızlıdır. Bunun nedeni uygulamayı çalıştırmak için js paketine pek ihtiyaç duyulmamasıdır.
- Her sayfa için gerekli veriler HTML oluşturulmadan hemen önce sunucuya indirilecektir. Bu veriler daha sonra tarayıcıya gönderilen sayfaya dahil edilir.
- Düşük etkileşimli bir kullanıcı deneyimi sunar. Yani sayfa değiştirildiğinde yeniden html oluşturma durumunda kalınabilir. Tarayıcıda tam sayfa yeniden yüklemelere yol açacaktır. Ancak Next.js bunu maskeler.
- SEO ile arkadaş canlısıdır. Önceden oluşturulmuş içerik, google vb. arama motorları tarafından çok daha kolay indexlenebiliyor.
- İçerik odaklı web siteler veya uygulamalar için kullanılmalıdır. Örneğin e-ticaret platformları, bloglar, haberler, satış siteleri vs.
- 2 tip SSR vardır:

  - Static: HTML derleme zamanında oluşturulur (built yaptığımızda). Yani geliştirici projeyi geliştirmeyi bitirdiğinde siteyi statik html, css, js dosyalarına aktarır ve bunlar daha sonra bir web sunucusuna dağıtılabilir. Ancak bu web sunucusu işaretlemeyi her zaman yeniden oluşturmayacaktır. Başlangıçta geliştirici tarafından bir kez üretilmiş olanı gönderecektir.
  - Dynamic: Sunucuya her istek geldiğinde sunucunun gerçekten yeni HTML ürettiği dinamik görüntülemeye sahibiz. Yani temelde her kullanıcı için yeni sayfalar oluşturacaktır.Bu da altta kalan veriler sık sık değiştiğinde harikadır.

- SSR da veriyi alma ve html sayfasını işleme server da başlar.
- En büyük içerik boyaması genellikle csr den çok daha önce gerçekleşir. Bu da ssr ın, kullanıcıların tüm içeriğin görünmesini beklemek istemediği içerik ağırlıklı sitelerde bu kadar yararlı olmasının bir başka nedenidir.
- Hydration: Statik html in js eklenerek etkileşimli hale getirildiği bir süreçtir. Html sunucu tarafında işlendiğinde kaybolan etkileşimi ve olay işleyicilerini (event handler) geri ekler.
- React, istemcide bileşen ağacını oluşturur ve onu gerçek ssr dom ile karşılaştırır. Aynı olmaları gerekir, böylece react onu benimseyebilir.
- Yaygın hydration hata nedenleri:
  - Yanlış html öğesi yerleştirme
  - İşleme için kullanılan farklı veriler
  - Yalnızca tarayıcı API'lerini kullanma
  - Side effectleri yanlış kullanmak

## NEXT.JS KEY INGREDIENTS

- Server Side Rendering (Dynamıc and Statıc): Her route için seçebileceğimiz hem dinamik hem de statik oluşturmayı destekler.
- File Based Routing Conventions: Routelar klasörlerdir.
  Ayrıca sayfalar, layout, hatalar, yükleme ekranları vb. için özel dosya kuralları vardır.
- Data Fetching And Mutation On The Server: Verileri doğrudan sunucu bileşenlerine getirme server actions
- Optimizasyon tekniği sunuyor: SEO, route ön yüklemesi, görüntü ve yazı tipi (font) optimizasyonu gibi hem buyuk perormans kazanımları hem de arama motoru optimizasyonunu iyilestiren araçlardır.

Next.js de "App" ve "Pages" adında 2 tür router vardır (Next.js yazmanın 2 yolu):

## MODERN NEXT.JS :"APP" ROUTER

- Next.js 13.4 2023 te tanıtıldı.
- Yeni projeler için önerilir.(recommended version)
- React ın tam yığın (full stack) mimarisini uygular. Server components, server actions, streaming(gruplandırma)
- Doğrudan componentler içinde fetch ile kolay getirme
- Layouts(duzenler), yükleyiciler oluşturmak son derece kolay
- Daha gelişmiş routing (paralel routing, vs)
- Daha iyi DX (Geliştirici deneyimi- developer experience) ve UX
- Önbelleğe alma (caching) çok agresif ve kafa karıştırıcı
- Öğrenme süreci zorlu

## LEGACY NEXT.JS: "PAGES" ROUTER

- V1 den bu yana ilk Next.js 2016 da tanıtıldı
- Hala destekleniyor ve gelecekte güncellenecek
- Genel olarak daha basit ve öğrenmesi kolay
- Düzenler(LAYOUT) gibi basit şeylerin uygulanması kafa karıştırıcıdır
- getStaticProps ve getServerSideProps gibi özel apilerla veri getirilir

## -- NEDEN SERVER COMPONENTS ?

İstemci-sunucu şelalesi (Request waterfall): Bir sayfadakı birden fazla bileşenin farklı verileri birbiri ardına getirmesi gerektiğinde ortaya cıkan bır sorundur.
Server side: Component yok, kolay ve hızlı veri getirme, veri kaynağına yakın, js taşımaya gerek duymuyor
RSC (React Server Components) server side ve client side ın avantajlarını içeren paradigmadır.
React uygulamaları için yeni full stack mimarisidir
RSC, vite ya da create react app de aktif olarak gelmiyor. Next.js gibi bir frameworkte aktif geliyor( Sadece app router).
Client Component: Modülün en üstünde "use client" ile oluşturulur.
Server Component: Componentler sadece server da renderlanır. React ile backendi ouşturabiliriz. Bundle işlemi yapmıyor. RSC architecture kullanıldığında varsayılan server componenttir.
Bir dom ağacında server altında client ya da server bileşeni yer alabilir. Client altındaki bileşenler var sayılan olarak client olur ve client oldugunu belirtmemize gerek yoktur.

- App klasöründe loading.js adında oluşturulan modül, veri yakalaması yapılan her sayfada çalışır ve ekranda loader gösterir. Next Js kullanılırken browserda js devre dışı bırakılırsa loading.js çalışmaz. Eğer js olmadan projenin çalışmasını istiyorsak loadıng js kullanamayız.

### SERVER ve CLİENT COMPONENT örnekleri nasıl ve nerede oluşturulur?

- Örneğin RSC mimarisini kullanan bir uygulamamız var. SC ve CC örneklerini içeren bir component ağacına sahibiz.
  React bunun gibi bir ağaçla karşılaştığında gerçekleşecek ilk şey tüm sunucu bileşenlerinin tabii ki sunucuda render edilmesidir.Bildiğimiz üzere bir bileşeni renderlamak basitçe bir React öğesi ile sonuçlanır.
  Bu React öğelerinin her biri aslında sadece sunucu bileşeninin çıktısını içerir. Dolayısıyla, yalnızca her bir bileşenin DOM'unun nasıl görüneceği hakkında bilgi içerirler. Ancak artık her bir bileşeni oluşturmak için gerekli
  olan kodun kendisini içermezler. Dolayısıyla, sunucu biileşenindeki kod doğrudan sunucuda kaybolmuştur. İşte bu, sunucu bileşenlerinde state kullanamamamızın teknik nedenidir. Bunun nedeni useState veya useEffect gibi işlevlerin bileşen oluşturulduğunda kaybolmasıdır. Böyle olması gerekiyor çünkü bu react componentlerin daha sonra client a gönderilmesi gerekiyor. Bu yüzden her şeyin serileştirilebilir olması gerekir ki fonksiyonlar serileştirilebilir değildir.Bu nedenle useState gibı işlevleri tarayıcıya(client) göndermenin yolu yoktur. Ayrıca sunucuda Fiber tree olmadığı için durumu takip etmenin bir yolu da olmayacaktır.
  Hala serverda olduğumuz için client componentlerin oluşturulacağı yer burası değildir. Bunun yerine, bu component ağacının bir placeholder (yer tutucu) içerdiğini düşünebiliriz. Yani her bir client componentinin sonunda oluşturulacağı delik gibi. Ve bu yer tutucuların veya deliklerin her biri, bir server bileşeninden mevcut client componentine aktarılmış olabilecek serileştirilmiş prop öğelerini ve ayrıca gerçek bileşen kodunu içeren script dosyasının URL'sini içerir.
  Ve koda yapılan bu referans, client componentinin daha sonra client üzerinde çalıştırılabilmesi ve böylece client üzerinde işlenebilmesi için gereklidir.Şimdi, bileşen kodu ve ona işaret eden URL ile komut dosyası oluşturmak, React'in kendisi tarafından değil, çerçevenin kullandığı paketleyici tarafından desteklenmesi gereken oldukça karmaşık bir şeydir. Bu da RSC'yi bir çerçeve olmadan kendi başımıza uygulamamızın neredeyse imkansız olmasının bir başka nedeni. Ancak yine de, client componentleri server da işlenmeyecektir ve bu nedenle bunları client a aktarmak için bir yola ihtiyacımız vardır. Bunun için:
  Aldıkları proplar ve componentleri client üzerinde çalıştıracak kod. İşte bu yer tutucuların her biri tam olarak bunu içerecektir. Bu ilk adımın sonunda, RSC yükü olarak adlandırdığımız, yürütülmüş ve yürütülmemiş bileşen örneklerinin bir karışımı olan bu garip ağaca sahibiz. Yani bu yük aslında tüm sunucu bileşenlerinin sanal DOM'udur, çünkü bunlar zaten işlenmiştir. Şimdi buna RSC yükü deniyor, çünkü bir sonraki adımda istemciye gönderilecek olan bu veri yapısıdır.
  Temelde bir ağaç olan RSC yükü JSON a benzeyen ama JSON olmayan, birden çok satıra bölünmüş bir veri formatıdır. Böylece bu verileri server dan client a aktarmak kolaydır.

- Bu RSC yükü ile neden bu kadar karmaşık bir sürece ihtiyacımız var? Neden sadece sunucu bileşenlerini HTML olarak oluşturup bu HTML'yi tarayıcıya göndermiyoruz?
  Bunun temel nedeni reactın kullanıcı arayüzünü bitmiş html olarak değil, her zaman veri olarak tanımlamak istemesi. Fiber ağacının ve virtual dom gibi veri yapılarının ilk etapta olmasının nedeni budur.
  Şimdi RSC durumunda, kullanıcı arayüzünün serverda bile veri olarak temsil edilmesi, React'e server componentlerinin yeniden renderlanmasına doğru şekilde tepki verme yeteneği kazandırır. Bunun anlamı, bir server componenti yeniden işlendiğinde ve yeni bir React öğesi ürettiğinde, bu öğenin temelde clientta zaten var olan sanal DOM ile sorunsuz bir şekilde birleştirilebilmesidir. Dolayısıyla, bir server componenti yeniden işlendiğinde, yeni bir RSC yükü oluşturulur ve React'in clienttaki mevcut ağacı serverdan gelen yeni ağaçla uzlaştırabileceği clienta gönderilir. Yeni bir ağaç yeniden işlendiğinde mevcut bir ağaçla uzlaştırabilmek reactın özünde olan bir şeydir. Dolayısıyla sunucu bileşenlerinde de işe yaramalıdır. Bunun doğru çalışması çok önemlidir çünkü, Reactın, sunucudan yeni bir ağaç geldiğinde kullanıcı arayüzü durumunu korumasını sağlar. Bunun yerine sadece HTML gönderilirse, tüm kullanıcı arayüzünün bu yeni HTML ile değiştirilmesi gerekecek ve mevcut tüm kullanıcı arayüzü durumu kaybolacak ve kullanıcıya oldukça kötü ve sarsıcı bir deneyim bırakacaktır. Bundan kaçınmak için React ekibi bu iki aşamalı işleme mekanizmasını ve RSC yükü kavramını ortaya attı.
  Özet olarak:
  Geleneksel React'ta render işleminin nasıl çalıştığına geri dönelim ve
  bunu RSC'de render ile karşılaştıralım. Geleneksel React'te her şey çok basittir. Bir bileşen ağacı basitçe sanal DOM'a işlenir, daha sonra gerçek DOM'a işlenir, bu da orijinal bileşen örneği ağacını temsil eden bir grup DOM öğesiyle sonuçlanır. Öte yandan, React sunucu bileşenleri ile React'ta da bir bileşen ağacı ile başlarız, ancak genellikle hem sunucu hem de istemci bileşenleri olan ve sunucuda bulunan bir ağaçtır.Şimdi RSC mimarisinde, render işlemi iki adıma ayrılmıştır; ilk adım sadece sunucu bileşenlerini render etmektir. Bunun sonucunda, halihazırda işlenmiş olan bu sunucu bileşenlerinin sanal bir DOM'u ve istemci bileşenlerinin işlenmemiş alt ağaçları elde edilir.
  Yani sunucu bileşenleri işlenir ve istemci bileşenleri işlenmez ve
  her ikisi de RSC yükü olarak adlandırdığımız aynı veri yapısında bulunur.
  Şimdi bu RSC yükünde, her bir istemci bileşeni için React'in bu bileşenleri daha sonra istemcide oluşturması için gerekli olan bazı bilgiler vardır. Dolayısıyla, her bir istemci bileşeni için RSC yükünde, istemci bileşeninin daha sonra oluşturacağı bir yer tutucu veya bir delik vardır. Eğer durum buysa, bir üst sunucu bileşeninden aktarılan serileştirilmiş proplar ve son olarak, bileşen kodunu içeren komut dosyasına işaret eden URL. Yine bu, React'in her bir istemci bileşenini işlemek için istemcide ihtiyaç duyacağı verilerdir. RSC yükünün bir sonraki gideceği yer de orasıdır. Böylece hem çalıştırılan sunucu bileşenleri hem de çalıştırılmayan istemci bileşenleri artık istemcidedir ve bu da bizi işleme sürecinin ikinci adımına getirir. Şu andan itibaren, süreç temelde geleneksel React ile aynıdır. İkinci adımda, artık istemci bileşenlerini de oluşturma zamanı geldi. Sonuç olarak, React artık gerçek DOM'a işlenmeye hazır tam bir sanal DOM'a sahip olacaktır. Yani yine, bu son adımlar geleneksel React ile tamamen aynıdır ve aslında tüm süreç o kadar da farklı değildir. Temelde aynı işleme sürecidir, ancak sunucu ve istemci arasındaki boşluğu dolduran RSC yükü ile iki farklı ortam arasında bölünmüştür.
  Sunucuda tamamlanan render çalışması hemen istemciye aktarılır ve zaman içinde istemcideki ağaca sorunsuz bir şekilde entegre edilir. Dolayısıyla bu, tüm süreci kullanıcı için çok daha akıcı ve hızlı hale getirir.

### RSC & SSR Arasındaki ilişki

- RSC ve SSR farklı teknolojilerdir. RSC, SSR ın yerini almak değil onu tamamlamaktır. Genellikle birlikte çalışırlar bunu sağlayan da NEXT.JS dir.
  -SSR tüm componentleri alıyor, html olarak işliyor ve ardından tarayıcıya gönderiyor. Aradaki fark hem client hemde server componentlerin next web sunucusunda işleniyor olması.
- SSR sadece ilk render için geçerlidir.
- !!! Hem client hem de server componentler server da ilk SSR işleminde çalışır. Ancak bundan sonra, uygulama tarayıcıda etkileşimli olduğundan sunucu bileşenleri yalnızca gerçek web tarayıcısında çalışır.

## NEXT.JS PROJESİ OLUŞTURURKEN ADIMLAR:

- npx create-next-app@latest projectName
- App router'da oluşturduğumuz her bir klasör ismi bir pathname olarak kullanılır ve her klasör içerisinde o pathname ile eşleşen bir page.js modülü oluşturmalıyız.
- Oluşturduğumuz bir klasörün pathname olarak algılanmasından kaçınmak için `_components` şeklinde bir tanımlama yapabiliriz. Böylece components adında bir path oluşturulmaz.
- Yönlendirme `<Link href="/cabins">cabin</Link>`şeklinde kullanılır.
- \_lib: Database ile ilgili işlemleri içinde barındırır.
- \_styles: Stilleri içinde barındır.
- not-foud.js: Url de karşılığı olmayan sayfa için gösterilecek şey.
- layout: Tüm sayfalar için erişilebilir olması ve içerik bileşenini (children) her sayfada göstermek için app klasöründe global bir layout oluşturabiliriz.
- Bazı sayfalar için özel layoutlar kullanmak isterseniz, bu sayfaların kendi layout dosyalarını oluşturabilirsiniz. Bu layout sadece o klasöre ait sayfalar için geçerli olur.
- Tıpkı layoutlar gibi loader lar da sayfalar için özelleştirilebilir.
- Next js fontlar için çok sağlam performans optimizasyonu ve gizlilik sağlar. Google fontlarını otomatik olarak self-host yapmamıza izin verir.
- Next.Js de componentler default olarak server componenttir.
- Server componenti "use client" ile client componente dönüştürebiliriz.
- Client componentin child componentleri server component olamaz ama server componentlerin child componentleri client component olabilir.
- Link performans optimizasyonu sağlar. Belirli bir sayfada bağlantılı olan tüm route ları önceden getirecektir.
- Her sayfa ayrı ayrı yığın olarak indirilir. Tarayıcıda ziyaret ettiğimiz her sayfa aslında doğrudan tarayıcıda da ön belleğe alınacaktır. Bu yüzden geçici olarak orada saklanacaktır.
- React router daki gibi Next.js de programmatic navigation için bazı react hookları sağlıyor. Ancak bunlar bu sayfa bileşenlerinde çalışmayacaktır. Çünkü bunlar server(sunucu) componentleridir ve react hookları burada çalışmaz.
- Next.js'te sayfa başlığını belirlemek için metadata kullanılırken, favicon dosyası icon adıyla belirtilir.
- Resimler her zaman sayfa boyutuna katkıda bulunan en büyük faktörlerdir. Dolayısıyla yükleme hızlarına etkisi olur. Buna dayanarak Next.Js in sağladığı
  - Bilgisayarda bulunan herhangi bir resim için: `<Image src... height="60" width="60" ` ile resimleri optimize edebiliriz.
    - Modern formatlarda doğru boyutlandırılmış görüntüleri sadece gerekli olduğunda otomatik olarak sunacaktır.
    - Tam yükseklik ve genişliği belirtmeye zorladığı için düzen kaymalarını önler.
    - Görüntüleri görüntü alanına gerçekten girdiklerinde otomatik olarak lazy olarak yükler.
  - Duyarlı görüntüiçin: Resmi import ederek de optimize edebiliriz. `<Image src={logo} quality={100} height="60" width="60" `
    - Bu formatta yükseklik ve genişliği belirtmek zorunda değiliz.

## Data fetching, catching, rendering

- .env.local: Geliştirme sırasında, yerel ortamda kullanılan çevresel değişkenleri tanımlamak için kullanılır. Bu dosya genellikle versiyon kontrolüne dahil edilmez ve sadece geliştirme sırasında kullanılır.
- env: Hem geliştirme hem de diğer aşamalarda kullanılabilecek genel çevresel değişkenleri tanımlamak için kullanılır. Bu dosya, tüm ortamlarda geçerli olan değerleri içerir.
- .env.production: Uygulamanız canlıya alındıktan sonra kullanılan çevresel değişkenleri tanımlar. Bu değişkenler, production ortamında çalışırken geçerli olacaktır.

## SUSPENSE NEDİR?

- Bazı asenkron işlemler yaptıkları için henüz render edilmeye hazır olmayan bileşenleri yakalamak veya izole etmek için kullanabileceğimiz yerleşik bir react componentidir. Yani bu componentlerin hatta tüm alt ağaçların askıya alınmasıdır. Çünkü react tarafından renderlanmaya hazır değiller. Örneğin try-catch kavramı olarak düşündüğümüzde catch in hataları yakalaması gibi suspense de askıya alınan componentleri yakalar.

### Bir componentin askıya alınmasına ne neden olur?

- Suspense'i destekleyen bir kütüphane kullanarak veri getirmek
- React'ın lazy loading özelliğini kullanarak loading additional code yüklemek
