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

  - Static: HTML derleme zamanında oluşturulur (built yaptığımızda). Yani geliştirici projeyi geliştirmeyi bitirdiğinde siteyi static html, css, js dosyalarına aktarır ve bunlar daha sonra bir web sunucusuna dağıtılabilir. Ancak bu web sunucusu işaretlemeyi her zaman yeniden oluşturmayacaktır. Başlangıçta geliştirici tarafından bir kez üretilmiş olanı gönderecektir.
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
- React router daki gibi Next.js de programmatic navigation için bazı react hookları sağlıyor. Ancak bunlar bu sayfa bileşenlerinde çalışmayacaktır. Çünkü bunlar server(sunucu) componentleridir ve react hookları (use state vb...)burada çalışmaz.
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

- Bazı asenkron işlemlerde henüz render edilmeye hazır olmayan bileşenleri yakalamak veya izole etmek için kullanabileceğimiz yerleşik bir react componentidir. Yani bu componentlerin hatta tüm alt ağaçların askıya alınmasıdır. Çünkü react tarafından renderlanmaya hazır değillerdir. Örneğin try-catch kavramı olarak düşündüğümüzde catch in hataları yakalaması gibi suspense de askıya alınan componentleri yakalar.
- Bu bileşenleri suspense e sarmalıyız ve bu içerik yerine loader gösterebiliriz.
- Asenkron olan bu componenti şu şekilde sarmalıyız:</br>
  `<Suspense fallback={<Spinner />}><ExampleComponent /></Suspense>`

### Bir componentin askıya alınmasına ne neden olur?

- Suspense'i destekleyen bir kütüphane kullanarak veri getirmek
- React'ın lazy loading özelliğini kullanmak

### Fiber ağacı:

- Temel olarak uygulamamızın her bir bileşen örneğinin ve DOM ögesinin dahili temsilidir.Sanal Dom arasındaki farkı ise, fiber ağacının asla yok edilmeyen değiştirilebilir bir veri yapısı olmasıdır. Bu da onu state i, hook u depolamak için mükemmel bir yer haline getirir.

## Dynamic Route

- Yeni bir klasör oluşturup adını [rootName] şeklinde vermeliyiz. İçerisine yine page.js adında dosya oluşturmalıyız.
- Burada url den veri almak istersek componentten `params` adlı propu almalıyız.
- **Generate metadata**: Her sayfa için dinamik olarak meta veriler (başlık, açıklama, Open Graph etiketleri) oluşturmak için kullanılan bir fonksiyondur.

## Error Page

- Oluşturulan dosya adı error.js adında ve bu component client bir component olmalıdır.
- İç içe geçmiş error boundry oluşturabiliriz yani her sayfanın kendine ait error sayfası olabilir.
- Uygulamanın herhangi bir yerinde meydana gelen tüm hatalar ve istisnalar için çalışır ancak yalnızca renderlanma sırasında çalışır. Dolayısıyla call back fonksiyonlarında meydana gelecek herhangi bir hata aslında bir react error boundry tarafından yakalanmayacaktır. Dolayısıyla burada sadace renderlama hataları yakalanacaktır. Ayrıca root layout ta meydana gelen hataları yakalamaz. Bunun için **global error** adında bir dosya oluşturmalıyız

## Not-found

- not found dosyası ile url de bulunmayan sayfalar için otomatik olarak devreye girer ve özelleştirilmiş bir hata sayfası gösterebiliriz.(404 not found).
- Her sayfa için özelleştirilmiş not found sayfası oluşturabiliriz.

## SSR ın 2 tipi vardır:

### 1- Static Rendering:

- Veriler neredeyse hiç değişmiyorsa dinamik sayfaya ihtiyaç yoktur. Next.JS te default olarak static sayfa olması sayesinde her zaman database e gitmek zorunda kalmayız.
- HTML build yapıldığında ya da periyodik olarak arkaplanda yeniden veri yakalanmasıyla (ISR: Incremental Static Rendering) oluşturulur.
- Veri sıklıkla değişmediğinde ve kişiselleştirilmediğinde kullanışlıdır.
- Default olarak her zaman Next.JS static renderlama yapar.
- Daha hızlıdır.
- Proje vercel ile deploy edildiğinde her static sayfa otomatik olarak cdn de host edilir.
- Eğer bir uygulamanın tüm route ları static ise tüm uygulama static bir site gibi çıkarılabilir (SSG:Static Site Generation).

### 2- Dynamic Rendering

- Server a her yeni istek ulaştığında HTML oluşturulur.
- Veriler sürekli değişiyor ve kullanıcıya göre kişiselleştiriliyorsa dynamic rendering mantıklıdır.
- Route un renderlanması talebe bağlıdır (search params).
- Next.JS default olarak static renderlama yapsada bazı koşullarda renderlama otomatik olarak dynamic e döner.
- Proje vercel ile deploy edildiğinde her dynamic route otomatik olarak sunucusuz (serverless) bir fonksiyon olur.
- `Not: Next.Js için aşağıdakiler önemlidir çünkü build zamanında bu değerlerin herhangi birini bilmenin bir yolu yoktur.`

  - Genellikle geliştiriciler bir route un static ya da dynamic olmasını direkt olarak seçmezler. Next.JS otomatik olarak aşağıdaki senaryolarda dinamik renderlamaya geçer.
  - Eğer ki dynamic bir route ise (paramsı kullanan bir sayfa)
  - Herhangi bir route içinde (page.js) searchParams'ın kullanımı.
  - Route'ın herhangi bir server componentinde headers() veya cookies()'in kullanılması
  - Route'ın herhangi bir server componentinde Cache'e alınmamış bir veri isteği yapılması

- `Aynı zamanda bir route un dinamik olarak renderlanması için Next.JS i aşağıdaki yöntemlerle zorlayabiriz.`
  - export const dynamic="force-dynamic"; // page.js den
  - export const revalidate=0; // page.js den
  - {cache:'no-store'} // Route un server componentlerinden herhangi birinde fetch isteğinde
  - noStore() // Route un server componentlerinden herhangi birinde

### CDN (Content Delivery Network) :

- Web sitelerin sabit içeriğini (HTML,CSS,JS,resimler) kullanıcıya olabildiğince yakından sunan ve dünyanın etrafında konumlanmış bir sunucular ağıdır.

### Serverless Computing (Sunucusuz bilgi işlem):

- Sunucusuz işlem modeli ile uygulama kodlarını (genellikle backend kodu) sunucuyu kendimiz düzenlemeden çalıştırırız. Bunun yerine bir sunucu dağıtıcısında sadece fonksiyonlar çalıştırırız (serverless functions). Sunucu sadece sunucusuz fonksiyon çalışırken aktiftir. (Node.js uygulamalarındaki gibi sunucu sürekli açık değildir.). Bütün dynamic route lar bu şekilde çalışır.

### The "edge" (uç):

- Kullanıcıya mümkün olduğunca yakın.
- CDN bir "edge" ağın parçasıdır ancak aynı zamanda serverless "edge" computing de vardır. Bu, merkezi bir sunucuda gerçekleşmeyen serverless edge computing dir ancak kullanıcıya mümkün olduğu kadar yakın, dünya çapında dağıtılan bir ağda (bir CDN gibi ancak kod çalıştırmak için).
- Vercel'de deploy edildiğinde edge de çalışacak belirli rotaları seçebiliriz.

### Incremental Static Regeneration (ISR-Artımlı Statik Yenileme):

- Geliştiricilerin, web sitesi zaten oluşturulup dağıtıldıktan sonra bile arka planda statik bir sayfanın içeriğini güncellemesine olanak tanıyan bir Next.js özelliğidir. Bu, belirli bir aralıktan sonra bir bileşenin veya tüm route un verilerinin yeniden getirilmesiyle gerçekleşir.

### Dynamic rendering i static yapma:

- Async olan ve exportlanan bir generateStaticParams() fonksiyonu ile yapabiliriz. (cabinId page)
- generateStaticParams ile tamamen static e çevirdiğimiz projemizi SSG (Static Site Generation) olarak oluşturmak için next.config içerisinde `output:"export"` olarak belirtmeliyiz. Eğer herhangi bir dynamic route varsa `output:"export"` u kapatmalıyız aksi halde hata verecektir.

## Partial Pre-Rendering:

- Çoğu sayfanın %100 static ya da %100 dynamic olması gerekmediğinden bu yöntem bulunmuştur.(Hem static hem dynamic). Örneğin diğer tüm sayfaların static renderlandığı bir durumda sadece header'da login olan kullanıcının ismininin yazması tüm projeyi dynamic olarak çalıştırır. Bunun yerine sadece kullanıcı adının bulunduğu kısmı dynamic, diğer tüm projeyi static olarak renderlamak projemize büyük bir performans kazancı sağlar. (Static renderlama CDN'ler ile çalıştığı için). Şuan NextJS'de bu özellik bulunmuyor. Fakat gelecekte bir Next versiyonunda bunu kullanmak için yapılması gerekecek şeyler şunlardır:
  - Öncelikle next.config dosyasından PPR (Partial Pre-Rendering) açılmalıdır.
  - Dynamic parçalar (components) Suspense ile sarılmalıdır. Böylece tüm route yerine hangi parçanın dynamic olması gerektiği belirtilecektir.
  - Bu dynamic parçalar yüklenirken gösterilecek static bir fallback bırakmamız gerekecektir.

## Next.JS verileri nasıl cache e (ön bellek) alır?

### Caching:

-👍 Getirilen veya hesaplanan verilerin gelecekte erişilebilmesi için geçici bir konumda saklanması. Böylece her ihtiyaç duyulduğunda verileri yeniden getirmek ya da hesaplamak zorunda kalmayız.
-👎 Next.JS te alınabilecek her şey cache e alınır.
-👉 Next.JS, cache revalidation (yeniden doğrulama) için API' ler sağlar (Verileri önbellekten kaldırmak ve yeni verilerle güncellemek (yeniden getirilen veya yeniden hesaplanan))
-👍 Next.js uygulamalarını daha performanslı hale getirir ve maliyetlerden tasarruf sağlar (computing ve data access)
-👎 Cache e alma varsayılan olarak her zaman açıktır. Bazı durumlarda beklenmedik davranışlar sergiler. Bazı cache ler kapatılamaz.
-👎 Çok kafa karıştırıcıdır: Birçok farklı Next.js API'si cache e almayı etkiler ve kontrol eder.

#### Caching Mekanizmaları:

- `Request Memoization`:

  - Get isteklerine benzer veri fetchlemede aynı url ve options a sahip ise cache e aldığını kullanır.
  - Cache olarak server'ı kullanır.
  - Birden fazla yerde yapılan aynı istek tekrar tekrar API isteği oluşturmaz, tek bir istekte alınan veriler tüm isteklerde kullanılır. Fakat bu durum sadece fetch() fonksiyonu ile çalışır ve istekler birebir aynı olmalıdır.
  - Yeniden doğrulama yapma mümkün değildir.
  - Vazgeçmek için ise AbortController kullanılabilir.

- `Data Cache`:
  - Cache olarak server'ı kullanır.
  - Veri olarak bir route'da yakalanan verileri veya bir fetch isteğini cache'e alır.
  - Yakalanan veriler sonsuza kadar cache'de kalır. (Revalidate yapmak istesek bile)
  - Özellikle static sayfalar için kullanılır. Milyon tane kullanıcıya aynı verileri göstermek için mükemmeldir.
  - Açık ara geliştiriciler için düşünülmesi en önemli cache diyebiliriz.
  - Yeniden doğrulama için kullanabileceğimiz birden fazla yöntem vardır.
  - Time-based (otomatik) sayfadaki tüm veri için [ export const revalidate = time page.js'de ]
  - Time-based(otomatik) tek bir veri isteği için [ fetch(... , { next: { revalidate: time }}) ]
  - İsteğe bağlı olarak (manuel) revalidatePath veya revalidateTag
  - Tüm sayfada vazgeçmek/iptal etmek için ise export const revalidate = 0 page.js'de veya export const dynamic = "force-dynamic" yine page.js'de kullanabiliriz.
  - Tek bir istek için Vazgeçmek/iptal etmek için fetch(... , { cache: 'no-store'}) veya Tek bir server komponent için noStore() fonksiyonu kullanılabilir.
  -
- `Full Route Cache`:

  - Cache olarak server'ı kullanır.
  - Tüm static sayfaları ( HTML ve RSC Payload ) cache'e alır.
  - Data Cache yeniden doğrulanana veya proje yeniden deploy edilene kadar temizlenmez.

- `Router Cache`:
  - Cache olarak Client'ı kullanır.
  - Önceden yakalanmış ve anlık olarak kullanıcının uygulamada gezindiği sayfaları cache'e alır. [ Static & Dynamic ]
  - Yakalanan veriler sayfa dynamic ise 30 saniye, sayfa static ise 5 dakika cache'de tutulur. Yani sayfayı komple kapatıp açtığımızda dahi outdated veri görebiliriz. NextJS ile ilgili en büyük problemlerden birisi de budur.
  - Yeniden doğrulama için revalidatePath veya revalidateTag (Server Action'da)
  - router.refresh, cookies.set veya cookies.delete'de yine Server Action'da revalidate için kullanılabilir.
  - Vazgeçmek veya iptal etmek için herhangi bir yöntem yoktur.

## Server ve Client Arasındaki İletişim (Server Client Boundary -Frontend & Backend)

### Geleneksel İletişim (Traditional):

- İletişim API ler ile sağlanır.
- Client tan server a bir istek sonucunda json formatındaki veriler serverdan client a gönderilir.
- Veriler üzerinde CRUD işlemleri yapmak için client, server a POST,PUT vb. isteklerde bulunur.
-

### Next.JS ile RSC + SA İletişim :

- Server ve backend arasında net bir ayrım yoktur.
- Aralarındaki sınırlar esnek ve dynamic tir.
- Server ve client code parçaları iç içedir.(Knitting)
- Tek bir kod tabanında gerçek full stack uygulamaları oluşturmamıza olanak sağlar
- Artık veri getirmek için api ye ihtiyaç yoktur. Veritabanından okuyabilir veya prop olarak geçirebiliriz.
- Verileri doğrudan istemci bileşenlerinden değiştirebilmek için Server Actions (SA) kullanabiliriz. Backend apisine yapacağımız post,put vb. isteklerin yerini alır.
- Client componentin alt ağaçlarında server componentin olamayacağı düşünülse de bunu yapabilmenin bir yolu var: Server componentini bir prop olarak iletirsek, bir server bileşenini bir client bileşeninin içinde oluşturabiliriz.

#### Dependency Tree (Module Imports):

- Modüllerin diğer modüller tarafından içe aktarıldığını gösteren bir ağaçtır. Yani client-server sınırları bir component tree de değil, dependency tree de kurulmaktadır.
- Client component lerin, server componentleri içe aktaramayacağı yalnızca diğer client componentlerini içe aktarabileceği anlamına gelir. Dolayısıyla client-server sınırına geri dönmek ve server componentlerini client tan içe aktarmak mümkün değildir. Ama server componentler, client componentlerine prop olarak aktarıldığı sürece client componentler bunları render edebilir.<br/>

  <img src="/readme_img/dependency_tree.png" alt="dependency_tree" width="50%"/>

- Server componentler tüm bileşenleri içeri aktarabilir ve oluşturabilir.
- Client-server sınırının içine aktarılan bir component, bir client componentleri örneği oluşturur. Yukarıdaki görselde C bir server mı client mı diye düşünecek olursak her ikisi de olabilir. Başta server iken daha sonra E içerisine alındığı için clienttır. E, `"use-client"` ile cliente dönüştürüldüğünden alt propları da otomatik olarak client component olur.

#### Client tan Server a nasıl veri aktarabiliriz?

- State i url de saklama (searchParams) :

  - Öncelikle `new URLSearchParams()` ile yeni url search params oluşturuyoruz. İçerisine parametre olarak `useSearchParams()`ı vermeliyiz.
  - Oluşturacağımız url search paramsa `set methodu` kullanarak key ve value vermeliyiz.
  - Projenin url ini değiştirmek için `useRouter()` hookunu ve `replace` methodunu kullanmalıyız.
  - `usePathname()` kullanarak mevcut URL yoluna (sayfanın yolunu) erişiriz.
  - Projemde kullandığım bir searcParams örneği:<br/>
    <img src="/readme_img/searchParams.png" alt="searchParams" width="50%"/>

#### NEXT.JS' te Context API:

- Context api, client componentler için çalışır. Çünkü bunlar contextten verileri okumak için gerekli hookları kullanabilir.<br/>
  <img src="/readme_img/contextAPI.png" alt="searchParams" width="50%"/>

- <!-- Dedemlerde yazdıklarım -->

#### Route Handlers ile API Endpoint oluşturma

- **Route Dosyası Oluşturma**: Route adında başka bir konvansiyon dosyası oluşturarak bir route işleyicisi oluşturabiliriz.
  Bu durumda ve bu route da js dosyası, sayfası olmayan herhangi bir klasörde olabilir.Route işleyicileri, URL'lere gelen istekleri (GET, POST, vb.) işlemek için kullanılır.
  Bu önemlidir çünkü route işleyicisine karşılık gelen URL' ye bir istek gönderildiğinde HTML döndürülmez,
  bunun yerine route işleyicisi çalıştırılır ve genellikle bazı JSON verileri döndürülür.

- **Endpoint**: Bir API'de belirli bir kaynak veya hizmete erişim sağlayan bir URL veya URI'dir.
  Bir endpoint, istemcinin sunucuyla iletişim kurmasını sağlar ve genellikle belirli bir işlev veya
  veri kümesi ile ilişkilidir. API çağrıları, bu endpointlere yapılarak veri almak, veri göndermek, güncellemek
  veya silmek gibi işlemler gerçekleştirilir. Her bir endpoint, belirli bir işlem için tasarlanmıştır ve genellikle bir HTTP metoduyla (GET, POST, PUT, DELETE) birlikte kullanılır.
  Bu sayede, istemciler (örneğin, web uygulamaları veya mobil uygulamalar) belirli işlevleri gerçekleştirebilir.

- **Klasör Yapısı**: API endpointleri genellikle api klasörü altında yer alır. Örneğin, api/cabins/[cabinId]/route.js yapısı kullanılarak dinamik bir endpoint oluşturabilirsiniz.
  Burada [cabinId], dinamik bir parametre olup, URL’de gerçek bir kabin kimliğini temsil eder.
  Bu yapı, belirli bir kabin ile ilgili verilere erişim sağlamak için kullanılır.
- **HTML ve JSON Çatışması**: Route işleyicileri, bir URL'ye yapılan isteklerde HTML yerine genellikle JSON
  verileri döndürür. Eğer bir sayfada aynı isimde bir JavaScript dosyası varsa, bu bir çakışmaya neden olabilir.
  Çünkü bir HTTP isteği için HTML ve JSON verileri aynı anda gönderilemez. Bu nedenle, route işleyicisinin
  bulunduğu klasörün dikkatlice yapılandırılması önemlidir.

- **Özelleştirilmiş Soyutlama**: Route Handlers, API'nizi kullanımı kolay hale getirmek için özelleştirilmiş
  bir soyutlama sunar. Bu sayede, veri yönetimini daha etkin bir şekilde gerçekleştirebilir ve uygulamanızın
  ihtiyaçlarına göre özelleştirilmiş çözümler oluşturabilirsiniz.
- **BURADAKİ KODU DENE URL DE 90 GELİYOR MU İNTERNETSİZ GELMEDİ!!!**
- **Veri Kaynakları ve Güvenlik**: Supabase in halka açık olmayan bölümlerinden farklı veri kaynaklarını kolayca bir araya getirebiliriz. Bunu yaparken api anahtarlarımızı da gizli tutabiliriz.
- **Hata Yönetimi**: try catch yapısı ile hata durumlarını ele alabiliriz.
- **Server Actions**: Route Handlers, bazı durumlarda daha az kullanılmaktadır çünkü yeni geliştirmelerle birlikte "server actions" gibi alternatif yöntemler ortaya çıkmıştır. Server actions, belirli bir görevi daha kolay ve verimli bir şekilde yerine getirmek için kullanılabilir.
- `https://developer.mozilla.org/en-US/docs/Web/API/Response`

## Next Auth kütüphanesi ile kimlik doğrulama (authentication)

- `https://next-auth.js.org/getting-started/introduction`
- Google provider - google hesaplarıyla giriş yapma
- **İlk önce next.auth u kuralım**: Kimlik doğrulamayı basitleştiren kütüphane.(Alternatifi clerk veya lucia )
- lib klasörü içinde auth.js adında dosya oluşturmalıyız.
- env.local içine NEXTAUTH_URL=http://localhost:300 (projenın urli) ü ve NEXTAUTH_SECRET= değerine vercelin generate secret adlı uygulamasından gelen değeri vermeliyiz (Daha güvenli)
- `Google developer console`: Geliştiricilerin Google'ın çeşitli hizmetleri ve API'lerini kullanarak projeler oluşturmasına, yönetmesine ve izlemelerine olanak tanıyan bir web platformudur. Geliştiriciler bu konsolu kullanarak uygulamalarını Google altyapısı üzerinde geliştirebilir ve dağıtabilirler.O yüzden google developer console da hesap oluşturmalıyız.
  - Öncelikle `OAuth consent screen` sayfasına giderek kullanıcının google hesabıyla giriş yaptığında göreceği ekranı oluşturalım.
  - Daha sonra `Credentials` da OAuth Client ID yi oluşturalım.`https://next-auth.js.org/providers/google`
  - Oluşturduktan sonra client ID ve client secret i env.local e ekleyelim.
  - `auth` dosyasında `NextAuth` ve `Google` u import ederek config objesi oluşturalım. Ve `NextAuth` a parametre olarak exportlayalım.
  - Api klasörünün içerisine `auth/[...nextauth]/route.js` şeklinde bir route oluşturalım. (3 nokta tümünü almak için) Burada `GET` ve `POST` u export edelim.
  - **await auth()** ile googledan gelen kullanıcı bilgilerine erişebiliriz. Bu kimlik doğrulama işlevinin gelen istekten bu çerezleri okuması gerekir. Çerezler yalnızca çalışma zamanında bilinebilir. Dolayısıyla bu siteyi statik olarak oluştursaydık oturum açacak kullanıcıları bilemezdik._Sonuç olarak auth u navigationda kullandığım için ve bu tüm route ların bir parçası olduğu için tüm route lar dinamik oldu_.

## Next.JS te Middleware nedir?

- Authorization ı uygulamak için kullanılır.
- Request ve response arasında yer alan bir işlvdir. Request e bağlı olan ama response tamamlanmadan önce bazı kodları çalıştırmamızı sağlar.
- Bir projede default olarak her route tan önce çalışır.
- Middleware default olarak her route için çalıştığından sonsuz döngü oluşturur sürekli yönlendirme yapar. Middleware in hangi route larda çalışması gerektiğini belirtmek için **matcher** olarak adlandırılan bir araç kullanabiliriz. Ancak önemli olan nokta, her zaman request ten sonra ancak kullanıcının ziyaret ettiği route işlenmeden ve geri gönderilmeden önce çalışmasıdır.
- Her bir route a (sayfaya) yapıştırdığımız bir kod yığını olarak düşünebiliriz. Ancak bunu yapmak yerine, bu kod yığını her route tan önce çalışan tek bir merkezi yerde bulunur. Bu da middleware dır.
- Sadece bir middleware fonksiyonu olmalıdır. Proje root klasöründeki middleware.js (veya .ts) dosyasından dışa aktarılması (export) gerekir.
- auth middleware olarak da hizmet eder.
- **Buna neden ihtiyacımız var? :**
  - Cookies ve headers ı okumamızı ve ayarlamamızı (set) sağlar.
  - Authentication ve authorization
  - Server-side analizler,
  - Coğrafi konuma dayalı yönlendirmeler
  - A/B testi
- Middleware in bir response üretmesinin yolu 2 şekilde gerçekleşir:
  1- Middleware in uygulamamızdaki bazı route lara yeniden yönlendirmesi veya yeniden yazması ya da route lar oluşturulmadan önce çalışmasıdır.
  2- İstemciye doğrudan bir JSON yanıtı göndermek. Bu durumda cookie ve header ları okuyabilir ve ayarlayabiliriz. Fakat bu durumda route a hiç ulaşılmayacak ve işlenmeyecektir. Bu nedenle tamamen atlanır.
- SigninButton da server component olduğundan onClick yerine _form action_ kulandım.
- lib klasörü içine actions.js oluştur.İçerisinde `use server` ve gerekli fonksiyonları ekle.
- SignOutButton bir client componenttir. Teknik olarak onClick verebiliriz fakat form action kullandım. Çünkü server action lar client ta da çağırılabilirler ve yalnızca server da yürütülebilirler (execute).
- Google hesabıyla giriş yapıldığında bu hesap supabase tablosunda mevcut kulanıcılar içerisinde yoksa, auth içinde signIn callbacki oluşturarak yeni kullanıcı oluşturma işlevini ekledim.

---

## React Server Component Architecture

- Next.JS kullanmamızın en önemli sebeplerinden biri React ile kolayca etkileşimli full stack uygulamaları oluşturmak. React ekibi, geliştiricilerin bunu yapabilmesine yardımcı olmak için React Server Component Architecture u oluşturdu.
- -**1- Data Fetch**: Data fetch(veri getirme) işlemlerini server componentleri kullanarak yaparız.
- -**2- Mutation**: Mutation işlemleri için `server actions` ı kullanırız.

- Server actions için full stack application ları oluşturmada RSC mimarisindeki eksik parça diyebiliriz.
- Yalnızca sunucuda çalışan asenkron fonksiyonlar, veri mutasyonlarını gerçekleştirmemizi sağlar.
- Fonksiyonun veya tüm module ün en üstünde `"use server"` yönergesi ile oluşturulur.

### Server Action ları 2 şekilde tanımlayabiliriz:

- 1- **Bir server componentte bir asenkron fonksiyon**: Doğrudan server componentinin içerisinde tanımlanabilir, burada doğrudan kullanılabilir veya bir client bileşenine prop olarak aktarılabilir.(fonksiyonların aksine).
- 2- **Bağımsız dosya**: _use server_ yönergesi ile başlaması gereken özel bir server action modülüdür. Daha sonra bu dosyadan dışa aktardığımız tüm fonksiyonlar basitçe server actions haline gelir ve bunlar daha sonra herhangi bir server a veya hatta client componente aktarılabilir.Bu sayede tüm mutation lar tek bir merkezi yerde saklanır.(önerilir)

-**use server**, server componentler için değil sadece _server actions_ içindir.

- use client, kodumuzun server dan client a geçmesini sağlayan bir köprü gibidir; use server ise bunun tersine çalışır. Böylece client ile server arasındaki boşluğu doldurur.(Api endpointe ihtiyaç duyulursa kullanmalıyız.)
- **Server Actions çalışma şekli**: Next.JS oluşturduğumuz her server action için otomatik olarak bir API endpoint oluşturacaktır. Böylece her server action, temel olarak client a gönderilen kendi URL sini alır. Bu nedenle işlevin kendisinin asla client a ulaşmadığını, yalnızca URL' ye ulaştığını unutmamak önemlidir. Bu kodun kendisinin her zaman server da kalacağı ve bu nedenle server actions ında veritabanlarına doğrudan bağlanmanın, gizli API anahtarları kullanmanın vb. güvenli olduğu anlamına gelir. Çünkü kodun tarayıcıya sızdırılması imkansızdır.
- Server action bir kullanıcı etkileşimi sonucunda her çağrıldığında sahne arkasında uç noktaya bir POST isteği yapılacak ve istek boyunca gönderilen tüm girdiler serileştirilecektir. Ancak geliştiriciler olarak bir API end pointi veya URL yi asla görmeyiz veya kullanmayız. Bunların hepsi server action da soyutlanmıştır.
- Server actions ın en büyük faydası artık manuel olarak bir api veya data mutation için route handlers oluşturmamıza gerek kalmamasıdır.
- Server actions derleme zamanında çalışmaz çünkü canlı bir web sunucusu olmadan çağrılacak ve uygulama ile etkileşime giren kullanıcılara yanıt olarak yürütülecek api endpointleri olmaz.
- Server actions, genellikle _form_ gönderimlerini işlemek için kullanılır. Yani server action u normal bir form ögesinin eylem niteliği olarak kullanabiliriz. Bu form ister bir server ister bir client componente yerleştirilmiş olsun. Frontend de herhangi bir ek kod olmadan sadece formların çalışmasını sağlarlar. Ve yine bu formun bir server bileşeni veya client bileşeni olması bile önemli değildir.
- Böylece formlar tüm form verilerini otomatik olarak alır ve perde arkasında sağlanan api endpointi kullanarak serileştirilmiş bir biçimde server action a gönderir. Server action daha sonra istersek yanıt verebilir ve daha sonra bu yanıtı ele alabiliriz. Artık formların yanı sıra server action larda event handlers(sadece client components) ve useEffect teki (sadece client components) regular functions gibi çağrılabilir
- Server actions, formlarda kullanıldığı gibi _butonlarda_ da onClickte callback olarak kullanılır.

#### Server actions ile neler yapabiliriz?

- Data mutations
- Yeni verilerle UI ı güncelleme: Her data mutation işlemi gerçekleştirdiğimizde veri önbelleğini manuel olarak yeniden doğrulamalıyız. revalidatePath() ve revalidateTag() ile önbelleği talep üzerine kolayca yeniden doğrulayabiliriz.
- Cookies ile çalışabiliriz.
- Gerçekleştirdiğimiz action ile ilgili olduğu sürece burada istediğimiz kodları çalıştırabiliriz.
- Server action kullanırken kodun backend de çalıştığını ve bu nedenle girdilerin güvenli olmadığını varsaymamız gerekiyor

- Tarayıcı önbelleği dinamik sayfaları ve dinamik route ları 30 saniye tutar.
- Server action kullandığımızda önbelleği yeniden doğrulamak çok önemlidir!(revalidatePath() ve revalidateTag())
  Mesela contact form için düşündüğümüzde yeniden doğrulamaya ihtiyacımız olmayacaktı çünkü bilgiler ekranda gösterilmeyecekti.
- **useFormStatus():** React DOM'un sağladığı bir hook'tur ve form durumunu yönetmek için kullanılır. Bu hook, form gönderme sürecindeki durumları izlemeyi sağlar ve genellikle asenkron form işlemleri sırasında kullanılır. Örneğin, bir form gönderildiğinde, useFormStatus() sayesinde formun gönderilip gönderilmediğini veya gönderme işleminin hala devam edip etmediğini kontrol edebilirsiniz. Örneğin, useFormStatus() tan _pending_ durumunu alarak "updating" bildirimi gösterebiliriz.
- useFormStatus() hook'u doğrudan form içeren bir component'te kullanamayız, yalnızca client tarafında çalışan componentlerde çalışır. Bu yüzden, form durumunu izlemek için useFormStatus()'u bir client component içinde, formu saran bir alt componentte (client olmalı) kullanabilirsiniz.
- Server action yaptığımızda ve daha sonra bu actionın sonucunun kullanıcı arayüzüne anında yansıtılmasını istediğimizde gerekli verileri yeniden almak gerekir. Yani cache de yeniden doğrulama yapmak gerekir. Bunu revalidatePath ya da revalidateTag ile yaparız. **(revalidate cache)**.
- `revalidatePath("/account/reservations")`
- **useTransition**:Spinner göstermenin useFormStatus dışında bir diğer yolu da useTransition() kullanmaktır.startTransition ile işlevi sararak isPending ile spinnerı kondisyonel olarak renderlayabiliriz. Yani, Bir state güncellemesini sözde bir transition olarak işaretlememizi sağlar. Ve bir state güncellemesi useTransition hooku kullanılarak bir transition olarak işaretlendiğinde bu state güncellemesi kullanıcı arayüzünü engellemeden gerçekleşecektir. Bu da kullanıcı arayüzünün yeniden oluşturma sırasında duyarlı kalacağı anlamına gelir ve ayrıca state transition gerçekleştiğine dair bir gösterge alırız. Reactta kullanıcı arayüzünü engelleyebilecek çok çok state güncellemeleri için yararlı olabilir.

# Redirect

- Sayfa yönlendirme için redirect kullanabiliriz:
- `redirect("/account/reservations")`:

# useOptimistic Hook

- Kullanıcı arayüzünün algılanan performansını artırmak için kullanabileceğimiz, kullanıcı deneyimini arttırmak için bir trick ve tekniktir. Belirli bir async işlemin henüz tamamlanmadan, yani arka planda çalışmaya devam ederken başarılı olacağını varsaymamızdan dolayı optimistic diyoruz.Yani genellikle bir async işlemin başarısız olma ihtimalinin düşük olduğu durumlarda tercih edilir, böylece kullanıcı daha hızlı bir deneyim yaşar.
- useOptimistic () bir hook olduğundan client bir componentte kullanmalıyız.
- useOptimistic i projemde rezervation ları silmek için kullandım. Delete butonuna tıklandığında rezervasyon projede arka planda (veritabanında) silinmeye devem ederken kullanıcı arayüzünden delete butonu kaldırılmış oldu. İşlemin başarılı olacağını varsayarak yaptığım bu işlev şayet başarısız olursa buton tekrar eski konumuna geri gelecektir.
- `const [optimisticBookings,optimisticDelete]=useOptimistic(bookings,(curBookings,bookingId)=>{ return curBookings.filter((booking)=>booking.id!==bookingId)})`:
  - useOptimistic 2 parametre alır. İlki başlangıçta döndürülecek olan mevcut değer ayrıca herhangi bir async action çalışmıyorken yani herhangi bir server action beklemedeyken işlenecek durum; ikincisi bir sonraki optimistic durumu belirleyecek olan durum güncelleme fonksiyonudur. Bu her zaman current state i ve ardından bu optimistic state i hesaplamak için gerekli olan bazı yeni bilgileri alır.
  - useOptimistic ten alınan değerlerin ilki optimistic state, başlangıçta ve o anda çalışan bir async action yokken döndürülecek olan durumdur; ikinci ise setter function dır. Kullanıcı delete butonuna her tıkladığında kullanılacak fonksiyondur. Böylece durum sayfadan hemen kaybolacaktır.
  - <img src="/readme_img/useOptimisticHook.png" alt="useOptimisticHook" width="50%">
